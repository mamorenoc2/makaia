// Espera a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene referencias a los elementos del formulario y de la lista de tareas
    const form = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Agrega un controlador de eventos para el evento 'submit' del formulario
    form.addEventListener('submit', function (event) {
        // Evita el comportamiento predeterminado de envío del formulario
        event.preventDefault();
        // Obtiene el texto de la tarea ingresado y elimina los espacios en blanco al inicio y al final
        const taskText = taskInput.value.trim();
        // Verifica si el campo de entrada no está vacío
        if (taskText !== '') {
            // Crea un nuevo elemento 'li' para la tarea
            const taskItem = document.createElement('li');
            // Crea un nuevo elemento 'span' para mostrar el texto de la tarea
            const taskSpan = document.createElement('span');
            // Asigna el texto de la tarea al elemento 'span'
            taskSpan.textContent = taskText;
            // Crea un nuevo botón para eliminar la tarea
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            // Agrega un controlador de eventos para el evento 'click' del botón de eliminar
            deleteButton.addEventListener('click', function () {
                // Elimina el elemento 'li' de la lista de tareas cuando se hace clic en el botón de eliminar
                taskItem.remove();
            });
            // Agrega el elemento 'span' y el botón de eliminar al elemento 'li'
            taskItem.appendChild(taskSpan);
            taskItem.appendChild(deleteButton);
            // Agrega el elemento 'li' a la lista de tareas
            taskList.appendChild(taskItem);
            // Limpia el campo de entrada de texto
            taskInput.value = '';
        }
    });
});
