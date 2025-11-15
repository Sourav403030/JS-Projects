let dog = document.querySelector(".dog");
let cat = document.querySelector(".cat");
let bird = document.querySelector(".bird");
let imageCard = document.querySelector(".image-card")

let img = document.createElement("img");
imageCard.append(img);


dog.addEventListener("click", ()=>{
    img.setAttribute("src", "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*")
})

cat.addEventListener("click", ()=>{
    img.setAttribute("src", "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863")
})

bird.addEventListener("click", ()=>{
    img.setAttribute("src", "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg")
})


