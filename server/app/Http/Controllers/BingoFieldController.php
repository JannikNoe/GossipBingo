<?php

namespace App\Http\Controllers;

use App\Models\BingoField;
use App\Models\User;

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

            // Speichere den neuen Eintrag in der Datenbank
            $bingoField->save();
        }

        // Rückgabe des gefundenen oder neu erstellten Eintrags
        return response()->json($bingoField, 200);
    }

    public function updateBingoFields(Request $request, $gameId, $userId)
    {
        // Überprüfe, ob ein Eintrag mit den angegebenen game_id und user_id existiert
        $bingoField = BingoField::where('game_id', $gameId)
            ->where('user_id', $userId)
            ->first();

        if (!$bingoField) {
            // Wenn kein Eintrag gefunden wurde, kannst du hier entsprechend reagieren
            return response()->json(['message' => 'Eintrag nicht gefunden'], 404);
        }

        // Aktualisiere die Felder 'field1' bis 'field16' mit den Daten aus der Anfrage
        $bingoField->fill($request->only('field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7', 'field8', 'field9', 'field10', 'field11', 'field12', 'field13', 'field14', 'field15', 'field16'));

        // Speichere die aktualisierten Daten in der Datenbank
        $bingoField->save();

        // Rückgabe der aktualisierten Daten
        return response()->json($bingoField, 200);
    }


    public function checkBingo($gameId)
    {
        // Holen Sie alle Einträge aus der bingo_fields Tabelle mit der gegebenen gameId
        $bingoFields = BingoField::where('game_id', $gameId)->get();

        // Definieren Sie die Bingo-Kombinationen
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

        // Durchlaufe alle Bingo-Einträge
        foreach ($bingoFields as $bingoField) {
            $bingoNumbers = [
                $bingoField->field1, $bingoField->field2, $bingoField->field3, $bingoField->field4,
                $bingoField->field5, $bingoField->field6, $bingoField->field7, $bingoField->field8,
                $bingoField->field9, $bingoField->field10, $bingoField->field11, $bingoField->field12,
                $bingoField->field13, $bingoField->field14, $bingoField->field15, $bingoField->field16,
            ];

            // Überprüfen Sie, ob mindestens eine Bingo-Kombination den Status "1" hat
            $isBingo = false;

            foreach ($bingoCombinations as $combination) {
                if (
                    in_array($combination[0], $bingoNumbers) &&
                    in_array($combination[1], $bingoNumbers) &&
                    in_array($combination[2], $bingoNumbers) &&
                    in_array($combination[3], $bingoNumbers)
                ) {
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
                        'timestamp' => now(),
                    ]);
                }

                // Holen Sie den Benutzer aus der user-Tabelle
                $user = User::find($bingoField->user_id);

                // Geben Sie den Benutzer als Bingo-Gewinner zurück
                return response()->json(['winner' => $user], 200);
            }
        }

        // Wenn kein Bingo gefunden wurde, geben Sie eine entsprechende Meldung zurück
        return response()->json(['message' => 'Kein Bingo gefunden'], 404);
    }


}
