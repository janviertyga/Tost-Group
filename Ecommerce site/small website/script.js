// script.js
const productsContainer = document.getElementById("products");

// Sample data of products
const products = [
  {
    name: "Classic Men's Shirt",
    description: "High-quality shirt for formal occasions.",
    price: 50,
    image: "shirt.jpg"
  },
  {
    name: "Comfortable Men's Jeans",
    description: "Stylish jeans for everyday wear.",
    price: 40,
    image: "jeans.jpg"
  },
  // Add more products here
];

// Display products on the page
function displayProducts() {
  productsContainer.innerHTML = "";
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.price})">Add to Cart</button>
    `;
    productsContainer.appendChild(productDiv);
  });
}

// Add product to cart
function addToCart(price) {
  // Implement your cart functionality here
  console.log(`Added to cart: $${price}`);
}

// Display products when the page loads
displayProducts();
