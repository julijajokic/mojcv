<?php
return [

/*
|--------------------------------------------------------------------------
| Cross-Origin Resource Sharing (CORS) Configuration
|--------------------------------------------------------------------------
|
| Here you may configure your settings for cross-origin resource sharing
| or "CORS". This determines what cross-origin operations may execute
| in web browsers. You are free to adjust these settings as needed.
|
| To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
|
*/

'paths' => ['api/*', 'sanctum/csrf-cookie'], // Definiši rute koje treba da podrže CORS

'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Metode koje su dozvoljene

'allowed_origins' => ['https://mojcv-production-8561.up.railway.app'], // Dozvoljeni domeni

'allowed_origins_patterns' => [], // Opcionalno, koristi se za regularne izraze

'allowed_headers' => ['Content-Type', 'Authorization'], // Dozvoljena zaglavlja

'exposed_headers' => [], // Zaglavlja koja će biti izložena korisnicima

'max_age' => 0, // Maksimalni period za keširanje CORS zahteva

'supports_credentials' => true, // Da li se podržavaju kolačići, sesije i slično
];

    


