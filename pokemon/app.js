var usuarios = [
    { nombre: "Administrador", documento: "admin", contrasena: "1234", tipo: 1 },
    { nombre: "Cliente1", documento: "11111111", contrasena: "1234", tipo: 2 },
    { nombre: "Cliente2", documento: "22222222", contrasena: "5678", tipo: 2 }
];

var cajero = [
    { denominacion: 5000, cantidad: 0 },
    { denominacion: 10000, cantidad: 0 },
    { denominacion: 20000, cantidad: 0 },
    { denominacion: 50000, cantidad: 0 },
    { denominacion: 100000, cantidad: 0 }
];

var usuarioActual = null;

function iniciarSesion() {
    var documento = prompt("Ingrese su número de documento:");
    var contrasena = prompt("Ingrese su contraseña:");
    usuarioActual = null;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].documento === documento && usuarios[i].contrasena === contrasena) {
            usuarioActual = usuarios[i];
            break;
        }
    }

    if (usuarioActual) {
        mostrarFormularioCajero();
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, intente nuevamente.");
        iniciarSesion();
    }
}

function mostrarFormularioCajero() {
    if (usuarioActual.tipo === 1) {
        cargarCajero();
    } else {
        retirarDinero();
    }
}

function cargarCajero() {
    var billete5 = parseInt(prompt("Ingrese la cantidad de billetes de $5000:"));
    var billete10 = parseInt(prompt("Ingrese la cantidad de billetes de $10000:"));
    var billete20 = parseInt(prompt("Ingrese la cantidad de billetes de $20000:"));
    var billete50 = parseInt(prompt("Ingrese la cantidad de billetes de $50000:"));
    var billete100 = parseInt(prompt("Ingrese la cantidad de billetes de $100000:"));

    cajero[0].cantidad += billete5;
    cajero[1].cantidad += billete10;
    cajero[2].cantidad += billete20;
    cajero[3].cantidad += billete50;
    cajero[4].cantidad += billete100;

    mostrarInformacionCajero();
}

function mostrarInformacionCajero() {
    var totalGeneral = 0;
    var mensaje = "";

    for (var i = 0; i < cajero.length; i++) {
        var subtotal = cajero[i].denominacion * cajero[i].cantidad;
        totalGeneral += subtotal;
        mensaje += "Billetes de $" + cajero[i].denominacion + ": " + cajero[i].cantidad + " (Total: $" + subtotal + ")\n";
    }

    mensaje += "Total General: $" + totalGeneral;
    alert(mensaje);
    reiniciarCajero();
}

function reiniciarCajero() {
    var opcion = confirm("¿Desea realizar otra operación en el cajero?");
    if (opcion) {
        iniciarSesion();
    } else {
        alert("Gracias por utilizar el cajero. ¡Hasta luego!");
    }
}

function retirarDinero() {
    if (cajeroVacio()) {
        alert("Cajero en mantenimiento, vuelva pronto.");
        reiniciarCajero();
    } else {
        var cantidadRetiro = parseInt(prompt("Ingrese la cantidad a retirar:"));

        if (cantidadRetiro <= 0) {
            alert("La cantidad de retiro debe ser mayor a cero.");
            retirarDinero();
            return;
        }

        var billetesEntregados = retirarDineroCajero(cantidadRetiro);

        if (billetesEntregados) {
            mostrarResultado(cantidadRetiro, billetesEntregados);
        } else {
            alert("No es posible entregar la cantidad solicitada. Por favor, intente con una cantidad menor.");
            retirarDinero();
        }
    }
}

function cajeroVacio() {
    for (var i = 0; i < cajero.length; i++) {
        if (cajero[i].cantidad > 0) {
            return false;
        }
    }
    return true;
}

function retirarDineroCajero(cantidadRetiro) {
    var billetesEntregados = [];

    for (var i = cajero.length - 1; i >= 0; i--) {
        var cantidadBillete = Math.floor(cantidadRetiro / cajero[i].denominacion);

        if (cantidadBillete > cajero[i].cantidad) {
            cantidadBillete = cajero[i].cantidad;
        }

        if (cantidadBillete > 0) {
            billetesEntregados.push({ denominacion: cajero[i].denominacion, cantidad: cantidadBillete });
            cantidadRetiro -= cantidadBillete * cajero[i].denominacion;
        }
    }

    if (cantidadRetiro > 0) {
        return null;
    }

    actualizarCajero(billetesEntregados);
    return billetesEntregados;
}

function actualizarCajero(billetesEntregados) {
    for (var i = 0; i < billetesEntregados.length; i++) {
        for (var j = 0; j < cajero.length; j++) {
            if (billetesEntregados[i].denominacion === cajero[j].denominacion) {
                cajero[j].cantidad -= billetesEntregados[i].cantidad;
                break;
            }
        }
    }
}

function mostrarResultado(cantidadRetiro, billetesEntregados) {
    var mensaje = "Cantidad solicitada: $" + cantidadRetiro + "\nBilletes entregados:\n";

    for (var i = 0; i < billetesEntregados.length; i++) {
        mensaje += "Billetes de $" + billetesEntregados[i].denominacion + ": " + billetesEntregados[i].cantidad + "\n";
    }

    var dineroRestante = "Dinero restante en el cajero:\n";

    for (var i = 0; i < cajero.length; i++) {
        dineroRestante += "Billetes de $" + cajero[i].denominacion + ": " + cajero[i].cantidad + "\n";
    }

    alert(mensaje + "\n" + dineroRestante);
    reiniciarCajero();
}

iniciarSesion();
