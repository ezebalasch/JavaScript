function persona(nombre, edad, sexo, peso, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}
alert("Bienvenido para conocerlo mejor, por favor ingrese sus datos a continuación");

var nombre =  prompt("Ingrese su nombre");
var edad = prompt("Ingrese su edad");
var sexo = prompt("Ingrese su sexo ('H' hombre, 'M' mujer,'O' otro)");
var peso = prompt("Ingrese su peso");
var altura = prompt("Ingrese su altura");
var eze = new persona(nombre, parseInt(edad), (sexo).charAt(0), parseFloat(peso), parseFloat(altura));
alert(`
El nombre de la persona es ${eze.nombre},
su edad es ${eze.edad},
su sexo es ${eze.sexo},
su peso es ${eze.peso},
su altura es ${eze.altura}`)