const formularioGenero = document.getElementById("form");
const generoSelecionadoElement = document.getElementById("generoSelecionado");

formularioGenero.addEventListener("submit", (event) => {
    event.preventDefault();

    const generoSelecionado = document.querySelector(
        'input[name="genero"]:checked'
    );

    if (generoSelecionado) {
        generoSelecionadoElement.textContent =
            "Género seleccionado: " + generoSelecionado.value;
    } else {
        generoSelecionadoElement.textContent =
            "No se ha seleccionado ningún género";
    }

    formularioGenero.reset();
});
