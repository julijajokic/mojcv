<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],  // Definiše koje rute mogu koristiti CORS. Većina API ruta će biti pod 'api/*'.
    
    'allowed_methods' => ['*'],  // Dozvoljava sve HTTP metode (GET, POST, PUT, DELETE).
    
    'allowed_origins' => ['https://mojcv-production-8561.up.railway.app'],  // Ovde stavite URL vašeg frontend-a.
    
    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],  // Dozvoljava sva HTTP zaglavlja.
    
    'exposed_headers' => [],
    
    'max_age' => 0,  // Vreme keširanja CORS odgovora. 0 znači da se ne kešira.
    
    'supports_credentials' => true,  // Da li dozvoliti slanje kolačića ili sesija (ako koristite autentifikaciju).
];
