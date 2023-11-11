<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GossipController;


Route::post('/register', [RegisterController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/games/create', [GameController::class, 'createGame']);
Route::get('/games/latest', [GameController::class, 'getLatestGame']);
Route::put('/games/{id}/status', [GameController::class, 'setGameStatus']);

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
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
