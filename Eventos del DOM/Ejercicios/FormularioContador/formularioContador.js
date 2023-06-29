/**Guardamos los valores del HTML */

const menos = document.getElementById("menos");
const mas = document.getElementById("mas");
const contador = document.getElementById("contador");
let count = 0;

//Funcion para aumentar el numero del contador
menos.addEventListener("click", function () {
  count--;
  contador.textContent = count;
});

//Funcion para disminuir el numero del contador
mas.addEventListener("click", function () {
  count++;
  contador.textContent = count;
});