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

</div> --><script>
    // Combined createToggleButton function
    function createToggleButton(index, prefix = '') {
        var button = document.createElement('button');
        button.className = 'outline-none focus:outline-none flex items-center';
        button.id = prefix + 'toggleButton' + index;
        button.style.alignItems = 'start';

        var span = document.createElement('span');
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'fill-current h-4 w-4 transform transition duration-150 ease-in-out');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 20 20');
        svg.setAttribute('style', 'color: white; width:40px; height: 40px;');
        if(prefix == 'reserva'){
            svg.setAttribute('style', 'color: white; width:30px; height: 30px;');
        }
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z');

        svg.appendChild(path);
        span.appendChild(svg);
        button.appendChild(span);

        return button;
    }

    function addReservaDiv(index, indexR, name, date) {
        var reservesContainer = document.getElementById('reservesContainer' + index);
        var div = document.createElement('div');
        div.className = 'ml-4 mb-4';
        div.id = 'reservesContainer2' + indexR;

        var infoDiv = document.createElement('div');
        infoDiv.className = 'mt-2 flex justify-between';
        var infoDiv0 = document.createElement('div');
        infoDiv0.className = 'flex justify-between';
        var nameElement = document.createElement('h2');
        nameElement.id = 'reservaSelectedOption' + indexR;
        nameElement.textContent = name + ' (' + date + ')';
        nameElement.className = 'h2-1';

        // var dateElement = document.createElement('h3');
        // dateElement.setAttribute('style', 'margin-left: 1.5rem;');
        // dateElement.textContent = date;

        var button = createToggleButton(indexR, 'reserva');

        infoDiv0.appendChild(nameElement);
        // infoDiv0.appendChild(dateElement);
        infoDiv.appendChild(infoDiv0);
        infoDiv.appendChild(button);
        div.appendChild(infoDiv);
        var hr = document.createElement('hr');
        hr.className = 'hr-1';
        div.appendChild(hr);


        reservesContainer.appendChild(div);

        button.addEventListener('click', function() {
            div.classList.toggle('hidden');
            var svgIcon = this.querySelector('svg');
            svgIcon.classList.toggle('rotate-180');
        });
    }

    function addNovetatsOwner(index, own, novetats) {
        var container = document.getElementById('containerTaulesReserves');
        var div0 = document.createElement('div');
        div0.className = 'mb-4';

        var div = document.createElement('div');
        div.className = 'mt-2 flex justify-between';

        var h2 = document.createElement('h2');
        h2.id = "selectedOption" + index;
        h2.textContent = own;

        var button = createToggleButton(index);

        div.appendChild(h2);
        div.appendChild(button);
        div0.appendChild(div);
        div0.appendChild(document.createElement('hr'));

        var div3 = document.createElement('div');
        div3.className = 'mt-2 ml-4';
        div3.id = 'reservesContainer' + index;

        div0.appendChild(div3);
        container.appendChild(div0);

        novetats.forEach(function(novetat) {
            addReservaDiv(index, novetat.index, novetat.name, novetat.date);
        });

        button.addEventListener('click', function() {
            div3.classList.toggle('hidden');
            var svgIcon = this.querySelector('svg');
            svgIcon.classList.toggle('rotate-180');
        });
    }

    var novetats = [
        { index: 1, name: 'Cremallera', date: '2024-05-26' },
        { index: 2, name: 'Funicular', date: '2024-05-27' },
        { index: 3, name: 'Aeri', date: '2024-05-28' }
    ];

    addNovetatsOwner(1, 'Admin', novetats);
    addNovetatsOwner(2, 'Escolania', novetats);
    addNovetatsOwner(3, 'Escolania', novetats);
    addNovetatsOwner(4, 'Escolania', novetats);
</script>