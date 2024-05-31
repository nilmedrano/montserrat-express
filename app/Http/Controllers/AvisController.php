<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Avis;
use App\Models\AvisosPrincipals;
use App\Services\FirebaseService;

class AvisController extends Controller
{
    // protected $firebase;

    // public function __construct()
    // {
    //     $this->firebase = app('firebase.database');
    // }

    public function index()
    {
        $avisos = Avis::all();
        $avisosprincipals = AvisosPrincipals::all();

        return view('avisos', compact('avisos', 'avisosprincipals'));
    }

    public function create(Request $request)
    {
        // Validar los datos de entrada
        $request->validate([
            'texto' => 'required|string',
            'tipo' => 'required|in:Alert,Emergency,Info'
        ]);

        // Crear un nuevo aviso en MySQL
        $aviso = Avis::create([
            'texto' => $request->texto,
            'tipo' => $request->tipo
        ]);

        // Agregar un mensaje a la sesión flash
        session()->flash('success', 'Avís publicat correctament!');

        // Retornar una respuesta redirigiendo a la página de avisos
        return redirect()->route('avisos.index');    
    }

    public function store(Request $request)
    {
        // Validar los datos de entrada
        $request->validate([
            'texto' => 'required|string',
            'tipo' => 'required|in:Alert,Emergency,Info'
        ]);

        // Crear un nuevo aviso en MySQL
        $aviso = Avis::create([
            'texto' => $request->texto,
            'tipo' => $request->tipo
        ]);

        // Agregar un mensaje a la sesión flash
        session()->flash('success', 'Avís publicat correctament!');

        // Retornar una respuesta redirigiendo a la página de avisos
        return redirect()->route('avisos.index');    
    }

    public function update(Request $request, Avis $avis)
    {
        try {
            // Validar los datos recibidos
            $validatedData = $request->validate([
                'texto' => 'required|string|max:255',
                'tipo' => 'required|in:Alert,Emergency,Info',
            ]);

            // Actualizar los campos del aviso
            $avis->update([
                'texto' => $validatedData['texto'],
                'tipo' => $validatedData['tipo'],
            ]);

            // Redirigir con un mensaje de éxito
            return redirect()->route('avisos.index')->with('success', 'Avís actualitzat correctament!');
        } catch (\Exception $e) {
            // Capturar y manejar cualquier excepción
            return redirect()->route('avisos.index')->with('error', 'Ha ocorregut un error en actualitzar l\'avís. Intenta-ho de nou.');
        }
    }

}
