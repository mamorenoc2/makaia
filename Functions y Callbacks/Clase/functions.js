// FUNCIONES
/**Una función es un conjunto de instrucciones que se agrupan para realizar
una tarea concreta y que se pueden reutilizar fácilmente. */


// Hay varias formas de crear funciones en JavaScript: 

// DECLARACION
function saludarPorDeclaracion() {
    return('Hola');
}
console.log(saludarPorDeclaracion());

// EXPRESION

const saludoExpresion = function saludarPorExpresion() {
    return('Hi!');
};

console.log(saludoExpresion());

/** La funcion de expresion se puede escribir como funciones flecha */


const saludoFlecha = () => {
    return('Hola!, soy una funcion flecha!');
};

console.log(saludoFlecha());