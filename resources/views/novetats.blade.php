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
    <script>
        
        function loadForm() {
            $(document).ready(function() {
            var container0 = document.getElementById('formContainer');
            container0.setAttribute('style', 'display: flex !important;');
            });

            // Crear el elemento form
            var formElement = document.createElement('form');
            formElement.setAttribute('action', '{{ route("novetats.create") }}');
            formElement.setAttribute('method', 'POST');
            formElement.className = 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'; // Clases de Tailwind CSS para estilos del formulario

            // Agregar el token CSRF
            var csrfElement = document.createElement('input');
            csrfElement.setAttribute('type', 'hidden');
            csrfElement.setAttribute('name', '_token');
            csrfElement.setAttribute('value', '{{ csrf_token() }}');
            formElement.appendChild(csrfElement);

            // Crear el elemento h1
            var h1Element = document.createElement('h1');
            h1Element.textContent = 'Afegir Novetat';
            h1Element.className = 'text-2xl font-bold mb-4 marro'; // Clases de Tailwind CSS para tamaño de texto y negrita
            formElement.appendChild(h1Element);

            // Crear el primer div
            var div1Element = document.createElement('div');
            div1Element.className = 'mt-4 mb-4'; // Margen inferior

            // Crear el label para el texto del aviso
            var label1Element = document.createElement('label');
            label1Element.setAttribute('for', 'texto');
            label1Element.textContent = 'Títol:';
            label1Element.className = 'block text-sm font-medium text-gray-700'; // Clases de Tailwind CSS para estilo de texto
            div1Element.appendChild(label1Element);

            // Crear el input para el texto del aviso
            var input1Element = document.createElement('input');
            input1Element.setAttribute('type', 'text');
            input1Element.setAttribute('name', 'texto');
            input1Element.setAttribute('id', 'texto');
            input1Element.className = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'; // Clases de Tailwind CSS para estilo de input
            div1Element.appendChild(input1Element);            
            
            // Crear el primer div
            var div2Element = document.createElement('div');
            div2Element.className = 'mt-4 mb-4'; // Margen inferior

            // Crear el label para el texto del aviso
            var label2Element = document.createElement('label');
            label2Element.setAttribute('for', 'texto');
            label2Element.textContent = 'Descripció:';
            label2Element.className = 'block text-sm font-medium text-gray-700'; // Clases de Tailwind CSS para estilo de texto
            div2Element.appendChild(label2Element);

            // Crear el input para el texto del aviso
            var input2Element = document.createElement('input');
            input2Element.setAttribute('type', 'text');
            input2Element.setAttribute('name', 'texto');
            input2Element.setAttribute('id', 'texto');
            input2Element.className = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'; // Clases de Tailwind CSS para estilo de input
            div2Element.appendChild(input2Element);

            // // Mostrar mensaje de error si hay
            // var error1Element = document.createElement('div');
            // error1Element.textContent = 'error'; // Esto debería ser reemplazado por la variable correcta en PHP
            // error1Element.className = 'text-sm text-red-600'; // Clases de Tailwind CSS para estilo de texto de error
            // div1Element.appendChild(error1Element);

            formElement.appendChild(div1Element);
            formElement.appendChild(div2Element);

            // Crear el botón de submit
            var buttonElement = document.createElement('button');
            buttonElement.setAttribute('type', 'submit');
            buttonElement.textContent = 'Afegir Novetat';
            buttonElement.className = 'button2 button2 mt-4 rounded-md mt-4'; // Clases de Tailwind CSS para estilo de botón y margen superior
            formElement.appendChild(buttonElement);

            // Agregar el formulario al contenedor formContainer
            var formContainer = document.getElementById('formContainer');
            formContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir el formulario
            formContainer.appendChild(formElement);

            // Mostrar el contenedor formContainer
            formContainer.style.display = 'flex'; // Asegúrate de que el contenedor se muestre como un elemento flex

            // Estilos adicionales para centrar el formulario verticalmente
            formContainer.style.justifyContent = 'center'; // Centrar contenido horizontalmente
            formContainer.style.alignItems = 'center'; // Centrar contenido verticalmente
        }
    </script>
</head>

<body>
    @extends('layouts.panel') <!-- Si estás utilizando Blade para plantillas -->

    @section('content')
    <div class="element-montserrat  p-4 mt-4">
        <div class="flex justify-between">
            <div>
                <h1>Llista de novetats</h1>
            </div>
            <div id="CrearAvisos">
                <button class="button1" onclick="loadForm()">CREAR NOVETAT</button>
            </div>
        </div>
        <div id='containerTaulesNovetats'>
        @include('taulesnovetats')
        @php
            $registros = $novetats->map(function ($novetat) {
                    return [$novetat->nom, $novetat->descripcio, $novetat->data, $novetat->imatge, $novetat->user_id, $novetat->id];
                })->toArray();
            $usuaris = $users->map(function ($usuari) {
                    return [$usuari->id, $usuari->name];
                })->toArray();
        @endphp
        <script>
        // Definir la función afegir
        function afegir(novetats, usuaris) {
            usuaris.forEach(function(user) {
                // Filtrar las novedades por usuario
                var userNovetatsArray = novetats.filter(function(novetat) {
                    return novetat[4] === user[0];
                });

                // Transformar las novedades al formato esperado
                var novetatsFormatted = userNovetatsArray.map(function(novetat) {
                    return {
                        imageSrc: novetat[3],
                        name: novetat[0],
                        description: novetat[1],
                        date: novetat[2],
                        // url: '1'
                        url: "{{ route('novetats.edit', ':id') }}".replace(':id', novetat[5])
                    };
                });

                // Ejecutar la función addNovetatsOwner con el ID del usuario, el nombre y el array de novedades
                addNovetatsOwner(user[0], user[1], novetatsFormatted);
            });
        }

        // Obtener los datos de PHP y llamar a la función afegir
        var registros = @json($registros);
        var usuaris = @json($usuaris);
        afegir(registros, usuaris);
    </script>
        </div>
    </div>
    <div id="formContainer" class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 hidden"></div>

    @endsection
</body>
</html>
