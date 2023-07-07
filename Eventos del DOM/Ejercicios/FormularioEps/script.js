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
      
      // Aquí es donde está el problema: cada vez que se capturan los datos,
      // se crea un nuevo array 'citas' vacío y se agrega el registro actual.
      // Esto significa que el array solo tendrá un registro en cada captura.
      // Para solucionarlo, se debe obtener el array 'citas' del localStorage
      // al principio y luego agregar el nuevo registro al array existente.
      let citas = JSON.parse(localStorage.getItem("citas")) || [];
      
      let registro = {
        nombre,
        hora,
        fecha,
        sintomas
      };
      
      citas.unshift(registro);
      
      // Aquí se guarda el array 'citas' actualizado en el localStorage.
      localStorage.setItem("citas", JSON.stringify(citas));
    };

    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      capturarDatos();
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
      
      columnaNombre.textContent = nombref; // Usar nombref en lugar de nombre
      columnaFecha.textContent = fechaf; // Usar fechaf en lugar de fecha
      columnaHora.textContent = horaf; // Usar horaf en lugar de hora
      columnaSintomas.textContent = sintomasf; // Usar sintomasf en lugar de sintomas
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
  