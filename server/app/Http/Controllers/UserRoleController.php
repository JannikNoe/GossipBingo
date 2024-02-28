<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserRoleController extends Controller
{
    public function getUserRole($userId)
    {
        // Logik, um die Benutzerrolle basierend auf der Benutzer-ID abzurufen
        $user = User::findOrFail($userId); // Annahme: Du hast eine User-Tabelle
        $userRole = $user->role; // Annahme: Die Benutzerrolle befindet sich in der Spalte 'role' der User-Tabelle

        return response()->json(['role' => $userRole]);
    }
}
