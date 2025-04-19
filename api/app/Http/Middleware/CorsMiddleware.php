<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware



{
    public function handle(Request $request, Closure $next)
    {
        // Definiši listu dozvoljenih domena
        $allowedDomains = [
            'https://mojcv-production.up.railway.app', // Tvoj frontend domen
            // Dodaj još domena ako je potrebno
        ];

        // Proveri da li dolazi zahtev sa dozvoljenog domena
        $origin = $request->headers->get('Origin');
        if (in_array($origin, $allowedDomains)) {
            return $next($request)
                ->header('Access-Control-Allow-Origin', $origin) // Postavi specifičan domen
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') // Dozvoli metode
                ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With'); // Dozvoli zaglavlja
        }

        // Ako domena nije dozvoljena, odgovori sa greškom (možeš prilagoditi)
        return response('Unauthorized', 403);
    }
}





