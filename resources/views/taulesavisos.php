<?php
    function imprimirTabla($registros, $afegirButton){
        echo "<table id='avisosTable' class='mt-4 w-full'>";
        foreach ($registros as $indexRegistro => $registro) {
            echo "<tr onclick='loadEditForm(" . $registro[0] . ", \"" . $registro[1] . "\", \"" . $registro[2] . "\")'>";
            foreach ($registro as $index => $campo) {
                if ($index == 0) {
                    echo "<td class='td-1'>$campo</td>";
                }
                else if ($index == 2) {
                    // Verificar el tipo de aviso y aplicar el estilo correspondiente
                    switch ($campo) {
                        case 'Alert':
                            echo "<td class='alert td-3'><span class='icon'><svg width='16' height='14' viewBox='0 0 21 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M11.7447 1.14801L20.0189 16.102C20.1451 16.33 20.2115 16.5887 20.2115 16.852C20.2115 17.1153 20.1451 17.374 20.0189 17.602C19.8928 17.83 19.7113 18.0194 19.4928 18.151C19.2743 18.2827 19.0264 18.352 18.774 18.352H2.22555C1.97322 18.352 1.72533 18.2827 1.50681 18.151C1.28829 18.0194 1.10683 17.83 0.980665 17.602C0.854503 17.374 0.788084 17.1153 0.788086 16.852C0.788088 16.5887 0.854509 16.33 0.980674 16.102L9.25492 1.14801C9.80788 0.14801 11.1908 0.14801 11.7447 1.14801ZM10.4998 2.89801L3.05547 16.352H17.9441L10.4998 2.89801ZM10.4998 13C10.754 13 10.9977 13.1054 11.1774 13.2929C11.3572 13.4804 11.4581 13.7348 11.4581 14C11.4581 14.2652 11.3572 14.5196 11.1774 14.7071C10.9977 14.8947 10.754 15 10.4998 15C10.2456 15 10.0019 14.8947 9.82215 14.7071C9.64243 14.5196 9.54147 14.2652 9.54147 14C9.54147 13.7348 9.64243 13.4804 9.82215 13.2929C10.0019 13.1054 10.2456 13 10.4998 13ZM10.4998 6.00001C10.754 6.00001 10.9977 6.10537 11.1774 6.2929C11.3572 6.48044 11.4581 6.73479 11.4581 7.00001V11C11.4581 11.2652 11.3572 11.5196 11.1774 11.7071C10.9977 11.8947 10.754 12 10.4998 12C10.2456 12 10.0019 11.8947 9.82215 11.7071C9.64243 11.5196 9.54147 11.2652 9.54147 11V7.00001C9.54147 6.73479 9.64243 6.48044 9.82215 6.2929C10.0019 6.10537 10.2456 6.00001 10.4998 6.00001Z' fill='white'/>
                            </svg>
                            </span></td>";
                            break;
                        case 'Info':
                            echo "<td class='info td-3'><span class='icon'><svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v8h-2z' fill='white'/>
                            </svg></span></td>";                                        
                            break;
                        case 'Emergency':
                            echo "<td class='emergency td-3'><span class='icon'><svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12 2C7.03 2 3 6.03 3 11V16H2C1.45 16 1 16.45 1 17V19C1 19.55 1.45 20 2 20H22C22.55 20 23 19.55 23 19V17C23 16.45 22.55 16 22 16H21V11C21 6.03 16.97 2 12 2ZM5 16V11C5 7.13 8.13 4 12 4C15.87 4 19 7.13 19 11V16H5ZM11 18H13V20H11V18Z' fill='white'/>
                            </svg>
                            </span></td>";
                            
                            break;
                        default:
                            echo "<td>$campo</td>";
                            break;
                    }
                } else {
                    echo "<td class='td-2'>$campo</td>";
                }
            }
            if ($afegirButton){
                echo "<td class='td-4 p-0'>
                    <div class='relative'>
                        <div class='input-container flex justify-center'>
                            <button onclick='toggleDropdown(this)' id='buttonReg$indexRegistro' class='toggle outline-none focus:outline-none flex items-center'>
                                <span>
                                    <svg class='fill-current h-4 w-4 transform group-hover:-rotate-180
                                    transition duration-150 ease-in-out' xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'><path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' /></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </td>";    
            }
            echo "</tr>";
        }
        echo "</table>";
    }

    function taula1($registros){
        imprimirTabla(array_slice($registros, 0, 4), false);
    }

    function taula2($registros){
        echo "<div style='max-width: 100%; overflow-x: auto;'>";
        imprimirTabla(array_slice($registros, 0, 8), false);
        echo "</div>";
        echo "<div style='max-width: 100%; overflow-x: auto;'>";
        imprimirTabla(array_slice($registros, 8, 8), false);
        echo "</div>";
    }
?>