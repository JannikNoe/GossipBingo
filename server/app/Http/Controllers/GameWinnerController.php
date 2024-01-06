<?php

use App\Models\GameWinner;
use Illuminate\Support\Facades\DB;

class GameWinnerController extends Controller
{
    public function getGameWinnersWithDetails()
    {
        $gameWinners = GameWinner::select('game_winners.*', 'users.username', 'users.user_image', 'game_sessions.title', 'game_sessions.created_at')
            ->leftJoin('users', 'game_winners.user_id', '=', 'users.id')
            ->leftJoin('game_sessions', 'game_winners.game_id', '=', 'game_sessions.id')
            ->orderBy('game_winners.timestamp', 'desc')
            ->get();

        return $gameWinners;
    }

    public function showGameWinners()
    {
        $gameWinners = $this->getGameWinnersWithDetails();

        return view('game_winners.index', ['gameWinners' => $gameWinners]);
    }

    public function getGameWinnersByUserId($userId)
    {
        $gameWinners = GameWinner::select('game_winners.*', 'users.username', 'users.user_image', 'game_sessions.title', 'game_sessions.created_at')
            ->leftJoin('users', 'game_winners.user_id', '=', 'users.id')
            ->leftJoin('game_sessions', 'game_winners.game_id', '=', 'game_sessions.id')
            ->where('game_winners.user_id', $userId)
            ->orderBy('game_winners.timestamp', 'desc')
            ->get();

        return $gameWinners;
    }

    public function showGameWinnersByUserId($userId)
    {
        $gameWinners = $this->getGameWinnersByUserId($userId);

        return view('game_winners.index', ['gameWinners' => $gameWinners]);
    }

}
