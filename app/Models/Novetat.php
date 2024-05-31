<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;


class Novetat extends Model
{
    protected $fillable = [
        'nom', 'descripcio', 'data', 'imatge', 'user_id', 'id' // Añade 'user_id' al array fillable
    ];

    // Definir la relación con el usuario que creó la novedad
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
