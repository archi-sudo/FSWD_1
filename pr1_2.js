
let cart = [];


function addProduct(productName, price, quantity) {
  cart.push({ productName, price, quantity });
}


function calculateTotal() {
  let total = 0;
  for (let product of cart) {
    total += product.price * product.quantity;
  }
  return total;
}

function removeProduct(productName) {
  cart = cart.filter((product) => product.productName !== productName);
}


function logProductDetails() {
  for (let product of cart) {
    console.log(`Product: ${product.productName}, Price: $${product.price}, Quantity: ${product.quantity}`);
  }
}

addProduct("Laptop", 1000, 1);
addProduct("Mouse", 50, 2);
addProduct("Keyboard", 75, 1);

console.log("Cart Total: $" + calculateTotal());

removeProduct("Mouse");

logProductDetails();
