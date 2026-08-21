const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

const productContainer = document.querySelector("#products");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `₹${product.price}`;

  card.append(name, price);

  productContainer.appendChild(card);
});
