let cart = [];
constaddProduct = (productName, price, quantity) => {
    cart.push({ productName, price, quantity });
};

constcalculateTotal = () =>
    cart.reduce((total, product) => total + product.price * product.quantity, 0);

constremoveProduct = (productName) => {
    cart = cart.filter(product =>product.productName !== productName);
};

constlogProductDetails = () => {
    console.log("Product Details:");
    cart.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);
    });
};

constdisplayCartSummary = () => {
    console.log("Cart Summary:");
    cart.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: $${price.toFixed(2)}, Quantity: ${quantity}`);
    });
};
addProduct("Laptop", 999.99, 1);
addProduct("Smartphone", 699.99, 2);
addProduct("Headphones", 199.99, 3);

console.log("\nInitial Cart:");
displayCartSummary();

console.log("\nTotal Cost:");
console.log(`$${calculateTotal().toFixed(2)}`);

console.log("\nRemoving 'Smartphone' from the cart...");
removeProduct("Smartphone");

console.log("\nUpdated Cart:");
displayCartSummary();

console.log("\nProduct Details:");
logProductDetails();

