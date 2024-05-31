

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
    </style>
</head>

<body>
    @extends('layouts.panel') <!-- Si estás utilizando Blade para plantillas -->

    @section('content')
    <div class="flex flex-wrap md:flex-nowrap md:gap-4">
        <div class="w-full md:w-1/3 ">
            <div class="element-montserrat p-4" > <!-- Flexbox con espacio entre los elementos y padding horizontal -->
                <div>
                    <h1>Novetat</h1>
                </div>
                <div class="mt-2 flex justify-between">
                    <h2 id="selectedOption1">{{ $novetat->nom }}</h2>
                    <button class=' outline-none focus:outline-none flex items-center' id="toggleTransportButton" style='align-items: start; margin-top: 4px;'>
                        <span>
                            <svg class='fill-current h-4 w-4 transform group-hover:-rotate-180
                            transition duration-150 ease-in-out' xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24' style='color: white; width:20px; height: 20px;'>
                                <path d='M3 17.25V21h3.75l11.02-11.02-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.41L18.37 3.29a1.003 1.003 0 00-1.41 0L15.13 5.12l3.75 3.75 1.83-1.83z'/>
                            </svg>
                        </span>
                    </button>
                </div>

            </div>
            <div class="element-montserrat p-4 mt-4 w-full" > <!-- Flexbox con espacio entre los elementos y padding horizontal -->
                <div>
                    <h1>Descripció</h1>
                </div>
                <div class="mt-2 flex justify-between">
                    <h2 id="selectedOption2">{{ $novetat->descripcio }}</h2>
                    <button id="toggleSeleccionaButton" class='outline-none focus:outline-none flex items-center' style='align-items: start;'>
                        <span>
                            <svg class='fill-current h-4 w-4 transform group-hover:-rotate-180
                            transition duration-150 ease-in-out' xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24' style='color: white; width:20px; height: 20px;'>
                                <path d='M3 17.25V21h3.75l11.02-11.02-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.41L18.37 3.29a1.003 1.003 0 00-1.41 0L15.13 5.12l3.75 3.75 1.83-1.83z'/>
                            </svg>
                        </span>
                    </button>
                </div>

            </div>
        </div>
        <div class="element-montserrat w-full mt-4 md:mt-0 md:w-2/3 p-4">
            <div class="flex justify-between"> <!-- Flexbox con espacio entre los elementos y padding horizontal -->
                <div>
                    <h1>Imatge</h1>
                </div>
                <div>
                    <button class="button1">CANVIAR IMATGE</button>
                </div>
            </div>
            <div class="mt-4"> <!-- Añadido margin-top para separar la imagen del título y botón -->
                <img src="{{ asset($novetat->imatge) }}"alt="Imatge de cremallera" style="object-fit: cover;height: 170px !important;" class="w-full h-auto md:max-h-48 object-center"> <!-- Añadido alt y clases Tailwind -->
            </div>
        </div>
    </div>
    <!-- <div class="element-montserrat  p-4 mt-4">
        <div class="flex justify-between">
            <div>
                <h1>Tarifes bitllets</h1>
            </div>
            <div id="CrearAvisos">
                <button class="button1" onclick="">REGISTRAR TAULES</button>
                <script>

                </script>
            </div>
        </div>
        <div class="flex justify-between flex-wrap md:flex-nowrap md:gap-4">
            @include('taulestransport')
        </div>
    </div> -->

    @endsection

</body>
</html>
