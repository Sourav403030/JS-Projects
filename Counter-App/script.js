let h1 = document.querySelector("h1");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");

let a = 0;

inc.addEventListener("click", ()=>{
    a++;
    h1.textContent = a;
})

dec.addEventListener("click", ()=>{
   a--;
   h1.textContent = a;
   if(a < 0){
    h1.textContent = 0;
   }
})

reset.addEventListener("click", ()=>{
    a = 0;
    h1.textContent = a;
})