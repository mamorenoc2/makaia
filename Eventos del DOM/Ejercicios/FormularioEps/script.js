document.addEventListener('DOMContentLoaded', function() {
const formulario = document.querySelector("form");
let listarCita = document.getElementById("listarCita");
let buscar = document.getElementById("btnBuscar");
let busqueda = document.getElementById("busqueda");


const capturarDatos = () => {
    const nombre = document.getElementById("nombre").value;
    const hora = document.getElementById("hora").value;
    const fecha = document.getElementById("fecha").value;
    const sintomas = document.getElementById("sintomas").value;
    let citas = [];
    let registro = {
        nombre,
        hora,
        fecha,
        sintomas
    }
    citas.unshift(registro);
    localStorage.setItem("citas", JSON.stringify(citas));
};


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombref = document.getElementById("nombre").value;
    const horaf = document.getElementById("hora").value;
    const fechaf = document.getElementById("fecha").value;
    const sintomasf = document.getElementById("sintomas").value;
        const fila = document.createElement('tr');
        const columnaNombre = document.createElement('td');
        const columnaFecha = document.createElement('td');
        const columnaHora = document.createElement('td');
        const columnaSintomas = document.createElement('td');
        const columnaEliminarCita = document.createElement('td');
        const botonEliminar = document.createElement('button');

        columnaNombre.textContent = nombref;
        columnaFecha.textContent = fechaf;
        columnaHora.textContent = horaf;
        columnaSintomas.textContent = sintomasf;
        botonEliminar.textContent = "Eliminar cita";

        botonEliminar.addEventListener('click', function() {
            fila.remove();
        });

        columnaEliminarCita.appendChild(botonEliminar);

        fila.appendChild(columnaNombre);
        fila.appendChild(columnaFecha);
        fila.appendChild(columnaHora);
        fila.appendChild(columnaSintomas);
        fila.appendChild(columnaEliminarCita);
        listarCita.appendChild(fila);
    
});

});