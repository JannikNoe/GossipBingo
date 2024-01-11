<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckLoginMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        try {

            if (!$request->session()->has('user')) {
                return response()->json(['message' => 'Nicht autorisiert'], 401);
            }
            return $next($request);

        } catch(Exception $e) {
            echo $e->getMessage();
            dd('Hure');
        }
    }
}
