<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentifizierung erfolgreich
            $user = Auth::user();

            // Session Starten
            Session::start();

            // Packt Daten in die Session
            Session::put('user', $user);

            return response()->json([
                'message' => 'Login successful',
                'session' => $user,
            ], 201);
        }

        // Authentifizierung fehlgeschlagen
        return response()->json(['message' => 'E-Mail oder Passwort falsch'], 401);
    }

    public function logout()
    {
        Auth::logout(); // Benutzer ausloggen
        return response()->json(['message' => 'Logout erfolgreich'], 200);
    }
}
