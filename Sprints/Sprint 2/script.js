document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector("form");
    const submited = document.querySelector("submited");
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("secondName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        let registro = {
            firstName,
            lastName,
            email,
            password
        };

        usuarios.unshift(registro);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.getElementById("form").style.display = "none";
        document.getElementById("submited").style.display = "block";

        formulario.reset();
    });
    document.getElementById("goBackButton").addEventListener("click", function() {
        document.getElementById("form").style.display = "flex";
        document.getElementById("submited").style.display = "none";
        });
});
