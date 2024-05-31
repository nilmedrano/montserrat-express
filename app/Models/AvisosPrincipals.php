<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Models\Avis;

class AvisosPrincipals extends Model
{
    use HasFactory;

    protected $table = 'avisos_principals';

    protected $fillable = ['avis_id'];

    public function avis()
    {
        return $this->belongsTo(Avis::class);
    }
}
