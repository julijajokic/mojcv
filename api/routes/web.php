<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::post("/register", [AutfController::class, 'register']);
Route::post("/login",[AutfController::class,'login']);
Route::post("/logout",[AutfController::class,'logout']);

Route::get('/status', function () {
    return response()->json(['status' => 'OK']);
});
Route::get('/test', function () {
    return response()->json(['msg' => 'API je živ']);
});
// Auth::routes();


// Route::get('/', function () {
//     return redirect('https://laravel.com/docs');
// });


// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
