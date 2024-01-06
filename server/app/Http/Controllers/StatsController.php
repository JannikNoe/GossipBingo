<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\GameSession;
use App\Models\Gossip;

class StatsController extends Controller
{


    public function getCounts()
    {
        // Zähle die Nutzer in der "user" Tabelle
        $userCount = User::count();

        // Zähle die Spiele in der "game_sessions" Tabelle
        $gameCount = GameSession::count();

        // Zähle die erstellten Gossips in der "gossip" Tabelle
        $gossipCount = Gossip::count();

        // Rückgabe der Zahlen
        return response()->json([
            'user_count' => $userCount,
            'game_count' => $gameCount,
            'gossip_count' => $gossipCount,
        ], 200);
    }
}
