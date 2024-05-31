<!-- resources/views/menu.blade.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú</title>
    <!-- Incluir Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* Aplicar la fuente Montserrat al cuerpo */
        body {
            font-family: 'Montserrat';
        }

        #userName {
            font-size: 10px;
            font-weight: bold;
            padding-right: 7px;
        }

        .user-logout{
            display: flex;
            align-items: center;
        }

        /* Estilos básicos para el menú */
        .user-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #5F574F;
            color: white;
            padding: 3px 50px;
            font-size: 12px;
            line-height: 0px; /* Igualar la altura al tamaño de la fuente */
        }

        .user-menu a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            text-transform: uppercase; /* Convertir texto a mayúsculas */
        }

        .user-menu .express {
            color: #FFDD00; /* Color amarillo para EXPRESS */
            font-style: italic; /* Texto en cursiva */
        }

        .control-panel {
            font-weight: bold;
            padding: 0px 50px;
            height: 50px;
            background: linear-gradient(
                to right, 
                rgba(197, 180, 164, 0.75) 0%, 
                rgba(159, 146, 133, 0.84) 35%, 
                rgba(95, 87, 79, 1.00) 100%
            );
            color: white;
            flex: 1 1 auto;
            font-size: 18px;
            text-transform: uppercase; /* Convertir texto a mayúsculas */
            display: flex; /* Alinear verticalmente */
            align-items: center; /* Alinear verticalmente */
        }

        ul {
            background: #FFDD00;

            list-style: none;
            /* margin: 0;
            display: flex; */
            /* gap: 40px; */
            font-weight: bold;
            font-size: 14px;
            /* padding: 0px 50px; */
            height: 50px;
            /* display: flex; /* Alinear verticalmente */
            /* align-items: center; Alinear verticalmente */
        }

        li {
            margin: 0;
        }

        a {
            text-decoration: none;
            color: #5F574F;
        }

        a:hover {
            text-decoration: underline;
        }

        nav {
            /* display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap; */
            height: auto; /* Establecer la altura automáticamente */
            text-transform: uppercase; /* Convertir texto a mayúsculas */
        }

        /* @media (max-width: 900px) {
            nav {
                flex-direction: column;
                align-items: stretch;
            }

            .control-panel {
                font-size: 20px;
            }

            ul{
                font-size: 14px;
                align-items: right;
            }
        }  */
    </style>
</head>
<body>
    <div class="user-menu">
        <a href="{{ url('/') }}">MONTSERRAT <span class="express">EXPRESS</span></a>
        <div class="flex items-center user-logout">
            <a id="userName" href="{{ url('/dashboard') }}">
                @if(Auth::check())
                    {{ Auth::user()->name }}
                @else
                    Convidat
                @endif
            </a>
            <a href="{{ url('/dashboard') }}">
                <svg width="13" height="11" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.768 0V2.44643H17.5537V14.6786H7.768V17.125H20.0001V0H7.768ZM5.32157 4.89286L0.428711 8.5625L5.32157 12.2321V9.78571H15.1073V7.33929H5.32157V4.89286Z" fill="#FFDD00"/>
                </svg>
            </a>
        </div>
    </div>
    <nav class="flex flex-wrap">
        <div class="control-panel w-full md:w-2/3 p-4">PANELL DE CONTROL - MONTSERRAT EXPRESS</div>
        <ul class="w-full md:w-1/3 p-4 flex gap-4">
            <li><a href="{{ url('/transport') }}">TRANSPORT</a></li>
            <li><a href="{{ url('/avisos') }}">AVISOS</a></li>
            <li><a href="{{ url('/novetats') }}">NOVETATS</a></li>
            <li><a href="{{ url('/reserves') }}">RESERVES</a></li>
        </ul>
    </nav>
    @if(session('success'))
    <div class="alert alert-success" style="background-color: #d4edda; color: #155724; border-color: #c3e6cb; padding: 5px 50px !important;">
        {{ session('success') }}
    </div>
    @endif
    @if (session('error'))
    <div class="alert alert-danger" style="background-color: #f8d7da; color: #721c24; border-color: #f5c6cb; padding: 5px 50px !important;">
        {{ session('error') }}
    </div>
    @endif
</body>
</html>
