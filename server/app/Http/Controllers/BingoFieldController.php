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

}
