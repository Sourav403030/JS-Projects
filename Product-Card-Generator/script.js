const products = [
  { name: "Laptop", price: 45000 },
  { name: "Headphones", price: 2000 },
  { name: "Keyboard", price: 1500 },
];

let body = document.querySelector("body");

products.map(({ name, price }) => {
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let h3 = document.createElement("h3");
  h1.textContent = name;
  h3.textContent = price;
  div.classList.add("card");
  div.append(h1);
  div.append(h3);
  body.append(div);
});
