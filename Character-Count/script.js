let textArea = document.querySelector("textarea");
let form = document.querySelector("form");
let span = document.querySelector("span");

textArea.addEventListener("input", (e)=>{
    let characterCount = (e.target.value).length;
    span.textContent = characterCount;

    if(characterCount > 20){
        span.style.color = "red";
    }
    else{
        span.style.color = "black"
    }

})