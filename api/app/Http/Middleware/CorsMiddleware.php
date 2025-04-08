<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // If the request is an OPTIONS request, we don't need to go further
        if ($request->getMethod() === "OPTIONS") {
            return response()->json([], 200);
        }

        $response = $next($request);

        // Add CORS headers
        // If you have multiple front-end domains, add them here
        $allowedOrigins = [
            'http://localhost:9000',  // Add your frontend domain here
            'https://mojcv-production-8561.up.railway.app', // or any other frontend domains you want to allow
        ];

        // Check if the origin of the request is allowed
        if (in_array($request->header('Origin'), $allowedOrigins)) {
            $response->headers->set('Access-Control-Allow-Origin', $request->header('Origin'));
        }

        // Allow the following methods
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        // Allow these headers
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');

        // Allow credentials (cookies, HTTP authentication)
        $response->headers->set('Access-Control-Allow-Credentials', 'true');

        return $response;
    }
}


