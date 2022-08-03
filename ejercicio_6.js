var num = parseInt(prompt("Ingrese un número para determinar su paridad"))
if (num==0) {
    alert(`El número ${num} no es ni par ni impar`)
}else if ((num % 2) == 0) {
    alert(`El número ${num} es par`)
    
}else{
    alert(`El número ${num} es impar`)
}
    
