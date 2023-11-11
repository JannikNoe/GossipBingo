<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;


Route::post('/register', [RegisterController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/games/create', [GameController::class, 'createGame']);
Route::get('/games/latest', [GameController::class, 'getLatestGame']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
