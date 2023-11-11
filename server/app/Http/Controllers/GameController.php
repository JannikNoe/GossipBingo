<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GameSession;

class GameController extends Controller
{
    //Setzte den Spielstatus auf 1
    public function setGameStatus($id)
    {
        $game = GameSession::find($id);

        if (!$game) {
            return response()->json(['message' => 'Spiel nicht gefunden'], 404);
        }

        $game->status = 1;
        $game->save();

        return response()->json(['message' => 'Spielstatus auf 1 gesetzt', 'game' => $game], 200);
    }
    //Erstelle eine neue Spielrunde
    public function createGame()
    {
        $game = new GameSession([
            'status' => 0,
        ]);

        $game->save();

        return response()->json(['message' => 'Neues Spiel erstellt', 'game' => $game], 201);
    }

    //Gib das Spiel mit dem neuesten Zeitstempel und Status 0 zurück.
    public function getLatestGame()
    {
        $latestGame = GameSession::where('status', 0)->latest()->first();

        if ($latestGame) {
            return response()->json(['message' => 'Neuestes Spiel abgerufen', 'game' => $latestGame], 200);
        } else {
            return response()->json(['message' => 'Kein Spiel gefunden'], 404);
        }
    }
}
