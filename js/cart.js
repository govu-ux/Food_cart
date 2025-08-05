// js/cart.js

// This script is primarily for the cart badge on pages other than the order page.
// The cart object itself is managed by menu.js and order.js via localStorage.

// Function to update the cart badge in the navbar
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Always read latest from localStorage
  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  badge.innerText = totalItems;
}

// Call it once on page load to set the initial badge count
document.addEventListener("DOMContentLoaded", updateCartBadge);

// Optional: Listen for custom event if cart changes on other pages (e.g., from a quick add button)
// For this project, menu.js directly calls updateCartBadge() after changes.
