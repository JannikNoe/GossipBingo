<?php

namespace App\Http\Controllers;

use App\Models\GameWinner;
use Illuminate\Http\Request;
use App\Models\BingoField;
use App\Models\User;
use App\Models\Gossip;


class BingoFieldController extends Controller
{
    public function getOrCreateBingoFieldByGameAndUser($gameId, $userId)
    {
        // Suche den Eintrag in der "bingo_fields" Tabelle
        $bingoField = BingoField::where('game_id', $gameId)

            ->where('user_id', $userId)
            ->first();

        if (!$bingoField) {
            // Wenn kein Eintrag gefunden wurde, erstelle einen neuen Eintrag
            $bingoField = new BingoField();
            $bingoField->game_id = $gameId;
            $bingoField->user_id = $userId;
            // Hier kannst du weitere Felder setzen, falls benötigt

            // Fülle die Felder mit Platzhaltern
//            for ($i = 1; $i <= 16; $i++) {
//                $fieldName = 'field' . $i;
//                $bingoField->$fieldName = 0; // Platzhalterwert
//            }

            // Speichere den neuen Eintrag in der Datenbank
            $bingoField->save();
        }

        // Rückgabe des gefundenen oder neu erstellten Eintrags
        return response()->json($bingoField, 200);
    }

    public function updateBingoFields($gameId, $userId, $selectedGossipId, $fieldId)
    {

        // Überprüfe, ob ein Eintrag mit den angegebenen game_id und user_id existiert
        $bingoField = BingoField::where('game_id', $gameId)
            ->where('user_id', $userId)
            ->first();

        if (!$bingoField) {
            // Wenn kein Eintrag gefunden wurde, kannst du hier entsprechend reagieren
            return response()->json(['message' => 'Eintrag nicht gefunden'], 404);
        }
        // Überprüfe, ob die Anfrage das Feld und den Wert enthält
        $field = $fieldId;
        $value = $selectedGossipId;

        if (!$field || !$value) {
            // Wenn die erforderlichen Daten nicht vorhanden sind, gib einen Fehler zurück
            return response()->json(['message' => 'Feld und Wert sind erforderlich'], 400);
        }

        // Stelle sicher, dass das Feld gültig ist
        if (!in_array($field, ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7', 'field8', 'field9', 'field10', 'field11', 'field12', 'field13', 'field14', 'field15', 'field16'])) {
            return response()->json(['message' => 'Ungültiges Feld'], 400);
        }

        // Aktualisiere nur das spezifizierte Feld
        $bingoField->$field = $value;
        $bingoField->save();

        // Rückgabe der aktualisierten Daten
        return response()->json($bingoField, 200);
    }

    public function checkBingo($gameId)
    {
        $bingoFields = BingoField::where('game_id', $gameId)->get();

        if ($bingoFields->isEmpty()) {
            return response()->json(['message' => 'Keine Bingo-Felder gefunden'], 404);
        }

        $gossipIds = $bingoFields->flatMap(function ($bingoField) {
            return [
                $bingoField->field1, $bingoField->field2, $bingoField->field3, $bingoField->field4,
                $bingoField->field5, $bingoField->field6, $bingoField->field7, $bingoField->field8,
                $bingoField->field9, $bingoField->field10, $bingoField->field11, $bingoField->field12,
                $bingoField->field13, $bingoField->field14, $bingoField->field15, $bingoField->field16,
            ];
        })->unique()->values();

        $gossipStatuses = Gossip::whereIn('id', $gossipIds)->pluck('status', 'id');

        $bingoCombinations = [
            ['field1', 'field2', 'field3', 'field4'],
            ['field5', 'field6', 'field7', 'field8'],
            ['field9', 'field10', 'field11', 'field12'],
            ['field13', 'field14', 'field15', 'field16'],
            ['field1', 'field5', 'field9', 'field13'],
            ['field2', 'field6', 'field10', 'field14'],
            ['field3', 'field7', 'field11', 'field15'],
            ['field4', 'field8', 'field12', 'field16'],
            ['field1', 'field6', 'field11', 'field16'],
            ['field4', 'field7', 'field10', 'field13'],
        ];

        foreach ($bingoFields as $bingoField) {
            $isBingo = false;

            foreach ($bingoCombinations as $combination) {
                $combinationStatuses = collect($combination)->map(function ($fieldName) use ($bingoField, $gossipStatuses) {
                    $gossipId = $bingoField->{$fieldName};
                    return $gossipStatuses[$gossipId] ?? null;
                });

                if ($combinationStatuses->filter()->count() === 4 && $combinationStatuses->unique()->count() === 1 && $combinationStatuses->first() === 1) {
                    $isBingo = true;
                    break;
                }
            }

            if ($isBingo) {
                // Überprüfen Sie, ob bereits ein Eintrag in der game_winners-Tabelle vorhanden ist
                $existingWinner = GameWinner::where('game_id', $gameId)
                    ->where('user_id', $bingoField->user_id)
                    ->first();

                if (!$existingWinner) {
                    // Erstellen Sie einen neuen Eintrag in der game_winners-Tabelle
                    GameWinner::create([
                        'game_id' => $gameId,
                        'user_id' => $bingoField->user_id,
                    ]);
                }

                // Holen Sie den Benutzer aus der user-Tabelle
                $user = User::find($bingoField->user_id);
                if (!$user) {
                    // Falls kein Nutzer gefunden wurde, geben Sie eine Fehlermeldung zurück
                    return response()->json(['message' => 'Nutzer nicht gefunden'], 404);
                }
                // Geben Sie den Benutzer als Bingo-Gewinner zurück
                return response()->json(['winner' => $user], 200);
            }
        }

        return response()->json(['message' => 'Kein Bingo gefunden'], 201);
    }


}
