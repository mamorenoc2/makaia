document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskTable = document.getElementById('taskList')
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskRow = document.createElement('tr');
        const taskCellText = document.createElement('td');
        const taskCellCheck = document.createElement('td');
        const taskCheck = document.createElement('input');
        const taskCellDelete = document.createElement('td');
        const deleteButton = document.createElement('button');
        
        taskCellText.textContent = taskText;
        taskCheck.setAttribute('type', 'checkbox');
        taskCellCheck.appendChild(taskCheck);
        
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
          taskRow.remove();
        });
        
        taskCellDelete.appendChild(deleteButton);
        
        taskRow.appendChild(taskCellText);
        taskRow.appendChild(taskCellCheck);
        taskRow.appendChild(taskCellDelete);
        
        taskTable.appendChild(taskRow);
        taskInput.value = '';
      }
    });
  });
  