<?php

use Illuminate\Support\Facades\Route;



// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', function () {
    return response()->json([
        'message' => 'Hello, World!',
        'status' => 'success'
    ]);
});


// Auth::routes();


// Route::get('/', function () {
//     return redirect('https://laravel.com/docs');
// });


// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
