const pi = Math.PI
function perimetro(radio){
let resultado = (2*pi*radio)
return resultado
}
function area(radio){
let resultado = pi*(radio)**2
return resultado
}
var radio = Number(prompt("Ingrese el radio del circulo a calcular"))
alert(
    `El perímetro del círculo es ${perimetro(radio)}
    y su area es ${area(radio)}`)