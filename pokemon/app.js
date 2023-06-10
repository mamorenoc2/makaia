const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista de usuarios
const usuarios = [
    {
        nombre: "Admin",
        documento: "123",
        contraseña: "admin123",
        tipo: 1 // Administrador
    },
    {
        nombre: "Cliente",
        documento: "456",
        contraseña: "cliente123",
        tipo: 2 // Cliente
    }
];

// Array de objetos para almacenar la información del cajero
let cajero = [];

// Función para cargar el cajero
function cargarCajero() {
    const billetes = [5, 10, 20, 50, 100];
    cajero = [];
    let i = 0;

    const cargarSiguienteBillete = () => {
        rl.question(`Ingrese la cantidad de billetes de ${billetes[i]} mil pesos: `, (cantidad) => {
            cajero.push({
                denominacion: billetes[i],
                cantidad: parseInt(cantidad)
            });

            i++;
            if (i < billetes.length) {
                cargarSiguienteBillete();
            } else {
                console.log("Cajero cargado correctamente.");
                obtenerSuma();
                iniciarCajero();
            }
        });
    };

    cargarSiguienteBillete();
}

// Función para obtener la suma por cada denominación y el total general
function obtenerSuma() {
    let sumaTotal = 0;
    for (let i = 0; i < cajero.length; i++) {
        const denominacion = cajero[i].denominacion;
        const cantidad = cajero[i].cantidad;
        const sumaDenominacion = denominacion * cantidad;
        console.log(`Suma de ${denominacion} mil pesos: ${sumaDenominacion} mil pesos`);
        sumaTotal += sumaDenominacion;
    }
    console.log(`Total general: ${sumaTotal} mil pesos`);
}

// Función para retirar dinero del cajero
function retirarDinero() {
    const cantidadDeseada = parseInt(prompt("Ingrese la cantidad de dinero que desea retirar:"));
    if (isNaN(cantidadDeseada)) {
        console.log("Cantidad inválida.");
        return;
    }

    let cantidadDisponible = 0;
    let billetesEntregados = [];

    for (let i = cajero.length - 1; i >= 0; i--) {
        const denominacion = cajero[i].denominacion;
        const cantidad = cajero[i].cantidad;

        if (cantidad > 0) {
            const cantidadBilletes = Math.floor(cantidadDeseada / denominacion);
            const cantidadEntregada = Math.min(cantidadBilletes, cantidad);

            billetesEntregados.push({
                denominacion: denominacion,
                cantidad: cantidadEntregada
            });

            cantidadDisponible += cantidadEntregada * denominacion;
            cantidadDeseada -= cantidadEntregada * denominacion;

            cajero[i].cantidad -= cantidadEntregada;
        }
    }

    if (cantidadDisponible < cantidadDeseada) {
        console.log("No se puede retirar la cantidad solicitada.");
        return;
    }

    console.log(`Se ha retirado ${cantidadDisponible} mil pesos, utilizando los siguientes billetes:`);
    for (let i = 0; i < billetesEntregados.length; i++) {
        const denominacion = billetesEntregados[i].denominacion;
        const cantidad = billetesEntregados[i].cantidad;
        console.log(`${cantidad} billete(s) de ${denominacion} mil pesos`);
    }
}

// Función principal
function iniciarCajero() {
    rl.question("Ingrese su número de documento: ", (documento) => {
        rl.question("Ingrese su contraseña: ", (contraseña) => {
            let usuarioEncontrado = false;
            let esAdministrador = false;

            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].documento === documento && usuarios[i].contraseña === contraseña) {
                    usuarioEncontrado = true;
                    if (usuarios[i].tipo === 1) {
                        esAdministrador = true;
                    }
                    break;
                }
            }

            if (!usuarioEncontrado) {
                console.log("Usuario no existe.");
                iniciarCajero();
            } else {
                if (esAdministrador) {
                    cargarCajero();
                } else {
                    if (cajero.length === 0) {
                        console.log("Cajero en mantenimiento, vuelva pronto.");
                        iniciarCajero();
                    } else {
                        retirarDinero();
                        obtenerSuma();
                    }
                }
                iniciarCajero();
            }
        });
    });
}

// Iniciar el cajero
iniciarCajero();
