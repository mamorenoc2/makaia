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
    { billetes: 100000, cantidad: 0 }
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
        //Solo los administradores pueden cargar dinero
        cargarCajero();
    } else {
        retirarDinero();
    }
}

function cargarCajero() {
    let billeteDe5 = parseInt(prompt("Ingrese la cantidad de billetes de $5000:"));
    let billeteDe10 = parseInt(prompt("Ingrese la cantidad de billetes de $10000:"));
    let billeteDe20 = parseInt(prompt("Ingrese la cantidad de billetes de $20000:"));
    let billeteDe50 = parseInt(prompt("Ingrese la cantidad de billetes de $50000:"));
    let billeteDe100 = parseInt(prompt("Ingrese la cantidad de billetes de $100000:"));

    cajero[0].cantidad += billeteDe5;
    cajero[1].cantidad += billeteDe10;
    cajero[2].cantidad += billeteDe20;
    cajero[3].cantidad += billeteDe50;
    cajero[4].cantidad += billeteDe100;

    mostrarCantidadDinero();
}

function mostrarCantidadDinero() {
    let total = 0;
    let mensaje = "";

    for(let i = 0; i < cajero.length; i++) {
        let totalBillete = cajero[i].billetes * cajero[i].cantidad;
        total += totalBillete;
        //alert("La cantidad de Billetes de $" + cajero[i].billetes + " es de " + cantidad[i].cantidad + " con un total de $" + totalBillete + ".\n");
        mensaje += "La cantidad de Billetes de $" + cajero[i].billetes + " es de " + cajero[i].cantidad + " con un total de $" + totalBillete + ".\n";
    }

    mensaje += "Dando la suma total de: $" + total;
    alert(mensaje);
    preguntarEstado();

}

function preguntarEstado() {
    /**Esta función me dice si el usuario quiere seguir usando el cajero
     *  o se termina el programa */
    let estado = confirm("¿Desea realizar otra operación en el cajero?");
    if (estado) {
        inicioSesion();
    } else {
        alert("Gracias por utilizar nuestros servicios. ¡Hasta pronto!");
    }
}

function retirarDinero() {
    /**Funcion que me permite retirar dinero del cajero
     * * si el cajero está vacio da un mensaje de mantenimiento
     */
    if (cajeroVacio()) {
        alert('Cajero en mantenimiento, !Vuelva pronto!.');
        preguntarEstado()
    }
    
}

function cajeroVacio() {

    /** Verifica que hay alguna cantidad de dinero */
    for (let i = 0; i < cajero.length; i++) {
        if (cajero[i].cantidad > 0) {
            return false;
        }
    }
    return true;
}

alert("¡Bienvenido al cajero electronico!")
inicioSesion();