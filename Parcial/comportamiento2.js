$(document).ready(function () {
    numero = new Number(1);
    var editar = false;
    $('#gustos').click(function(){
        var gusto = document.getElementById("idgusto").value;
        if (gusto != ""){
        var fila = '<tr><td>'+ gusto + '</td><td>' + "0" + '</td><td>' + '<div class="btn btn-primary" onclick="edit(this)">Editar</div></td>'+'</tr>';
    
    $("#tablaprincipal").append(fila);
    }});
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
'<form name="formularioedicion" action="http://google.com" method="get" onsubmit="enviar()" onreset="anular()">'+
'<div class="input-group-prepend"><input id="botonaceptar" type="submit" value="Aceptar"><input id="botoncancelar" type="reset" value="Cancelar"></div>';

editar = "true";
}

else {alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');

}

}

 

function enviar(){

var Contenedor = document.getElementById('edicion'); 
nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+

'<form name="formulario" action="form.html" method="get" onsubmit="enviar()" onreset="anular()">'+
'<input type="hidden" name="nombregusto" value="'+document.querySelector('#nombregusto').value+'">'+
'<input type="hidden" name="porcentaje" value="'+document.querySelector('#porcentaje').value+'">'+
'<div class="input-group-prepend"><input id="botonaceptar" type="submit" value="Aceptar"><input id="botoncancelar" type="reset" value="Cancelar"></div>';


}

function anular(){
    window.location.reload();
}
