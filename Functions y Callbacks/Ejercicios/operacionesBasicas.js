const operacionesBasicas = (num1, num2, operacion) => {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if(num2 == 0) {
                return 'No se puede dividir entre cero';
            } else {
                return num1 / num2;
            }
        default:
            return 'Operacion inválida'
    }
};

console.log(operacionesBasicas(5, 0, 'division'));