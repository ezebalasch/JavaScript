var palabra = prompt("Ingrese una nueva palabra")
var orden = "";
var separando = ""
for (let index = 0; index < palabra.length; index++) {
    separando = palabra.substring(palabra.length-index,palabra.length-1-index);
    orden += separando;
}
alert(orden)