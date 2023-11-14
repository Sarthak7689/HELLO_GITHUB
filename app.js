const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDate');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <input type="text" value="${dueDate}" placeholder="Due Date">
      <button onclick="updateTask(this)">Update</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    dueDateInput.value = '';
  }
}

function updateTask(button) {
  const taskItem = button.parentNode;
  const taskText = taskItem.querySelector('span').innerText;
  const dueDate = taskItem.querySelector('input').value;

  taskItem.innerHTML = `
    <span>${taskText}</span>
    <input type="text" value="${dueDate}" placeholder="Due Date">
    <button onclick="updateTask(this)">Update</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;
}

function deleteTask(button) {
  const taskItem = button.parentNode;
  taskList.removeChild(taskItem);
}
