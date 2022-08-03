var frase = prompt("Ingrese frase a separar")
var frasecompleta = "";
for (let index = 0; index < frase.length; index++) {
 var frasenew = frase.substring(index,index+1) + " ";
  frasecompleta = frasecompleta + frasenew;
}
alert(frasecompleta)