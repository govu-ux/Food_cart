// js/script.js

// Hide the loader after page load (if a loader element exists)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});

// Optional: Toggle mobile menu (future-proof if adding burger menu)
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const cartIcon = document.querySelector(".cart-icon");

  // The cart icon now directly links to order.html, so this alert is redundant.
  // cartIcon.addEventListener("click", () => {
  //   alert("Coming soon: Your cart!");
  // });
});
