<!-- resources/views/home.blade.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Inicio</title>
    <style>
        .sol{
            background-image: url('{{ asset('images/background.webp') }}'); /* Ruta de la imagen */
        }
        .icotemps{
            width: 150px;
            filter: invert(1);
        }
        .desc{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            max-width: 100%;
        }
    </style>
</head>

<body>
    @extends('layouts.panel') <!-- Si estás utilizando Blade para plantillas -->

    @section('content')
    <div class="element-montserrat  p-4 mt-4">
        <div class="flex justify-between">
            <div>
                <h1>Llista de reserves</h1>
            </div>
            <div id="CrearAvisos">
                <button class="button1" onclick="redirectToForm()">CREAR NOVETAT</button>
                <script>
                    function redirectToForm() {
                        window.location.href = "{{ route('avisos.create') }}";
                    }
                </script>
            </div>
        </div>
        <div id='containerTaulesReserves'>
            @include('taulesreserves')
        </div>
    </div>
    @endsection
</body>
</html>
