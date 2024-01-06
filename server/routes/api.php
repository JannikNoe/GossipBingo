<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GossipController;
use App\Http\Controllers\StatsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BingoFieldController;
use App\Http\Controllers\GameWinnerController;


Route::post('/register', [RegisterController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);


// Diese Funktionen können nur abgerufen werden, wenn der Nutzer eingeloggt ist.
Route::middleware(['auth:sanctum'])->group(function () {
    // Abrufen aller Daten bei denen die game_id gleich ist mit der übergebenen id,
    // sowie der Status gleich mit dem übergebenen status ist.
    Route::get('/gossip/{gameId}/{status}', [GossipController::class, 'getGossipByGameAndStatus']);
    // Erstellung eines neuen Datensatzes mit den gegebenen Werten.
    Route::post('/gossip', [GossipController::class, 'createGossip']);
    // Löschen eines Gossip-Eintrags anhand der ID.
    Route::delete('/gossip/{id}', [GossipController::class, 'deleteGossip']);
    // Aktualisierung des Titels eines Gossip-Eintrags anhand der ID.
    Route::put('/gossip/{id}', [GossipController::class, 'updateGossip']);
    // Neues Spiel erstellen
    Route::post('/games/create/{title}', [GameController::class, 'createGame']);
    // Aktuelles Spiel zurückgeben
    Route::get('/games/latest', [GameController::class, 'getLatestGame']);
    // Setze den Gamestatus eines Spiels auf einen anderen Wert
    Route::put('/games/{id}/status/{status}', [GameController::class, 'setGameStatus']);
    // Erstelle einen Gossip Report
    Route::post('/gossip/report/{gossipId}/{userId}', [GossipController::class, 'createReport']);
    // Bestätgigung des Gossip Reports
    Route::put('/gossip/report/{reportId}/confirm/{confirmUserId}', [GossipController::class, 'updateConfirmUserId']);
    // Update E-Mail-Adresse
    Route::put('/user/update-email/{userId}', [UserController::class, 'updateEmail']);
    // Update Password
    Route::put('/user/update-password/{userId}', [UserController::class, 'updatePassword']);
    // Lösche Benutzer
    Route::delete('/user/delete/{userId}', [UserController::class, 'deleteUser']);
    // Gebe mir die Statistiken für die Übersicht (Anzahl Spiele, Anzahl Gossip, Anzahl Nutzer)
    Route::get('/counts',  [StatsController::class, 'getCounts']);
    // Hole alle Nutzer aus der user Tabelle
    Route::get('/users', [UserController::class, 'getAllUsers']);
    // Gebe mir das Bingofield des Nutzers für das aktuelle Spiel oder erstelle eines, sollte es noch nicht vorhanden sein
    Route::get('/bingo-fields/{gameId}/{userId}', [BingoFieldController::class, 'getOrCreateBingoFieldByGameAndUser']);
    // Speichere das Bingo Feld des Nutzers
    Route::put('/bingo-fields/{gameId}/{userId}', [BingoFieldController::class, 'getOrCreateBingoFieldByGameAndUser']);
    // Prüfen ob es ein Bingo gibt
    Route::get('/bingo-check/{gameId}', [BingoFieldController::class, 'checkBingo']);
    // Gib mir alle Gewinner
    Route::get('/game-winners', [GameWinnerController::class, 'getGameWinnersWithDetails']);
    // Gib mir die Gewinne anhand einer userId
    Route::get('/game-winners/user/{userId}', [GameWinnerController::class, 'showGameWinnersByUserId']);


});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
