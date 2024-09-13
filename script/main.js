let input = document.getElementById("task");
let submit = document.getElementById("add");
let tasks = document.getElementById("tasks");
let taskList = [];

// Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTask(input.value);
    input.value = "";
  }
};

function addTask(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  taskList.push(task);
}
console.log(taskList);
