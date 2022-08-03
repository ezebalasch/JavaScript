var num1 = parseFloat(prompt("Ingrese el primer número"));
var num2 = parseFloat(prompt("Ingrese el segundo número"));
var menu = prompt(
    `Ingrese "S" para la suma
    Ingrese "M" para la multiplicación
    Ingrese "R" Para la resta
    Ingrese "D" para la dicision`
)
var res=0;
switch (menu) {
    case "S","s":
        res = num1 + num2;
        alert(res);
        break;

    case "M", "m":
        res = num1 * num2;
        alert(res);
        break;
    case "R","r":
        res = num1 - num2;
        alert(res);
        break;
    case "D", "d":
        res = num1 / num2;
        alert(res);
        break;
    default:
        alert("Valor Ingresado Incorrecto")
        
        break;
}