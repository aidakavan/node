let noteInput = document.getElementById("noteinput");
let addBtn = document.getElementById("addbtn");
let clearBtn = document.getElementById("clearbtn");
let incompleteContainer = document.getElementById("incompleteContainer");
let completeContainer = document.getElementById('completeContainer');


window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addNewTask(task.text, task.completed));
};

addBtn.addEventListener("click", function () {
    if (noteInput.value.trim() !== "") {
        addNewTask(noteInput.value.trim());
        noteInput.value = "";
    }
});

noteInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && noteInput.value.trim() !== "") {
        addNewTask(noteInput.value.trim());
        noteInput.value = "";
    } 
});

clearBtn.addEventListener("click", function () {
    noteInput.value = "";
});

function addNewTask(taskText, completed = false) {
    let newDiv = document.createElement("div");
    newDiv.className = "newtask flex";

    let newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("autocomplete", "off");
    newInput.className = "checkbox";
    newInput.checked = completed; 

    newDiv.append(newInput);

    let newP = document.createElement("p");
    newP.textContent = taskText;

    newDiv.append(newP);

    newInput.addEventListener("change", function() {
        if (newInput.checked) {
            completeContainer.append(newDiv);
        } else {
            incompleteContainer.append(newDiv);
        }
        saveTasks(); 
    });

    if (completed) {
        completeContainer.append(newDiv);
    } else {
        incompleteContainer.append(newDiv);
    }

    saveTasks(); 
}

function saveTasks() {
    const tasks = [];
    
    incompleteContainer.querySelectorAll('.newtask').forEach(task => {
        const text = task.querySelector('p').textContent;
        const completed = task.querySelector('input').checked;
        tasks.push({ text, completed });
    });
    
    completeContainer.querySelectorAll('.newtask').forEach(task => {
        const text = task.querySelector('p').textContent;
        const completed = task.querySelector('input').checked;
        tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
