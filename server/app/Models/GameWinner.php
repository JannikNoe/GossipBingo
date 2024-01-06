<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameWinner extends Model
{
    use HasFactory;

    // Angabe der Tabelle, die diesem Modell zugeordnet ist
    protected $table = 'game_winners';

    // Die Felder, die in der Datenbank gefüllt werden können
    protected $fillable = [
        'game_id',
        'user_id',
        'timestamp'
    ];
}
