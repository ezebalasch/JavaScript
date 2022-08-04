function libro(ISBN, titulo, autor, nropags){
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.nropags = nropags;
}

alert("Ingrese los datos del libro")

var ISBN =  prompt("Ingrese el ISBN");
var titulo = prompt("Ingrese el titulo");
var autor = prompt("Ingrese el autor");
var nropags = prompt("Ingrese el número de páginas");

var libro1 = new libro(Number(ISBN), titulo, autor, nropags)

alert(
    `El libro se llama ${libro1.titulo},
    su código de ISBN es ${libro1.ISBN},
    su autor es ${libro1.autor} y
    su número de páginas es ${libro1.nropags} `)
