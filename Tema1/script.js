const btnForm = document.getElementById("button-form");
const dialog = document.getElementById("window");
const lsOutput = document.getElementById("lsOutput");
const submit = document.querySelector("#submitBtn");
let taskNr = 1;
btnForm.addEventListener("click", () => {
  dialog.show();
});

taskTitle = localStorage.getItem("title");
taskDesc = localStorage.getItem("description");
taskAsign = localStorage.getItem("asignee");

lsOutput.innerHTML += `<div>Task Number: ${taskNr} <br/> Task title: ${taskTitle} <br/> Task description: ${taskDesc} <br/> Task asignee: ${taskAsign} <br/></div>`;

submit.addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const asignee = document.getElementById("asignee").value;

  //Storing Data
  taskTitle = localStorage.setItem("title", title);
  taskDesc = localStorage.setItem("description", description);
  taskAsign = localStorage.setItem("asignee", asignee);

  //Retrieving
  taskTitle = localStorage.getItem("title");
  taskDesc = localStorage.getItem("description");
  taskAsign = localStorage.getItem("asignee");

  lsOutput.innerHTML += `<div>Task Number: ${taskNr} <br/> Task title: ${taskTitle} <br/> Task description: ${taskDesc} <br/> Task asignee: ${taskAsign} <br/></div>`;
  taskNr += 1;
});
