document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');

    // Manejar envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        const taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ''; // Limpia el campo de entrada
        }
    });

    // Agregar tarea al DOM
    function addTask(task) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

        listItem.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="btn btn-success btn-sm me-2 btn-done">✔</button>
                <button class="btn btn-danger btn-sm btn-delete">✘</button>
            </div>
        `;

        // Marcar como hecho
        listItem.querySelector('.btn-done').addEventListener('click', function() {
            listItem.querySelector('span').classList.toggle('text-decoration-line-through');
        });

        // Eliminar tarea
        listItem.querySelector('.btn-delete').addEventListener('click', function() {
            listItem.remove();
        });

        // Editar tarea
        listItem.querySelector('.btn-edit').addEventListener('click', function() {
            const taskInput = document.getElementById('taskInput');
            taskInput.value = listItem.querySelector('span').innerText;
            taskInput.focus();
        });

        todoList.appendChild(listItem);
    }
});

