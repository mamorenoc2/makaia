const usuarios = [
    { nombre: "Administrador", documento: "111111", contrasena: "123", tipo: 1 },
    { nombre: "Maria", documento: "222222", contrasena: "456", tipo: 2 },
    { nombre: "Juan", documento: "333333", contrasena: "789", tipo: 2 },
];

const cajero = [
    { billetes: 5000, cantidad: 0 },
    { billetes: 10000, cantidad: 0 },
    { billetes: 20000, cantidad: 0 },
    { billetes: 50000, cantidad: 0 },
    { billetes: 100000, cantidad: 0 },
];

let usuarioActual = null;

function inicioSesion() {
    let documento = prompt("Ingrese su documento: ");
    let contrasena = prompt("Ingrese su contrasena: ");
    usuarioActual = null;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].documento === documento && usuarios[i].contrasena == contrasena) {
            usuarioActual = usuarios[i];
            break;
        }
    }

    if (usuarioActual) {
        alert("Bienvenid@ " + usuarioActual.nombre);
        mostrarCajero();
    } else {
        alert("Usuario o contaseña incorrectos. Por favor intente nuevamente");
        inicioSesion();
    }
}

function mostrarCajero() {
    if (usuarioActual.tipo === 1) {
        cargarCajero();
    } else {
        retirarDinero();
    }
}

function cargarCajero() {

}

function retirarDinero() {
    
}

function cajeroVacio() {
    for (let i = 0; i < cajero.length; i++) {
        if (cajero.cantidad > 0) {
            return false;
        }
    }
    return true;
}

alert("¡Bienvenido al cajero electronico!")
inicioSesion();