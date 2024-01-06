<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GameSession;

class GameController extends Controller
{
    //Verändere den Spielstatus
    public function setGameStatus($id,$status)
    {
        $game = GameSession::find($id);

        if (!$game) {
            return response()->json(['message' => 'Spiel nicht gefunden'], 404);
        }

        $game->status = $status;
        $game->save();

        return response()->json(['message' => 'Spielstatus auf 1 gesetzt', 'game' => $game], 200);
    }
    //Erstelle eine neue Spielrunde
    public function createGame($title)
    {
        $game = new GameSession([
            'title' => $title,
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
