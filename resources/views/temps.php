<?php
// temps.php

// Tu clave API de OpenWeatherMap
$apiKey = "d063deacb21c82b30fb600389667cf8e";
$latitude = 41.60059809245593;
$longitude = 1.8295780980270278;
$apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat={$latitude}&lon={$longitude}&appid={$apiKey}&units=metric&lang=ca";

// Obtén los datos del clima desde la API
$response = file_get_contents($apiUrl);
if ($response === FALSE) {
    die('Error al obtener los datos del clima.');
}

$weatherData = json_decode($response, true);

// Verifica si la respuesta contiene datos válidos
if (!isset($weatherData['main']) || !isset($weatherData['weather'][0])) {
    die('Error al interpretar los datos del clima.');
}

// Extrae la información relevante
$temperature = $weatherData['main']['temp'] . "°C";
$weatherCondition = $weatherData['weather'][0]['main'];
$weatherDescription = ucfirst($weatherData['weather'][0]['description']);
$icon = $weatherData['weather'][0]['icon'];

// Determina el ícono y la descripción del clima
switch ($weatherCondition) {
    case 'Clear':
        $weatherIcon = "images/sol.png";
        $weatherText = "Assolellat";
        break;
    case 'Clouds':
        $weatherIcon = "images/nuvol.svg";
        $weatherText = "Ennuvolat";
        break;
    case 'Rain':
        $weatherIcon = "images/pluja.svg";
        $weatherText = "Plujós";
        break;
    // Añade más casos según sea necesario
    default:
        $weatherIcon = "images/default.png";
        $weatherText = $weatherDescription;
        break;
}

// Establece estilos adicionales para la imagen según la condición climática
$imageStyle = "";
if ($weatherCondition === 'Rain' || $weatherCondition === 'Clouds') {
    $imageStyle = "padding: 20px 20px;";
}

echo "<div class='flex items-center'>
        <div>
            <img class='icotemps' src='{$weatherIcon}' alt='{$weatherText}' style='{$imageStyle}'>
        </div>
        <div>
            <h2>{$weatherText}</h2>
            <h4>{$temperature}</h4>
        </div>
      </div>";
?>
