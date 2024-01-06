<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class GossipReport extends Model
{
    use HasFactory;
    protected $table = 'gossip_reports';

    protected $fillable = [
        'gossip_id',
        'user_id',
    ];
    public $timestamps = true;
}
