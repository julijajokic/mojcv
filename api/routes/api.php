<?php

use App\Http\Controllers\AutfController;
 use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::post("/register", [AutfController::class, 'register']);
// Route::post("/login",[AutfController::class,'login']);
// Route::post("/logout",[AutfController::class,'logout']);

// Route::get('/status', function () {
//     return response()->json(['status' => 'OK']);
// });
// Route::get('/test', function () {
//     return response()->json(['msg' => 'API je živ']);
// });
Route::middleware('force_json')->group(function () {
    Route::post("/register", [AutfController::class, 'register']);
    Route::post("/login", [AutfController::class, 'login']);
    Route::post("/logout", [AutfController::class, 'logout']);

    Route::get('/status', function () {
        return response()->json(['status' => 'OK']);
    });

    Route::get('/test', function () {
        return response()->json(['msg' => 'API je živ']);
    });
});




