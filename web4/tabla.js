function CrearTabla() {
    var dv = document.getElementById("d1");
    var cad = "";
    var mat = new Array(10);
    var fil, col;
    for (fil = 0; fil < 10; fil++) { mat[fil] = new Array(3); }
    /*creamos las filas y columnas del thead y creamos los arrays    */

    mat[0][0] = "Miercoles";
    mat[0][1] = "Lucifer";
    mat[0][2] = "666.666.666";

    mat[1][0] = "Tam";
    mat[1][1] = "Lucifer";
    mat[1][2] = "666.666.666";

    mat[2][0] = "Jodah";
    mat[2][1] = "Lucifer";
    mat[2][2] = "666.666.666";

    mat[3][0] = "Tam";
    mat[3][1] = "Lucifer";
    mat[3][2] = "666.666.666";

    mat[4][0] = "Tam";
    mat[4][1] = "Lucifer";
    mat[4][2] = "666.666.666";

    mat[5][0] = "Tam";
    mat[5][1] = "Lucifer";
    mat[5][2] = "666.666.666";

    mat[6][0] = "Tam";
    mat[6][1] = "Lucifer";
    mat[6][2] = "666.666.666";

    mat[7][0] = "Tam";
    mat[7][1] = "Lucifer";
    mat[7][2] = "666.666.666";

    mat[8][0] = "Tam";
    mat[8][1] = "Lucifer";
    mat[8][2] = "666.666.666";

    mat[9][0] = "Tam";
    mat[9][1] = "Lucifer";
    mat[9][2] = "666.666.666";
/* creamos el thead    */
    var tabla = '<div class="Contenedor tabla">' +
        '<div class="C cabtab">' +
        '<div class="titab">' +
        '<table id="cabtab" class="cabtab">' +
        '<caption id="CapTab">TABLA DINÁMICA</caption>' +
        '<thead class="Thead" id="Lcab"><tr><th class="W35">Nombre</th><th class="W45">Apellidos</th><th class="W20">Móvil</tr></thead>' +
        '</table>' +
        '</table>' +
        '</div>' +
        '<div class="marginal"></div>' +
        '</div>' +
        '<div class="C bodytab">' +
        '<table id="bodytab" class="bodytab">' +
        '<tbody class="Tbody" id="Lbody"></tbody>' +
        '</table>' +
        '</div>' +
        '</div>';

    dv.innerHTML = tabla;
/*rellenamos el tbody: con las etiquetas de fuera y las de dentro   */
    var filas = document.getElementById('Lbody');
    filas.innerHTML = "";
    var linea = '';
    var clases = '';
    for (var fil = 0; fil < 10; fil++) {
        /* voy recorriendo las filas(posiciones de filas del arrray) y en cada fila segun sea par o impar  */
        var clases = '';
        if (fil % 2 == 0) {
            clases = 'Cgris';
        } else {
            clases = 'cblan';
        }
        linea += '<tr class="' + clases + '">';
        for (var col = 0; col < 3; col++) {
            switch (col) {
                case 0:
                    clases = 'W35 Cai';
                    break;
                case 1:
                    clases = 'W45 Cai';
                    break;
                case 2:
                    clases = 'W20 Cad';
                    break;
            }
            linea += '<td class="' + clases + '">' + mat[fil][col] + '</td>';
        }
        linea += '</tr>';
    
    }
filas.innerHTML = linea;

/* en el contenido del tbody: meto linea que es todo el codigo que he estado añadiendo anteriormente         */
}
function BorrarTabla() {
    var dv = document.getElementById("d1");
    dv.innerHTML = '';
}