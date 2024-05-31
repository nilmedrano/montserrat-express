<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Avis;
use App\Models\AvisosPrincipals;

class AvisosPrincipalsController extends Controller
{
    // protected $firebase;

    // public function __construct()
    // {
    //     $this->firebase = app('firebase.database');
    // }

    public function index()
    {
        // $avisos = Avis::all();
        // $avisosprincipals = AvisosPrincipals::all();

        // return view('avisos', compact('avisos', 'avisosprincipals'));
    }

    public function create(Request $request)
    {
        // // Validar los datos de entrada
        // $request->validate([
        //     'texto' => 'required|string',
        //     'tipo' => 'required|in:Alert,Emergency,Info'
        // ]);

        // // Crear un nuevo aviso en MySQL
        // $aviso = Avis::create([
        //     'texto' => $request->texto,
        //     'tipo' => $request->tipo
        // ]);

        // // Agregar un mensaje a la sesión flash
        // session()->flash('success', 'Avís publicat correctament!');

        // // Retornar una respuesta redirigiendo a la página de avisos
        // return redirect()->route('avisos.index');    
    }

    // AvisosPrincipalsController.php
    public function store(Request $request)
    {
        try {

            $validatedData = $request->validate([
                'avisos' => 'required|array|max:4', // Validar que sea un array y que tenga máximo 4 elementos
                'avisos.*' => 'exists:avis,id', // Validar que cada elemento del array exista en la tabla 'avis'
            ], [
                'avisos.required' => 'És necessari seleccionar almenys un avís.',
                'avisos.array' => 'El camp avisos ha de ser una llista.',
                'avisos.max' => 'Només es poden introduir com a màxim 4 avisos principals.',
                'avisos.*.exists' => 'Un dels avisos seleccionats no és vàlid.'
            ]);    
    
            // Limpiar la tabla avisosprincipals
            AvisosPrincipals::truncate();
    
            // Insertar los nuevos avisosprincipals
            foreach ($validatedData['avisos'] as $avisId) {
                AvisosPrincipals::create(['avis_id' => $avisId]);
            }
    
            // Añadir mensaje de éxito a la sesión
            session()->flash('success', 'Avisos principals publicats correctament!');
    
        } catch (\Exception $e) {
            // Añadir mensaje de error a la sesión
            session()->flash('error', 'Ha ocorregut un error al publicar els avisos principals. Per favor, intenta de nou.');
        }
    
        // Redirigir a la ruta avisos.index
        return redirect()->route('avisos.index');
    }
}
