<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GossipController;


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

});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
