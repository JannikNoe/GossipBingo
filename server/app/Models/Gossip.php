<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gossip extends Model
{
    use HasFactory;

    protected $fillable = ['game_id', 'title'];
    protected $table = 'gossip';


    /**
     * Gibt alle Gossip-Einträge basierend auf der game_id und dem Status zurück.
     */
    public static function getGossipByGameAndStatus($gameId, $status)
    {
        return static::where('game_id', $gameId)
            ->where('status', $status)
            ->select('gossip.*')
            ->get();
    }
}
