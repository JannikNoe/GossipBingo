<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
    ];
    public function setGameStatus()
    {
        $this->status = 1;
        $this->save();
    }
}
