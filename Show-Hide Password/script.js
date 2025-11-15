let input = document.querySelector("input");

let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    if(input.type === "password"){
        input.type = "text";
        btn.textContent = "Hide";
        btn.style.backgroundColor = "red";
    }
    else{
        input.type = "password";
        btn.textContent = "Show";
        btn.style.backgroundColor = "lightblue";
    }
})



