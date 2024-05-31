<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('novetats', function (Blueprint $table) {
            $table->id();
            $table->string('nom'); // Campo para el nombre
            $table->text('descripcio'); // Campo para la descripción
            $table->date('data'); // Campo para la fecha
            $table->string('imatge')->nullable(); // Campo para la imagen (nullable por si no se proporciona)
            $table->foreignId('user_id')->constrained('users'); // Clave externa para el ID del usuario
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('novetats');
    }
};
