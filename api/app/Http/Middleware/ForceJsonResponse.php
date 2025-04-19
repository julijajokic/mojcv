<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ForceJsonResponse
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if ($request->expectsJson()) {
            if ($response instanceof Response) {
                $response->header('Content-Type', 'application/json');
            }
        }

        return $response;
    }
}



