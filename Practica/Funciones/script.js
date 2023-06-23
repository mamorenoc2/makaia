function calcularIMC() {
    let nombre = document.getElementById("nombre").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Calcular el IMC
    altura *= 0.01;
    
    let imc = peso / (altura * altura);

    // Mostrar el resultado en el elemento con el id "resultado"
    document.getElementById("resultado").textContent = "Hola " + nombre + "! Tu IMC es: " + imc.toFixed(2);
}