<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function updateEmail(Request $request, $userId)
    {
        // Validiere die Eingabe, z.B., dass die neue Email-Adresse gültig ist
        $request->validate([
            'new_email' => 'required|email|unique:users,email',
        ]);

        // Suche den Nutzer anhand seiner "id"
        $user = User::find($userId);

        if (!$user) {
            // Der Nutzer wurde nicht gefunden, du kannst hier entsprechend reagieren
            return response()->json(['message' => 'Nutzer nicht gefunden'], 404);
        }

        // Aktualisiere die Email-Adresse des Nutzers
        $user->email = $request->input('new_email');
        $user->save();

        return response()->json(['message' => 'Email erfolgreich aktualisiert'], 200);
    }

    public function updatePassword(Request $request, $userId)
    {
        // Validiere die Eingabe, z.B., dass das neue Passwort den Anforderungen entspricht
        $request->validate([
            'new_password' => 'required|min:8', // Beispiel: Mindestens 8 Zeichen
        ]);

        // Suche den Nutzer anhand seiner "id"
        $user = User::find($userId);

        if (!$user) {
            // Der Nutzer wurde nicht gefunden, du kannst hier entsprechend reagieren
            return response()->json(['message' => 'Nutzer nicht gefunden'], 404);
        }

        // Generiere ein gehashtes Passwort für das neue Passwort
        $newPasswordHash = Hash::make($request->input('new_password'));

        // Aktualisiere das Passwort des Nutzers
        $user->password = $newPasswordHash;
        $user->save();

        return response()->json(['message' => 'Passwort erfolgreich aktualisiert'], 200);
    }

}
