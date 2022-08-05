var array1 = new Array();
for (let index = 0; index < 4; index++) {
    array1.push(Math.random()*100)
    
}

array1.forEach(function imprimir(element, indice, array) {
    console.log(`a[${indice}]= ${element}`)
    
})