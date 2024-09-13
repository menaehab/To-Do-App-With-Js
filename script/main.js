let input = document.getElementById("input");
let submit = document.getElementById("add");
let tasks = document.getElementById("tasks");
let taskList = [];

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    taskList = JSON.parse(data);
    addElements(taskList); 
  }
}

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
    completed: false
  };
  taskList.push(task);
  addElements(taskList);
  storeToLocalStorage();
}

function addElements(taskList) {
  tasks.innerHTML = "";
  taskList.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "delete";
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    tasks.append(div);
  });
}

function storeToLocalStorage() {
  window.localStorage.setItem("tasks", JSON.stringify(taskList));
}

getDataFromLocalStorage();
