let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.name;
    const statusButton = document.createElement('button');
    statusButton.textContent = task.completed ? 'Отменить' : 'Выполнить';
    statusButton.onclick = () => toggleTaskStatus(index);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.onclick = () => deleteTask(index);
    listItem.appendChild(statusButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const newTask = { name: taskInput.value, completed: false };
  tasks.push(newTask);
  renderTasks();
  taskInput.value = '';
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function deleteAllTasks() {
  tasks = [];
  renderTasks();
}

function toggleTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function filterTasks() {
  const filterStatus = document.getElementById('filterStatus').value;
  if (filterStatus === 'completed') {
    const completedTasks = tasks.filter(task => task.completed);
    renderFilteredTasks(completedTasks);
  } else if (filterStatus === 'incomplete') {
    const incompleteTasks = tasks.filter(task => !task.completed);
    renderFilteredTasks(incompleteTasks);
  } else {
    renderTasks();
  }
}

function renderFilteredTasks(filteredTasks) {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  filteredTasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.name;
    taskList.appendChild(listItem);
  });
}
