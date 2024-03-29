<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

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
