let input = document.getElementById("input");
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
  addElements(taskList);
}
// console.log(taskList);

function addElements(taskList) {
  tasks.innerHTML = "";
  taskList.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
  });
}
