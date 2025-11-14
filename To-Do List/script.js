let input = document.querySelector("input");
let form = document.querySelector("form");
let body = document.querySelector("body");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let taskValue = input.value;
    let task = document.createElement("div");
    let taskH1 = document.createElement("h1");
    taskH1.textContent = taskValue;
    
    task.classList.add("task");
    task.append(taskH1);
    taskH1.classList.add("task-h1");
    body.append(task);

    input.value = " ";
})


