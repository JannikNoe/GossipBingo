<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {

        // Validierung der Daten
        $validatedData = $request->validate([
            'email' => 'required|email|unique:user',
            'username' => 'required|unique:user',
            'password' => 'required|min:8',
        ]);

        // Benutzer erstellen
        $user = new User;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);

           // Profilbild speichern (optional)
        if ($request->hasFile('profileImage')) {
            $imagePath = $request->file('profileImage')->store('profile_images');
            $user->user_image = $imagePath;
        }
        // Benutzer speichern
        $user->save();
        // Erfolgreiche Registrierungsantwort
        return response()->json(['message' => 'Registration successful'], 201);
    }

}
