var array1 = new Array();
for (let index = 0; index < 5; index++) {
    array1.push(Math.round(Math.random()*100));    
}
array1.splice(3,2)

array1.forEach(function imprimir(element, indice, array) {
    console.log(`a[${indice}]= ${element}`)
    
})