let p = document.querySelector("p");
let text = p.innerText;

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0;

function randomText(){
    let str = text.split("").map((char, index)=>{
        if(index < iteration){
            return char;
        }
        return characters.split("")[Math.floor(Math.random()*52)];
    }).join("");

    p.innerText = str;

    iteration += 0.3;
}

setInterval(randomText, 30);