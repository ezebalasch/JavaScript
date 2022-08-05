var matrizObtenida = [[3], [6], [9], [12], [15]];
var matrizFinal = matrizObtenida.flat();
for (let index = 0; index < matrizFinal.length; index++) {
    matrizFinal[index] = (matrizFinal[index])+3;
    
}
console.log(matrizFinal)
