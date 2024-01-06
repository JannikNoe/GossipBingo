<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BingoField extends Model
{
    // Angabe der Tabelle, die diesem Modell zugeordnet ist
    protected $table = 'bingo_fields';

    // Die Felder, die in der Datenbank gefüllt werden können
    protected $fillable = [
        'game_id',
        'user_id',
        'field1',
        'field2',
        'field3',
        'field4',
        'field5',
        'field6',
        'field7',
        'field8',
        'field9',
        'field10',
        'field11',
        'field12',
        'field13',
        'field14',
        'field15',
        'field16',
    ];

    public $timestamps = true;


}
