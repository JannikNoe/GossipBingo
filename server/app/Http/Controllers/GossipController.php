<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gossip;
use App\Models\GossipReport;
use Illuminate\Support\Facades\Auth;

class GossipController extends Controller
{
    /**
     * Abrufen aller Daten bei denen die game_id gleich ist mit der übergebenen id,
     * sowie der Status gleich mit dem übergebenen status ist.
     * Dabei wird ein Left Join zur user-Tabelle erstellt, bei dem user.id = gossip.gossip_creator ist.
     */
    public function getGossipByGameAndStatus($gameId, $status)
    {
        $gossip = Gossip::getGossipByGameAndStatus($gameId, $status);

        return response()->json(['gossip' => $gossip], 201);
    }

    /**
     * Erstellung eines neuen Datensatzes mit den gegebenen Werten.
     */
    public function createGossip(Request $request)
    {

        $data = $request->validate([
            'game_id' => 'required|integer',
            'title' => 'required|string|max:256',
        ]);

        $gossip = Gossip::create($data);

        return response()->json(['message' => 'Gossip erstellt', 'gossip' => $gossip], 201);
    }

    /**
     * Löschen eines Gossip-Eintrags anhand der ID.
     */
//    public function deleteGossip($id)
//    {
//        $user = Auth::user();
//        $gossip = Gossip::find($id);
//
//        if (!$gossip) {
//            return response()->json(['message' => 'Gossip nicht gefunden'], 404);
//        }
//
//        if (!$user || !in_array($user->role, [1]) && $user->id !== $gossip->gossip_creator) {
//            return response()->json(['message' => 'Nicht autorisiert'], 403);
//        }
//
//        $gossip->delete();
//
//        return response()->json(['message' => 'Gossip gelöscht'], 200);
//    }

    /**
     * Aktualisierung des Titels eines Gossip-Eintrags anhand der ID.
     */
    public function updateGossip(Request $request, $id)
    {
        $user = Auth::user();
        $gossip = Gossip::find($id);

        if (!$gossip) {
            return response()->json(['message' => 'Gossip nicht gefunden'], 404);
        }

        if (!$user || !in_array($user->role, [1]) && $user->id !== $gossip->gossip_creator) {
            return response()->json(['message' => 'Nicht autorisiert'], 403);
        }

        $data = $request->validate([
            'title' => 'required|string|max:256',
        ]);

        $gossip->title = $data['title'];
        $gossip->save();

        return response()->json(['message' => 'Gossip aktualisiert', 'gossip' => $gossip], 200);
    }


    public function updateStatus($id, $status)
    {
        $gossip = Gossip::find($id);

        if ($gossip) {
            $gossip->status = $status;
            $gossip->save();
        }

        return response()->json(['message' => 'Gossip Report bestätigt'], 200);
    }

}
