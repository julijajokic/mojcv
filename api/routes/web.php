<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Auth::routes();


// Route::get('/', function () {
//     return redirect('https://laravel.com/docs');
// });


// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
