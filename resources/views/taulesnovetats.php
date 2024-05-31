<!-- <div class="mt-2 flex justify-between">
    <h2 id="selectedOption1">Admin</h2>

    <button class=' outline-none focus:outline-none flex items-center' id="toggleButton1" style='align-items: start;'>
        <span>
            <svg class='fill-current h-4 w-4 transform group-hover:-rotate-180
            transition duration-150 ease-in-out' xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20' style='
            color: white; width:40px; height: 40px;'><path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' /></svg>
        </span>
    </button>
</div>
<hr class="my-4"> Línea horizontal -->

<!-- <div id="imagesContainer1" class="flex justify-between flex-wrap md:flex-nowrap md:gap-4">

</div> -->
<script>
    function createToggleButton(index) {
        // Crear el botón
        var button = document.createElement('button');
        button.className = 'outline-none focus:outline-none flex items-center';
        button.id = 'toggleButton' + index;
        button.style.alignItems = 'start';

        // Crear el contenedor del icono
        var span = document.createElement('span');

        // Crear el icono SVG
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 20 20');
        svg.setAttribute('style', 'color: white; width:40px; height: 40px;');

        // Crear el path del icono
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z');

        // Añadir el path al SVG
        svg.appendChild(path);

        // Añadir el SVG al span
        span.appendChild(svg);

        // Añadir el span al botón
        button.appendChild(span);

        // Devolver el botón creado
        return button;
    }

    function addImageDiv(index, imageSrc, name, description, date, url) {
        var imagesContainer = document.getElementById('imagesContainer' + index);
        var div = document.createElement('div');
        div.className = 'relative mt-4 w-full md:w-1/2';
        div.setAttribute('onclick', 'location.href= "' + url + '"');

        var imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = name;
        imgElement.className = 'overlay w-full md:max-h-48 object-center rounded-lg shadow-md';
        imgElement.setAttribute('style', 'height: 125px !important;');
        var infoDiv = document.createElement('div');
        infoDiv.className = 'mt-3 absolute top-0 left-0  bg-opacity-75 text-white p-4 w-full';

        var nameElement = document.createElement('h3');
        nameElement.className = 'text-lg font-bold';
        nameElement.textContent = name;

        var descriptionElement = document.createElement('p');
        descriptionElement.className = 'desc text-sm';
        descriptionElement.textContent = description;

        var dateElement = document.createElement('div');
        dateElement.className = 'p-4 absolute top-0 right-0 bg-opacity-75 text-white text-xs p-1 rounded-bl-lg';
        dateElement.textContent = date;

        infoDiv.appendChild(nameElement);
        infoDiv.appendChild(descriptionElement);
        div.appendChild(imgElement);
        div.appendChild(infoDiv);
        div.appendChild(dateElement);

        imagesContainer.appendChild(div);
    }


    function addNovetatsOwner(index, own, novetats) {
        var container = document.getElementById('containerTaulesNovetats');
        var div0 = document.createElement('div');
        div0.className = 'mb-4';
        var div = document.createElement('div');
        div.className = 'mt-2 flex justify-between';
        var h2 = document.createElement('h2');
        h2.id = "selectedOption" + index;
        h2.textContent = own;
        var div2 = document.createElement('div');
        div.appendChild(h2);
        var button = createToggleButton(index);
        div.appendChild(button);
        div0.appendChild(div);
        var hr = document.createElement('hr');
        div0.appendChild(hr);

        var div3 = document.createElement('div');
        div3.className = 'flex justify-between flex-wrap md:flex-nowrap md:gap-4';
        div3.id = 'imagesContainer' + index;
        div0.appendChild(div3);
        container.appendChild(div0);
        novetats.forEach(function(novetat) {
            addImageDiv(index, novetat.imageSrc, novetat.name, novetat.description, novetat.date, novetat.url);
        });


        document.getElementById('toggleButton' + index).addEventListener('click', function() {
            var imagesContainer = document.getElementById('imagesContainer' + index);
            imagesContainer.classList.toggle('hidden');
            var svgIcon = this.querySelector('svg');
            svgIcon.classList.toggle('rotate-180');
        });
    }

    // function afegir(novetats, usuaris){
    //     var novId = 0;
    //     var urls = [];
    //     novetats.forEach(function(novetat) {

    //         novId = novId + 1;
    //         // Filtrar las novedades por usuario
    //         var userNovetatsArray = novetats.filter(function(novetat) {
    //             return novetat.user_id === user.id;
    //         });

    //         var url: "{{ route('novetats.edit', ':id') }}".replace(':id', novId)
    //         urls[novId-1] = url;

    //         // // Transformar las novedades al formato esperado
    //         // var novetatsFormatted = userNovetatsArray.map(function(novetat) {
    //         //     return {
    //         //         imageSrc: novetat.imatge,
    //         //         name: novetat.nom,
    //         //         description: novetat.descripcio,
    //         //         date: novetat.data,
    //         //     };
    //         // });

    //         // Ejecutar la función addNovetatsOwner con el ID del usuario, el nombre y el array de novedades
    //         addNovetatsOwner(user.id, user.name, userNovetatsArray, urls);
    //     });
    // }

    // // Obtener todos los usuarios de la tabla users
    // foreach ($users as $user) {
    //     // Obtener el ID y el nombre del usuario
    //     $userId = $user->id;
    //     $userName = $user->name;
    //     $userNovetatsArray = []; // Inicializar el array para las novedades del usuario

    //     // Iterar sobre las novedades y añadirlas al array del usuario si coinciden con su ID
    //     foreach ($novetats as $novetat) {
    //         if ($novetat->user_id === $userId) {
    //             // Transformar la novetat al formato esperado
    //             $userNovetatsArray[] = [
    //                 'imageSrc' => $novetat->imatge,
    //                 'name' => $novetat->nom,
    //                 'description' => $novetat->descripcio,
    //                 'date' => $novetat->data,
    //             ]; 
    //         }
    //     }

    //     // Ejecutar la función addNovetatsOwner con el ID del usuario, el nombre y el array de novedades
    //     addNovetatsOwner($userId, $userName, $userNovetatsArray);
    // }






    // function addNovetatsOwner($userId, $userName, $userNovetatsArray) {
    //     // Implementa la lógica de esta función según tus necesidades
    //     // Por ejemplo, podrías imprimir la información o procesarla de alguna manera
    //     echo "Usuario ID: $userId, Nombre: $userName\n";
    //     foreach ($userNovetatsArray as $novetat) {
    //         echo " - Novetat: " . $novetat['name'] . " (" . $novetat['date'] . ")\n";
    //     }
    // }

    // var novetats = [
    //         { imageSrc: 'images/cremallera.jpg', name: 'Cremallera', description: 'Descripción de la cremallera', date: '2024-05-26' },
    //         { imageSrc: 'images/cremallera.jpg', name: 'Funicular', description: 'Descripción del funicular', date: '2024-05-27' },
    //         { imageSrc: 'images/cremallera.jpg', name: 'Aeri', description: 'Descripción del aeri', date: '2024-05-28' }
    // ]; 

    // addNovetatsOwner(1, 'Admin', novetats);
    // addNovetatsOwner(2, 'Escolania', novetats);
    // addNovetatsOwner(3, 'Escolania', novetats);
    // addNovetatsOwner(4, 'Escolania', novetats);


</script>

