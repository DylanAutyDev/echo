<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EchoController;
use App\Http\Controllers\Auth\Register;
use App\Http\Controllers\Auth\Logout;
use App\Http\Controllers\Auth\Login;

Route::get('/', [EchoController::class, 'index'])->name('home');

Route::middleware('auth')->group(function() {
    Route::post('/echos', [EchoController::class, 'store']);
    Route::get('/echos/{echo}/edit', [EchoController::class, 'edit']);
    Route::put('/echos/{echo}', [EchoController::class, "update"]);
    Route::delete('/echos/{echo}', [EchoController::class, "destroy"]);
});

Route::inertia('/register', 'register')->middleware('guest')->name('register');
Route::post('/register', Register::class)->middleware('guest');

Route::inertia('/login', 'login')->middleware('guest')->name('login');
Route::post('/login', Login::class)->middleware('guest');

Route::post('/logout', Logout::class)->middleware('auth');