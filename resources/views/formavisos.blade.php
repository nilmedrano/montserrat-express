<!-- <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Añadir Aviso</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('{{ asset('images/background.webp') }}');
            background-size: cover;
        }

        form {
            background-color: rgba(255, 255, 255, 0.8); /* Color de fondo con opacidad */
            padding: 20px;
            border-radius: 10px;
        }
    </style>
</head>
<body>


    <form action="{{ route('avisos.store') }}" method="POST">
        @csrf
        <h1>Añadir Aviso</h1>

        <div>
            <label for="texto">Texto del Aviso:</label>
            <input type="text" name="texto" id="texto" value="{{ old('texto') }}">
            @error('texto')
                <div>{{ $message }}</div>
            @enderror
        </div>

        <div>
            <label for="tipo">Tipo:</label>
            <select name="tipo" id="tipo">
                <option value="Alert">Alert</option>
                <option value="Emergency">Emergency</option>
                <option value="Info">Info</option>
            </select>
            @error('tipo')
                <div>{{ $message }}</div>
            @enderror
        </div>

        <button type="submit">Añadir Aviso</button>
    </form>
</body>
</html> -->
