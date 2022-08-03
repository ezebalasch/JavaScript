function pedir() {
    var num = parseInt(prompt("Ingrese numeros enteros"))  
      return num;
}
var max = -99999999;
var min = 999999999;
var prom = 0;
var contador = 0;
var inicio = 0;
var suma = 0
do {
    inicio = pedir();
    if (inicio != 0) {
        contador += 1;
        suma += inicio;  
        prom = suma/inicio;

    }
    
    if (inicio<min && inicio != 0) {
        min = inicio;
    }
    if (inicio> max && inicio != 0) {
        max = inicio;
    }

} while (inicio != 0);


alert(
    `El máximo número ingresado es ${max}
    El mínimo número ingresado es el ${min}
    El promedio de todos los números es ${prom} `)