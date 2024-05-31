<?php
    function imprimirTabla2($registros){
        echo "<table class='mt-4 w-full'>";
        foreach ($registros as $indexRegistro => $registro) {
            if($indexRegistro == 0){
                $etiqueta = 'th';
                $classes = 'th-1'; 
                } else {
                    $etiqueta = 'td';
                    $classes = '';
                }
            echo "<tr>";
            foreach ($registro as $index => $campo) {
                if ($index == 0 && $indexRegistro== 0){
                    echo "<th class='th-2'>$campo</th>";
                }
                else if ($index == 0) {
                    echo "<th class='th-1'>$campo</th>";
                } else {
                    echo "<$etiqueta  class='$classes'>$campo</$etiqueta >";
                }
            }
            echo "</tr>";
            # añadir boton desplegable que en pulsar aparezcan los botones de eliminar y borrar
                    // Añadir botón desplegable con opciones
            // echo "<div class='group inline-block'>

                    // <button class='outline-none focus:outline-none px-3 py-1 bg-gray-200 rounded-sm flex items-center min-w-32'>
                    //     <span class='pr-1 font-semibold flex-1'>.</span>
                    //     <span>
                    //         <svg class='fill-current h-4 w-4 transform group-hover:-rotate-180
                    //         transition duration-150 ease-in-out' xmlns='http://www.w3.org/2000/svg'
                    //         viewBox='0 0 20 20'><path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' /></svg>
                    //     </span>
                    // </button>
                    // <ul class='bg-gray-200 border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                    // transition duration-150 ease-in-out origin-top min-w-32'>
                    //     <li class='rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer'>Eliminar</li>
                    //     <li class='rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer'>Borrar</li>
                    // </ul>
            //     </div>";
        }
        echo "</table>";
    }
    // Datos para los registros
    $registros = array(
        array("Anada i tornada", "Monistrol de Montserrat / Montserrat Vila", "Montserrat Vila / Montserrat"),
        array("Adult", "15,90€", "15,90€"),
        array("Infantil", "15,90€", "15,90€"),
        array("Menor", "Gratuit ", "Gratuit"),
    );
    echo "<div style='max-width: 100%; overflow-x: auto;'>";
    imprimirTabla2($registros);
    echo "</div>";
    echo "<div style='max-width: 100%; overflow-x: auto;'>";
    imprimirTabla2($registros);
    echo "</div>";
?>