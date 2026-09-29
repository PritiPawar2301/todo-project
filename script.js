const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

addBtn.addEventListener("click", function () {

    const task = taskInput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

li.textContent = task;

li.addEventListener("click", function () {
    li.classList.toggle("completed");
});

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.addEventListener("click", function () {
    li.remove();
});

li.appendChild(deleteBtn);

taskList.appendChild(li);
});

clearBtn.addEventListener("click",function (){
    taskList.innerHTML = "";
});

taskInput.addEventListener("keypress",function (event) {
    if(event.keyn === "Enter") {
        addBtn.click();
    }
});