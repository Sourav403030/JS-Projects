let p = document.querySelector("p");
let inner = document.querySelector(".inner");
let h1 = document.querySelector(".bottom h1");
let button = document.querySelector(".bottom button");
let span = document.querySelector("p span");

let barProgress = 0;
let randomProgress = Math.floor(50 + Math.random()*100);

button.addEventListener("click", () => {
  button.style.pointerEvents = "none";
  button.style.opacity = "30%";
  p.textContent = "Downloading...";
  let percentage = setInterval(() => {
    barProgress++;
    h1.textContent = barProgress + "%";
    inner.style.width = barProgress+"%";
  }, randomProgress);

  setTimeout(() => {
    clearInterval(percentage);
    p.innerText = `Your Download finished in ${randomProgress/10}s`

  }, randomProgress*100);
});

