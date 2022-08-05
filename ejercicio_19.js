var arregloA = new Array(50);
var arregloB = new Array(20);
function asignar(arreglo) {
    for (let index = 0; index < arreglo.length; index++) {
        arreglo[index] = Math.round(Math.random()*1000);
    }
}
console.log("Arreglo A");
asignar(arregloA);

mostrar(arregloA);
function mostrar(arreglo) {
    arreglo.forEach(function imprimir(element, indice, array) {
        console.log(`[${indice}]= ${element}`)})
    
}
var arregloSorted = new Array(50);
arregloSorted = arregloA.sort();
for (let index = 0; index < 10; index++) {
    arregloB[index] = arregloSorted.slice(index,index+1)
    
}
for (let index = 10; index < 20; index++) {
    arregloB[index] = (arregloSorted.slice(index,index+1))*0.5
    
}
mostrar(arregloB);