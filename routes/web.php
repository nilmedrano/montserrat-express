<?php
require __DIR__.'/../vendor/autoload.php';

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AvisController;
use App\Http\Controllers\AvisosPrincipalsController;
use App\Http\Controllers\NovetatController;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/avisos', function () {
    return view('avisos');
});

Route::get('/novetats', function () {
    return view('novetats');
});

Route::get('/transport', function () {
    return view('transport');
});

Route::get('/reserves', function () {
    return view('reserves');
});

Route::get('/avisos', [AvisController::class, 'index'])->name('avisos.index');
Route::post('/avisos/create', [AvisController::class, 'create'])->name('avisos.create');
Route::post('/avisos', [AvisController::class, 'store'])->name('avisos.store');
Route::post('/avisosprincipals', [AvisosPrincipalsController::class, 'store'])->name('avisosprincipals.store');
Route::post('/avisos/{avis}', [AvisController::class, 'update'])->name('avisos.update');
Route::get('/novetats', [NovetatController::class, 'index'])->name('novetats.index');
Route::get('/novetats/{id}/edit', [NovetatController::class, 'edit'])->name('novetats.edit');
Route::get('/novetats/{id}', [NovetatController::class, 'index'])->name('novetats.index');
Route::post('/novetats/{id}', [NovetatController::class, 'update'])->name('novetats.update');
Route::post('/novetats/create', [NovetatController::class, 'create'])->name('novetats.create');

// Route::get('/a, [AvisController::class, 'index'])->name('avisos.index');

require __DIR__.'/auth.php';