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
                    <h1>Transport</h1>
                </div>
                <div class="mt-2 flex justify-between">
                    <h2 id="selectedOption1">Cremallera</h2>
                    <button class=' outline-none focus:outline-none flex items-center' id="toggleTransportButton" style='align-items: start;'>
                        <span>
                            <svg class='fill-current h-4 w-4 transform group-hover:-rotate-180
                            transition duration-150 ease-in-out' xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20' style='
                            color: white; width:40px; height: 40px;'><path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' /></svg>
                        </span>
                    </button>
                </div>
                <div class="mt-2 hidden" id="optionsTransportContainer">
                    <div class="button1 rounded mt-2" onclick="selectOption1('Cremallera')">
                        <h3 class="text-md">Cremallera</h3>
                    </div>
                    <div class="button1 rounded mt-2" onclick="selectOption1('Aeri')">
                        <h3 class="text-md">Aeri</h3>
                    </div>
                    <div class="button1 rounded mt-2" onclick="selectOption1('Funiculars')">
                        <h3 class="text-md">Funiculars</h3>
                    </div>
                </div>
            </div>
            <div class="element-montserrat p-4 mt-4 w-full" > <!-- Flexbox con espacio entre los elementos y padding horizontal -->
                <div>
                    <h1>Selecciona</h1>
                </div>
                <div class="mt-2 flex justify-between">
                    <h2 id="selectedOption2" class=" md:w-1/3">Tarifes bitllets</h2>
                    <button id="toggleSeleccionaButton" class='outline-none focus:outline-none flex items-center' style='align-items: start;'>
                        <span>
                            <svg class='fill-current h-4 w-4 transform group-hover:-rotate-180
                            transition duration-150 ease-in-out' xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20' style='
                            color: white; width:40px; height: 40px;'><path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' /></svg>
                        </span>
                    </button>
                </div>
                <div class="mt-2 hidden" id="optionsSeleccionaContainer">
                    <div class="button1 rounded mt-2" onclick="selectOption2('Tarifes bitllets')">
                        <h3 class="text-md">Tarifes bitllets</h3>
                    </div>
                    <div class="button1 rounded mt-2" onclick="selectOption2('Horaris')">
                        <h3 class="text-md">Horaris</h3>
                    </div>
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
                <img id="imatgeTransport" style="height: 210px !important; object-fit: cover;" src="images/cremallera.jpg" alt="Imatge de cremallera" class="w-full h-auto md:max-h-48 object-center"> <!-- Añadido alt y clases Tailwind -->
            </div>
        </div>
    </div>
    <div class="element-montserrat  p-4 mt-4">
        <div class="flex justify-between">
            <div>
                <h1>Tarifes bitllets</h1>
            </div>
            <div id="CrearAvisos">
                <button class="button1" onclick="redirectToForm()">REGISTRAR TAULES</button>
                <script>
                    function redirectToForm() {
                        window.location.href = "{{ route('avisos.create') }}";
                    }
                </script>
            </div>
        </div>
        <div class="flex justify-between flex-wrap md:flex-nowrap md:gap-4">
            @include('taulestransport')
        </div>
    </div>
    <script>
        document.getElementById('toggleTransportButton').addEventListener('click', function() {
            var optionsContainer = document.getElementById('optionsTransportContainer');
            optionsContainer.classList.toggle('hidden');
            var svgIcon = this.querySelector('svg');
            svgIcon.classList.toggle('rotate-180');
        });        
        document.getElementById('toggleSeleccionaButton').addEventListener('click', function() {
            var optionsContainer = document.getElementById('optionsSeleccionaContainer');
            optionsContainer.classList.toggle('hidden');
            var svgIcon = this.querySelector('svg');
            svgIcon.classList.toggle('rotate-180');
        });
        function selectOption1(option) {
            document.getElementById('selectedOption1').textContent = option;
            document.getElementById('optionsTransportContainer').classList.add('hidden');
            var svgIcon = document.getElementById('toggleTransportButton').querySelector('svg');
            svgIcon.classList.remove('rotate-180');
            document.getElementById('imatgeTransport').src = 'images/' + option.toLowerCase() + '.jpg';

        }        
        function selectOption2(option) {
            document.getElementById('selectedOption2').textContent = option;
            document.getElementById('optionsSeleccionaContainer').classList.add('hidden');
            var svgIcon = document.getElementById('toggleSeleccionaButton').querySelector('svg');
            svgIcon.classList.remove('rotate-180');
        }
    </script>
    @endsection

</body>
</html>
