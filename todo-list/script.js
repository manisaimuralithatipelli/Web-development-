const taskInput = document.querySelector("#taskInput");
const addbtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addbtn.addEventListener("click", function () {
  if (taskInput.value.trim() === "") {
    alert("Please enter a task.");
  } else {
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";  
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(newTask);
    }); 
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
});
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addbtn.click();
    }
});
