<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GameSession;

class GameController extends Controller
{
    /**
     * Erstelle ein neues Spiel in der gameSessions-Tabelle.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function createGame()
    {
        // Hier kannst du die Logik zum Erstellen eines neuen Spiels implementieren
        // Zum Beispiel:
        $game = new GameSession([
            'status' => 0,
            // Weitere Standardwerte hier hinzufügen
        ]);

        $game->save();

        return response()->json(['message' => 'Neues Spiel erstellt', 'game' => $game], 201);
    }

    /**
     * Gib das Spiel mit dem neuesten Zeitstempel und Status 0 zurück.
     *
     * @return \Illuminate\Http\JsonResponse
     */
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
