let usuarios = [
    { nombre: "Administrador", documento: "admin", contrasena: "1234", tipo: 1 },
    { nombre: "Cliente1", documento: "11111111", contrasena: "1234", tipo: 2 },
    { nombre: "Cliente2", documento: "22222222", contrasena: "5678", tipo: 2 }
];

let cajero = [
    { denominacion: 5000, cantidad: 0 },
    { denominacion: 10000, cantidad: 0 },
    { denominacion: 20000, cantidad: 0 },
    { denominacion: 50000, cantidad: 0 },
    { denominacion: 100000, cantidad: 0 }
];

let usuarioActual = null;

function iniciarSesion() {
    let documento = prompt("Ingrese su número de documento:");
    let contrasena = prompt("Ingrese su contraseña:");
    usuarioActual = null;

    for (let i = 0; i < usuarios.length; i++) {
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
    let billete5 = parseInt(prompt("Ingrese la cantidad de billetes de $5000:"));
    let billete10 = parseInt(prompt("Ingrese la cantidad de billetes de $10000:"));
    let billete20 = parseInt(prompt("Ingrese la cantidad de billetes de $20000:"));
    let billete50 = parseInt(prompt("Ingrese la cantidad de billetes de $50000:"));
    let billete100 = parseInt(prompt("Ingrese la cantidad de billetes de $100000:"));

    cajero[0].cantidad += billete5;
    cajero[1].cantidad += billete10;
    cajero[2].cantidad += billete20;
    cajero[3].cantidad += billete50;
    cajero[4].cantidad += billete100;

    mostrarInformacionCajero();
}

function mostrarInformacionCajero() {
    let totalGeneral = 0;
    let mensaje = "";

    for (let i = 0; i < cajero.length; i++) {
        let subtotal = cajero[i].denominacion * cajero[i].cantidad;
        totalGeneral += subtotal;
        mensaje += "Billetes de $" + cajero[i].denominacion + ": " + cajero[i].cantidad + " (Total: $" + subtotal + ")\n";
    }

    mensaje += "Total General: $" + totalGeneral;
    alert(mensaje);
    reiniciarCajero();
}

function reiniciarCajero() {
    let opcion = confirm("¿Desea realizar otra operación en el cajero?");
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
        let cantidadRetiro = parseInt(prompt("Ingrese la cantidad a retirar:"));

        if (cantidadRetiro <= 0) {
            alert("La cantidad de retiro debe ser mayor a cero.");
            retirarDinero();
            return;
        }

        let billetesEntregados = retirarDineroCajero(cantidadRetiro);

        if (billetesEntregados) {
            mostrarResultado(cantidadRetiro, billetesEntregados);
        } else {
            alert("No es posible entregar la cantidad solicitada. Por favor, intente con una cantidad menor.");
            retirarDinero();
        }
    }
}

function cajeroVacio() {
    for (let i = 0; i < cajero.length; i++) {
        if (cajero[i].cantidad > 0) {
            return false;
        }
    }
    return true;
}

function retirarDineroCajero(cantidadRetiro) {
    let billetesEntregados = []; // Array que almacenará los billetes entregados al cliente

    // Recorremos el array de cajero de forma inversa para priorizar las denominaciones más altas
    for (let i = cajero.length - 1; i >= 0; i--) {
        let cantidadBillete = Math.floor(cantidadRetiro / cajero[i].denominacion); // Calculamos la cantidad de billetes a entregar

        if (cantidadBillete > cajero[i].cantidad) {
            cantidadBillete = cajero[i].cantidad; // Si la cantidad de billetes solicitados es mayor a los disponibles, ajustamos la cantidad a los disponibles
        }

        if (cantidadBillete > 0) {
            // Si la cantidad de billetes a entregar es mayor a cero, agregamos la información al array de billetes entregados
            billetesEntregados.push({ denominacion: cajero[i].denominacion, cantidad: cantidadBillete });

            cantidadRetiro -= cantidadBillete * cajero[i].denominacion; // Actualizamos la cantidad a retirar restando el valor de los billetes entregados
        }
    }

    if (cantidadRetiro > 0) {
        return null; // Si queda una cantidad pendiente de retirar, significa que no se puede entregar la cantidad solicitada, por lo que retornamos null
    }

    actualizarCajero(billetesEntregados); // Llamamos a la función para actualizar la cantidad de billetes en el cajero
    return billetesEntregados; // Retornamos el array de billetes entregados
}

function actualizarCajero(billetesEntregados) {
    // Recorremos los billetes entregados
    for (let i = 0; i < billetesEntregados.length; i++) {
        // Buscamos la denominación correspondiente en el array de cajero
        for (let j = 0; j < cajero.length; j++) {
            if (billetesEntregados[i].denominacion === cajero[j].denominacion) {
                // Restamos la cantidad de billetes entregados al cajero
                cajero[j].cantidad -= billetesEntregados[i].cantidad;
                break;
            }
        }
    }
}


function mostrarResultado(cantidadRetiro, billetesEntregados) {
    let mensaje = "Cantidad solicitada: $" + cantidadRetiro + "\nBilletes entregados:\n";

    for (let i = 0; i < billetesEntregados.length; i++) {
        mensaje += "Billetes de $" + billetesEntregados[i].denominacion + ": " + billetesEntregados[i].cantidad + "\n";
    }

    let dineroRestante = "Dinero restante en el cajero:\n";

    for (let i = 0; i < cajero.length; i++) {
        dineroRestante += "Billetes de $" + cajero[i].denominacion + ": " + cajero[i].cantidad + "\n";
    }

    alert(mensaje + "\n" + dineroRestante);
    reiniciarCajero();
}

iniciarSesion();
