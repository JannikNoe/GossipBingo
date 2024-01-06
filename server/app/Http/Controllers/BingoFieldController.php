<?php

namespace App\Http\Controllers;

use App\Models\BingoField;

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

}
