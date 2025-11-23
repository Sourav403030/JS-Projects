let img = document.querySelector("img");

document.body.addEventListener("mousemove", (evt)=>{
    img.style.left = evt.x + "px";
    img.style.top = evt.y + "px";
})