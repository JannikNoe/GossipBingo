<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Handle a registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentifizierung erfolgreich
            $user = Auth::user();
            $userId = $user->id;
            $email = $user->email;
            $username = $user->username;
            $profileImage = $user->profile_image;

            return response()->json([
                'message' => 'Login successful',
                'userId' => $userId,
                'email' => $email,
                'username' => $username,
                'profileImage' => $profileImage

            ], 200);

        }

        // Authentifizierung fehlgeschlagen
        return response()->json(['message' => 'E-Mail oder Passwort falsch'], 401);
    }

}
