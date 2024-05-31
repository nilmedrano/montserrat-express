<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Novetat;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class NovetatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        $novetats = Novetat::all();
        return view('novetats', compact('users', 'novetats'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // Mostrar el formulario para crear una nueva novedad
        return view('novetats.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validar los datos del formulario
        $request->validate([
            'nom' => 'required|string|max:255',
            'descripcio' => 'required|string',
            'data' => 'required|date',
            'imatge' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        // Obtener el ID del usuario autenticado
        $user_id = Auth::id();
    
        // Crear la novedad en la base de datos y asignar el usuario
        Novetat::create([
            'nom' => $request->nom,
            'descripcio' => $request->descripcio,
            'data' => $request->data,
            'imatge' => $request->imatge,
            'user_id' => $user_id,
        ]);
    
        // Redireccionar a la página de inicio o a donde desees
        return redirect()->route('novetats.index')->with('success', 'Novedat creada correctamente.');
    }

    public function edit($id){
        $novetat = Novetat::findOrFail($id);
        return view('novetats.edit', compact('novetat'));    
    }

    public function update(Request $request, $id)
    {
        try{
            $request->validate([
            'nom' => 'required|string|max:255',
            'descripcio' => 'required|string',
            'data' => 'required|date',
            'imatge' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
            $novetat = Novetat::findOrFail($id);
            $novetat->update($request->all());
                // Añadir mensaje de éxito a la sesión
                session()->flash('success', 'Novetat modificada correctament!');
        } catch (\Exception $e) {
            // Añadir mensaje de error a la sesión
            session()->flash('error', 'Ha ocorregut un error en modificar la novetat. Per favor, intenta de nou.');
        }
    
        // Redirigir a la ruta avisos.index
        return redirect()->route('novetats.index');    
    }
}
