var texto = prompt("Ingrese dato a devolver")
var dato = (texto === 'true' || texto === 'false') ? `${texto} es un booleano`
 : (isNaN(texto)) ? `${texto} es un string` : `${texto} es un numero`

alert(dato) 