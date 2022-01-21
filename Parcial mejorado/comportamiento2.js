$(document).ready(function () {
    numero = new Number(1);
    $('#gustos').click(function(){
        var gusto = document.getElementById("idgusto").value;
        document.getElementById("idgusto").value = '';
        if (gusto != ""){
        var fila = '<tr><td>'+ gusto + '</td><td>' + "0" + '</td><td>' + '<div class="btn btn-primary" onclick="edit(this)">Editar</div></td>'+'</tr>';
    $("#tablaprincipal").append(fila);
    }}
    );
});

var editar=false;

function edit(nodo){

if (editar == false) {

var Td = nodo.parentNode; 
var Tr = Td.parentNode;
var enTr = Tr.getElementsByTagName('td');
var contenedor = document.getElementById('edicion');
var nombregusto = enTr[0].textContent; 
var porcentaje = enTr[1].textContent;
var opciones = enTr[2].textContent;

var nuevafila = '<td><input type="text" class="form-control" name="nombregusto" id="nombregusto" value="'+ nombregusto +'"></td>'+
'<td><input type="text" class="form-control" name="porcentajeinput" id="porcentajeinput" value="'+ porcentaje +'"></td><td>En edición</td>';

Tr.innerHTML = nuevafila;

contenedor.innerHTML = '<span style="font-size:15px !important;">Pulse Aceptar para guardar los cambios o cancelar para anularlos</span>'+
'<form name="formularioedicion"><div class="input-group-prepend"><input id="botonaceptar" type="submit" value="Aceptar" onclick="page2()"><input id="botoncancelar" type="button" value="Cancelar" onclick="location.reload()"></div>';

editar = true;
}

else {alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');

}
}

function page2(){
    
    var nombre = document.getElementById("nombreuser").value;
    var correo = document.getElementById("correouser").value;
    var celular = document.getElementById("celularuser").value;
    var gusto = document.getElementById("nombregusto").value;
    var porce = document.getElementById("porcentajeinput").value;
    
    let codigo = `
    <div class="container">
        <div id="raro">
        </div>      
        <table class="table">   
                <tbody>
                    <tr>
                    <th scope="col" class="th">Nombre:</th>
                    <td class="td" id="infonombre"></td>
                </tr>
                <tr>
                    <th scope="row" class="th">Email:</th>
                    <td class="td" id="infocorreo">Mark</td>      
                </tr>
                <tr>
                    <th scope="row" class="th">Telefono:</th>
                    <td class="td" id="infotelefono">Jacob</td>
                </tr>
                <tr>
                    <th scope="row" class="th">Gusto:</th>
                    <td class="td" id="infogusto">Larry the Bird</td>
                </tr>
                <tr>
                    <th scope="row" class="th">Porcentaje %:</th>
                    <td class="td" id="infopor">80</td>
                </tr>
                </tbody>
            </table>
        </div>
    `
    box.innerHTML = codigo;
    infonombre.innerHTML = nombre;
    infocorreo.innerHTML = correo;
    infotelefono.innerHTML = celular;
    infogusto.innerHTML = gusto;
    infopor.innerHTML = porce;
}

