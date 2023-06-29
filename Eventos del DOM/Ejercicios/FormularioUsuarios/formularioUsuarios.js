// formulario por ID
const formularioUsuario = document.getElementById("form");
//Lista de usuarios
const listaDeUsuarios = [];

formularioUsuario.addEventListener("submit", (event) =>{

    // Evitamos el comportamiento por defecto de recargar la página
    event.preventDefault();


    // Obtenemos los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const edad = document.getElementById("edad").value;

    const nuevoUsuaro = {
        nombre,
        apellido,
        telefono,
        edad
    };

    listaDeUsuarios.push(nuevoUsuaro);
    console.log(listaDeUsuarios);

    // Limpiar los campos del formulario
    formularioUsuario.reset();

});