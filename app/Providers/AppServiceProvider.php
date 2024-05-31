<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\FirebaseService;
use Kreait\Firebase\Contract\Database;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        $this->app->singleton(FirebaseService::class, function ($app) {
            $database = $app->make(Database::class);
            return new FirebaseService($database);
        });    }
}
