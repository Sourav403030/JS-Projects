let toggleBtn = document.querySelector("button");
let darkMain = document.querySelector("main");
let darkBtn = document.querySelector("button");

toggleBtn.addEventListener("click", ()=>{
    darkMain.classList.toggle("dark-main");
    darkBtn.classList.toggle("dark-btn");
})


