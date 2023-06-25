const numerosAleatorios = () => {
    let numeros = [];

    while(numeros.length < 100) {
        //Definir el número aleatiro entre mil


        /**Math.random realmente devuelve un número decimal entre 0 (incluido) y 1 (excluido)
         * Pero al multiplicarlo por 1000, pero esto solo llega a 999, por lo tanto se le
         * suma 1 para que no genere un cero y para que llege hasta 1000. */
        let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

        //Si el numero aleatorio no está en numeros que lo agrege al objeto
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio); 
        }
    }

    /**Para usar sort con numeros no se puede usar sola, ya que sort organiza de forma alfabética
     * El método sort() puede ordenar valores negativos, cero y positivos en el orden correcto. Cuando compara dos valores, los envía a nuestra función de comparación y luego ordena los valores de acuerdo al resultado devuelto.
     * 
     * Si el resultado es negativo, a se ordena antes que b.
     * Si el resultado es positivo, b se ordena antes de a.
     * Si el resultado es 0, nada cambia.
     * 
     * https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
     */
    numeros.sort((a, b) => a - b);

    console.log(numeros);
};

numerosAleatorios();