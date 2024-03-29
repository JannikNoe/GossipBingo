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
            $user = Auth::user();
            $token = $request->user()->createToken('authToken')->plainTextToken;

            return response()->json([
                'message' => 'Login successful',
                'user' => $user,
                'token' => $token,
            ], 200);
        }

        return response()->json(['message' => 'E-Mail oder Passwort falsch'], 401);
    }

    public function logout(Request $request)
    {
        Auth::user()->tokens()->delete();
//        $request -> user() -> tokens
        return response()->json(['message' => 'Logout erfolgreich'], 200);
    }
}
