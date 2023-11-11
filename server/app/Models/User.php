<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'user';
    protected $fillable = [
        'email', 'username', 'password', 'profileImage',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];


    //Speicherung des Profilbildpfads
    public function setProfileImageAttribute($value)
    {
        $this->attributes['profileImage'] = $value ? asset('storage/' . $value) : null;
    }
}
