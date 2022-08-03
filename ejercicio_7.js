
function ingresar() {
    var num = parseInt(prompt("Ingrese un número")) 
    return num;
} 
var limite = parseInt(prompt("Ingrese un límite"))
ingresar;
var cont = 0;

do {
    cont +=ingresar();
} while (cont<limite);
alert(`El límite de ${limite} fue superado por el numero ${cont}`)
