<!-- resources/views/layouts/panel.blade.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vista con Fondo de Pantalla</title>
    <script src="{{ asset('js/panel.js') }}"></script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            // Agrega un evento de clic al botón
            $('.input-container button').click(function() {
                // Encuentra la lista desplegable más cercana al botón que se ha hecho clic
                var dropdown = $(this).closest('.input-container').find('ul');
                
                // Alterna la clase 'scale-0' para mostrar u ocultar la lista desplegable
                dropdown.toggleClass('scale-0 scale-100');
            });
        });

    function toggleDropdown(btn) {
        const dropdownMenu = document.createElement('ul');
        dropdownMenu.classList.add('floatingOptions', 'dropdown-menu', 'button1', 'border', 'rounded-sm', 'absolute', 'top-0', 'left-0', 'transform', 'scale-0', 'transition', 'duration-150', 'ease-in-out', 'origin-top', 'min-w-32');
        dropdownMenu.innerHTML = `
            <li class='rounded-sm px-3 py-1 cursor-pointer'>Modificar</li>
            <li class='rounded-sm px-3 py-1 cursor-pointer'>Eliminar</li>
        `;
        
        const buttonContainer = btn.parentElement;
        buttonContainer.appendChild(dropdownMenu);
        dropdownMenu.classList.toggle('scale-100');
        
    }

    </script>
    @vite('resources/css/app.css')
    <style>
        .rotate-180 {
            transform: rotate(180deg);
        }
        /******************
         * BACKGROUND STYLE
         ******************/

        /* Establecer la imagen como fondo */
        .background-container {
            position: relative;
            width: 100%;
            height: 75h;
            margin: 0;
            padding: 0;
            top: 0;
            left: 0;
        }
        /* Establecer la imagen como fondo */
        .background-container::before {
            content: '';
            position: absolute;
            top: 0; 
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom, 
                rgba(95, 87, 79, 0.24) 0%, 
                rgba(95, 87, 79, 0.60) 78%, 
                rgba(95, 87, 79, 1.00) 100%
            );
            z-index: 1;
        }
        /* Establecer la imagen como fondo */
        .background-image {
            position: absolute; 
            top: 0; 
            left: 0; 
            width: 100%;
            height: 100%; 
            background-image: url('{{ asset('images/background.webp') }}');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
            z-index: 0; 
        }
        .overlay{
            filter: brightness(45%);
        }

        /*****************************
         * MENU - CONTENT - BODY STYLE
         *****************************/

        /* Menu */
        .menu {
            position: relative;
            z-index: 2; 
        }
        /* Content */
        .content {
            padding: 20px 50px;
            position: relative;
            z-index: 2;
        }

        /* Body */
        body{
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            /* overflow: hidden; */
            background: rgba(95, 87, 79, 1.00);
            transform: scale(1.25);
            transform-origin: top left;
            width: 80% !important;
        }

        /*****************
         * ELEMENTS STYLES
         ****************/

        /* Elements montserrat*/
        .element-montserrat{
            background: linear-gradient(
                to bottom, 
                rgba(95, 87, 79, 1.00) 0%, 
                rgba(159, 146, 133, 0.60) 72%, 
                rgba(197, 180, 164, 0.38) 100%
            );
        }
        /* Elements montserrat gran*/
        .el-gran{
            width: 100%;
        }
        /* Elements montserrat mitjà*/
        .el-mg{
            width: 65%;
        }
        /* Elements montserrat petit*/
        .el-p{
            width: 35%;
        }

        /***********************
         * ELEMENT TITLES STYLES
         ***********************/
        
        .marro{
            color: #5F574F !important; 
        }
        
        /* Elements montserrat titol 1*/
        .element-montserrat h1{
            color: #FFDD00;
            padding: 0 0;
            margin: 0 0;
            font-size: 16px;
            text-transform: uppercase;        
            font-weight: bold;
        }
        /* Elements montserrat titol 2*/
        .element-montserrat h2{
            color: white;
            padding: 0 0;
            margin: 0 0;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;        
        }

        .h2-1{
            font-size: 16px !important;
        }

        /* Elements montserrat titol 3*/
        .element-montserrat h3{
            color: white;
            padding: 0 0;
            margin: 0 0;
            font-weight: bold;
            font-size: 12px;
            text-transform: uppercase;        
        }
        /* Elements montserrat titol 4*/
        .element-montserrat h4{
            color: white;
            padding: 0 0;
            margin: 0 0;
            font-size: 24px;
            text-transform: uppercase;        
        }

        /****************
         * BUTTONS STYLES
         ****************/

        /* Button 1*/
        .button1{
            border: 1px solid white;
            font-size: 12px;
            font-weight: 600;
            font-family: 'Montserrat';
            color: white;
            background: linear-gradient(
                to bottom, 
                rgba(95, 87, 79, 0.00) 0%, 
                rgba(95, 87, 79, 0.31) 20%, 
                rgba(95, 87, 79, 1.00) 100%
            ); 
            padding: 10px 15px;   
        }
        
        .button2{
            border: 1px solid #5F574F;
            font-size: 12px;
            font-weight: 600;
            font-family: 'Montserrat';
            color: #5F574F;
            background: #FFDD00;
            padding: 10px 15px;   
        }
        /****************
         * TABLE STYLE
         ****************/

        /* Table*/
        table {
            /* margin: 15px 0px; */
            border-spacing: 0px; /* Ajusta el valor según desees */
            border: solid 1px #5F574F;
            color: white;
            font-size: 12px;
            width:100%;
            border-collapse: collapse;
            table-layout: fixed;
        }
        /* Table td*/
        td {
            border: solid 1px #5F574F;
            padding: 5px 10px; /* Ajusta el valor según desees */
            background: linear-gradient(
                to right, 
                rgba(95, 87, 79, 0.00) 0%, 
                rgba(95, 87, 79, 1.00) 100%
            ); /* Gradiente transparente */   
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        th{
            border: solid 1px #5F574F;
            padding: 5px 10px;
        }
        /* Table td camp 1*/
        .td-1{
            background: rgba(217,217,217, 0.17);
        }
        .td-1, .td-3{
            text-align: center;
            flex-shrink: 0;
            width: 34px;
        }
        .td-2{
            width: auto;
            flex-grow: 1;
            overflow: hidden;
            white-space: nowrap;
        }
        .td-4{
            text-align: center;
            flex-shrink: 0;
            background: none;
            width: 30px;
        }
        .th-1{
            background: rgba(217,217,217, 0.17);
            text-align: left;
        }
        .th-2{
            background: #FFDD00;
            text-align: left;
            color: #5F574F;
        }
        .dropdown-menu {
            z-index: 999;
            position: fixed;
            top: auto;
            left: auto;
            height: auto;
            padding: 0;
            transform: scale(0.75); 
            transform-origin: top left; 
        }
        .dropdown-menu li{
            background: #0000006b;
        }
        hr{
            border-top-width: 5px;
        }        
        .hr-1{
            border-top-width: 4px;
        }

        /* .truncate {
            max-width: 190px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        } */

        /****************
         * ADVICES COLORS
         ****************/

        .alert, .info, .emergency{
            background: none;
            padding: 0px 8px !important;
        }
        /* Alert color */
        .alert {
            background-color: #FFDD00;
        }
        /* Info color */
        .info {
            background: none;
            background-color: #103EB5;
        }
        /* Emergency color */
        .emergency {
            background: none;
            background-color: #FF0000;
        }

        /**************
         * ICONS STYLES
         **************/
        
        .icon {
            /* width: 150px;
            height: 15px; */
            /* display: inline-block;
            vertical-align: middle; */
        }

        .icon svg {
            filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
        }

        /* .mt-2{
            margin-top: 30px;
        } */
        /* .full-width{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;        
        }
        .gap-1{
            gap: 0px;
        } */

    </style>
</head>
<body>
    <div class="background-container">
        <div class="background-image"></div>
        <div class="menu">
            @include('menu') <!-- Incluir la vista menu.blade.php -->
        </div>
        <div class="content">
            @yield('content') <!-- Incluye el contenido específico de cada vista -->
        </div>
    </div>
        <!-- Agrega el SDK de Firebase -->
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js"></script>
    <script src="{{ asset('js/panel.js') }}"></script>
    <script type="module">
        // onAuthStateChanged(auth, user => {
        //     if (user!=null){
        //         console.log('logged in!');
        //     } else {
        //         console.log('no user'); 
        //     }
        // })

    </script>
</body>
</html>
