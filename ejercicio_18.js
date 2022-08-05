var valores = [true, 5, false, "hola", "adios", 2];

var strings = valores.filter((elemento) => {
        return typeof(elemento) === 'string';
    });

var mayor;

strings.forEach( (elemento) => {
    if( mayor ){
        if ( elemento.length > mayor.length ){
            mayor = elemento;
        }
    }
    else {
        mayor = elemento;
    }
} );

console.log(mayor);