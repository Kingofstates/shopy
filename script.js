// Simulate adding an item to cart
function addToCart(itemName, quantity, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ itemName, quantity, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${itemName} added to cart!`);
}

// Load cart items in cart.html
function loadCart() {
  const cartTable = document.getElementById("cart-items");
  const grandTotal = document.getElementById("grand-total");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (!cartTable || !grandTotal) return;

  cart.forEach((item, index) => {
    let row = document.createElement("tr");
    let totalPrice = item.quantity * item.price;
    total += totalPrice;

    row.innerHTML = `
      <td>${item.itemName}</td>
      <td>${item.quantity}</td>
      <td>₹${item.price}</td>
      <td>₹${totalPrice}</td>
    `;

    cartTable.appendChild(row);
  });

  grandTotal.textContent = total;
}

// Run cart load only if on cart page
window.onload = () => {
  loadCart();
};
