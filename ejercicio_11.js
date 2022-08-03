var frase = prompt("Ingrese una frase");
var separada = frase.split(" ");
var mayor = -1;
var palabra = "";
var max = "";
for (let index = 0; index < separada.length; index++) {
    palabra = separada[index].length;
    if (palabra>mayor) {
        mayor = separada[index].length;
        max = separada[index]
    }    
}
alert(max)