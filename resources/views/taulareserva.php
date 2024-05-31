<?php
    function imprimirTabla3($registros){
        echo "<table class='mt-4 w-full'>";
        foreach ($registros as $indexRegistro => $registro) {
            echo "<tr>";
            foreach ($registro as $index => $campo) {
                if ($index == 0) {
                    echo "<td class='td-1'>$campo</td>";
                } else {
                    echo "<td class='td-2'>$campo</td>";
                }
            }
            echo "</tr>";
            }
        }
?>