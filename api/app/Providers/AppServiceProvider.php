<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // {
        // Učitaj rute iz 'routes/api.php' bez middleware
        Route::prefix('api')
        ->group(base_path('routes/api.php'));
}
    
}
