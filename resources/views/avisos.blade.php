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
    <script>
        function loadForm() {
            $(document).ready(function() {
            var container0 = document.getElementById('formContainer');
            container0.setAttribute('style', 'display: flex !important;');
            });

            // Crear el elemento form
            var formElement = document.createElement('form');
            formElement.setAttribute('action', '{{ route("avisos.create") }}');
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
            h1Element.textContent = 'Afegir Avís';
            h1Element.className = 'text-2xl font-bold mb-4 marro'; // Clases de Tailwind CSS para tamaño de texto y negrita
            formElement.appendChild(h1Element);

            // Crear el primer div
            var div1Element = document.createElement('div');
            div1Element.className = 'mt-4 mb-4'; // Margen inferior

            // Crear el label para el texto del aviso
            var label1Element = document.createElement('label');
            label1Element.setAttribute('for', 'texto');
            label1Element.textContent = 'Text del Avís:';
            label1Element.className = 'block text-sm font-medium text-gray-700'; // Clases de Tailwind CSS para estilo de texto
            div1Element.appendChild(label1Element);

            // Crear el input para el texto del aviso
            var input1Element = document.createElement('input');
            input1Element.setAttribute('type', 'text');
            input1Element.setAttribute('name', 'texto');
            input1Element.setAttribute('id', 'texto');
            input1Element.className = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'; // Clases de Tailwind CSS para estilo de input
            div1Element.appendChild(input1Element);

            // // Mostrar mensaje de error si hay
            // var error1Element = document.createElement('div');
            // error1Element.textContent = 'error'; // Esto debería ser reemplazado por la variable correcta en PHP
            // error1Element.className = 'text-sm text-red-600'; // Clases de Tailwind CSS para estilo de texto de error
            // div1Element.appendChild(error1Element);

            formElement.appendChild(div1Element);

            // Crear el segundo div
            var div2Element = document.createElement('div');
            div2Element.className = 'mb-4'; // Margen inferior

            // Crear el label para el tipo del aviso
            var label2Element = document.createElement('label');
            label2Element.setAttribute('for', 'tipo');
            label2Element.textContent = 'Tipus:';
            label2Element.className = 'block text-sm font-medium text-gray-700'; // Clases de Tailwind CSS para estilo de texto
            div2Element.appendChild(label2Element);

            // Crear el select para el tipo del aviso
            var selectElement = document.createElement('select');
            selectElement.setAttribute('name', 'tipo');
            selectElement.setAttribute('id', 'tipo');
            selectElement.className = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'; // Clases de Tailwind CSS para estilo de select

            // Crear las opciones para el select
            var option1Element = document.createElement('option');
            option1Element.setAttribute('value', 'Alert');
            option1Element.textContent = 'Alert';
            selectElement.appendChild(option1Element);

            var option2Element = document.createElement('option');
            option2Element.setAttribute('value', 'Emergency');
            option2Element.textContent = 'Emergency';
            selectElement.appendChild(option2Element);

            var option3Element = document.createElement('option');
            option3Element.setAttribute('value', 'Info');
            option3Element.textContent = 'Info';
            selectElement.appendChild(option3Element);

            div2Element.appendChild(selectElement);

            formElement.appendChild(div2Element);

            // Crear el botón de submit
            var buttonElement = document.createElement('button');
            buttonElement.setAttribute('type', 'submit');
            buttonElement.textContent = 'Afegir Avís';
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

        async function loadIndicarAvisos() {
            try {
                // Obtener los datos de PHP
                const avisos = @json($avisos->map(fn($aviso) => ['id' => $aviso->id, 'texto' => $aviso->texto, 'tipo' => $aviso->tipo]));
                const avisosPrincipals = @json($avisosprincipals->map(fn($avisoPrincipal) => ['id' => $avisoPrincipal->id, 'avis_id' => $avisoPrincipal->avis_id]));

                $(document).ready(function() {
                    var container0 = document.getElementById('formContainer');
                    container0.setAttribute('style', 'display: flex !important;');
                });

                // Crear el elemento form
                var formElement = document.createElement('form');
                formElement.setAttribute('action', '{{ route("avisosprincipals.store") }}');
                formElement.setAttribute('method', 'POST');
                formElement.className = 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg';

                // Agregar el token CSRF
                var csrfElement = document.createElement('input');
                csrfElement.setAttribute('type', 'hidden');
                csrfElement.setAttribute('name', '_token');
                csrfElement.setAttribute('value', '{{ csrf_token() }}');
                formElement.appendChild(csrfElement);

                // Crear el elemento h1
                var h1Element = document.createElement('h1');
                h1Element.textContent = 'Seleccionar Avisos Principals';
                h1Element.className = 'marro text-2xl font-bold mb-4 text-marro';
                formElement.appendChild(h1Element);

                // Crear el contenedor para los checkboxes
                var checkboxContainer = document.createElement('div');
                checkboxContainer.className = 'space-y-4 mt-4';
                checkboxContainer.setAttribute('style', 'height: 400px !important; overflow: scroll;')

                // Crear los checkboxes para los avisos
                avisos.forEach(aviso => {
                    var divElement = document.createElement('div');
                    divElement.className = 'flex items-center';

                    var checkboxElement = document.createElement('input');
                    checkboxElement.setAttribute('type', 'checkbox');
                    checkboxElement.setAttribute('name', 'avisos[]');
                    checkboxElement.setAttribute('value', aviso.id);
                    checkboxElement.className = 'form-checkbox h-5 w-5 text-blue-600';

                    // Preseleccionar las opciones de avisosprincipals
                    if (avisosPrincipals.some(ap => ap.avis_id === aviso.id)) {
                        checkboxElement.setAttribute('checked', 'checked');
                    }

                    var labelElement = document.createElement('label');
                    labelElement.textContent = aviso.texto;
                    labelElement.className = 'ml-2 text-gray-700';

                    divElement.appendChild(checkboxElement);
                    divElement.appendChild(labelElement);

                    checkboxContainer.appendChild(divElement);
                });

                formElement.appendChild(checkboxContainer);

                // Crear el botón de submit
                var buttonElement = document.createElement('button');
                buttonElement.setAttribute('type', 'submit');
                buttonElement.textContent = 'Indicar Avisos Principals';
                buttonElement.className = 'button2 mt-4 rounded-md';
                formElement.appendChild(buttonElement);

                // Agregar el formulario al contenedor formContainer
                var formContainer = document.getElementById('formContainer');
                formContainer.innerHTML = '';
                formContainer.appendChild(formElement);

                // Mostrar el contenedor formContainer
                formContainer.style.display = 'flex';
                formContainer.style.justifyContent = 'center';
                formContainer.style.alignItems = 'center';
            } catch (error) {
                console.error('Error loading avisos:', error);
            }
        }
        async function loadEditForm(id, texto, tipo) {
            $(document).ready(function() {
                var container0 = document.getElementById('formContainer');
                container0.setAttribute('style', 'display: flex !important;');
            });

            // Crear el elemento form
            var formElement = document.createElement('form');
            formElement.setAttribute('action', 'route("avisos.update")');

            formElement.setAttribute('method', 'POST');
            formElement.className = 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'; // Clases de Tailwind CSS para estilos del formulario

            // Agregar el token CSRF
            var csrfElement = document.createElement('input');
            csrfElement.setAttribute('type', 'hidden');
            csrfElement.setAttribute('name', '_token');
            csrfElement.setAttribute('value', '{{ csrf_token() }}');
            formElement.appendChild(csrfElement);

            // Agregar el método PUT para actualizar
            var methodElement = document.createElement('input');
            methodElement.setAttribute('type', 'hidden');
            methodElement.setAttribute('name', '_method');
            methodElement.setAttribute('value', 'PUT');
            formElement.appendChild(methodElement);

            // Crear el elemento h1
            var h1Element = document.createElement('h1');
            h1Element.textContent = 'Modificar Avís';
            h1Element.className = 'text-2xl font-bold mb-4 marro'; // Clases de Tailwind CSS para tamaño de texto y negrita
            formElement.appendChild(h1Element);

            // Crear el primer div
            var div1Element = document.createElement('div');
            div1Element.className = 'mt-4 mb-4'; // Margen inferior

            // Crear el label para el texto del aviso
            var label1Element = document.createElement('label');
            label1Element.setAttribute('for', 'texto');
            label1Element.textContent = 'Text del Avís:';
            label1Element.className = 'block text-sm font-medium text-gray-700'; // Clases de Tailwind CSS para estilo de texto
            div1Element.appendChild(label1Element);

            // Crear el input para el texto del aviso
            var input1Element = document.createElement('input');
            input1Element.setAttribute('type', 'text');
            input1Element.setAttribute('name', 'texto');
            input1Element.setAttribute('id', 'texto');
            input1Element.setAttribute('value', texto);
            input1Element.className = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'; // Clases de Tailwind CSS para estilo de input
            div1Element.appendChild(input1Element);

            formElement.appendChild(div1Element);

            // Crear el segundo div
            var div2Element = document.createElement('div');
            div2Element.className = 'mb-4'; // Margen inferior

            // Crear el label para el tipo del aviso
            var label2Element = document.createElement('label');
            label2Element.setAttribute('for', 'tipo');
            label2Element.textContent = 'Tipus:';
            label2Element.className = 'block text-sm font-medium text-gray-700'; // Clases de Tailwind CSS para estilo de texto
            div2Element.appendChild(label2Element);

            // Crear el select para el tipo del aviso
            var selectElement = document.createElement('select');
            selectElement.setAttribute('name', 'tipo');
            selectElement.setAttribute('id', 'tipo');
            selectElement.className = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'; // Clases de Tailwind CSS para estilo de select

            // Crear las opciones para el select
            var option1Element = document.createElement('option');
            option1Element.setAttribute('value', 'Alert');
            option1Element.textContent = 'Alert';
            if (tipo === 'Alert') option1Element.setAttribute('selected', 'selected');
            selectElement.appendChild(option1Element);

            var option2Element = document.createElement('option');
            option2Element.setAttribute('value', 'Emergency');
            option2Element.textContent = 'Emergency';
            if (tipo === 'Emergency') option2Element.setAttribute('selected', 'selected');
            selectElement.appendChild(option2Element);

            var option3Element = document.createElement('option');
            option3Element.setAttribute('value', 'Info');
            option3Element.textContent = 'Info';
            if (tipo === 'Info') option3Element.setAttribute('selected', 'selected');
            selectElement.appendChild(option3Element);

            div2Element.appendChild(selectElement);

            formElement.appendChild(div2Element);

            // Crear el botón de submit para modificar
            var buttonUpdateElement = document.createElement('button');
            buttonUpdateElement.setAttribute('type', 'submit');
            buttonUpdateElement.textContent = 'Modificar Avís';
            buttonUpdateElement.className = 'button2 button2 mt-4 rounded-md mt-4'; // Clases de Tailwind CSS para estilo de botón y margen superior
            formElement.appendChild(buttonUpdateElement);

            // Crear el botón de submit para eliminar
            var buttonDeleteElement = document.createElement('button');
            buttonDeleteElement.setAttribute('type', 'button');
            buttonDeleteElement.textContent = 'Eliminar Avís';
            buttonDeleteElement.className = 'button2 button2 mt-4 rounded-md mt-4 ml-4'; // Clases de Tailwind CSS para estilo de botón y margen superior

            formElement.appendChild(buttonDeleteElement);

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
    <div class="flex flex-wrap  md:flex-nowrap md:gap-4">
        <div class="element-montserrat w-full md:w-1/3 p-4">
            <div class="flex justify-between"> <!-- Flexbox con espacio entre los elementos y padding horizontal -->
                <div>
                    <h1>Temps</h1>
                </div>
                <div class="flex items-center">
                    <h3><?php echo date('d/m/Y'); ?></h3>
                </div>
            </div>
            @include('temps')
        </div>
        <div class="element-montserrat w-full mt-4 md:mt-0 md:w-2/3 p-4">
            <div class="flex justify-between"> <!-- Flexbox con espacio entre los elementos y padding horizontal -->
                <div>
                    <h1>Avisos</h1>
                </div>
                <div>
                    <button onclick="loadIndicarAvisos()" class="button1">INDICAR AVISOS</button>
                </div>   
            </div>
            <div style="max-width: 100%; overflow-x: auto;">
                @include('taulesavisos')
                @php
                    $registros = $avisosprincipals->map(function ($avisoPrincipal) {
                        // Obtener el aviso completo basado en el id del aviso principal
                        $aviso = App\Models\Avis::find($avisoPrincipal->avis_id);

                        // Si el aviso no se encuentra, retornar una fila vacía
                        if (!$aviso) {
                            return [];
                        }

                        // Retornar los datos del aviso principal y su aviso correspondiente
                        return [$avisoPrincipal->id, $aviso->texto, $aviso->tipo];
                    })->toArray();

                    taula1($registros);
                @endphp
            </div>
        </div>
    </div>
    <div class="element-montserrat  p-4 mt-4">
        <div class="flex justify-between">
            <div>
                <h1>Llista d'avisos</h1>
            </div>
            <div id="CrearAvisos">
                <button class="button1" onclick="loadForm()">CREAR AVÍS</button>
            </div>
            <div id="formContainer" class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 hidden"></div>
        </div>
        <div class="flex justify-between flex-wrap md:flex-nowrap md:gap-4">    
            @php
                $registros = $avisos->map(function ($aviso) {
                    return [$aviso->id, $aviso->texto, $aviso->tipo];
                })->toArray();
                taula2($registros);
            @endphp
        </div>
    </div>
    @endsection

</body>
</html>
