document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".menu-item");

  // Load cart from localStorage or initialize it
  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  items.forEach(item => {
    const name = item.dataset.name;
    const price = parseInt(item.dataset.price);
    const minusBtn = item.querySelector(".minus");
    const plusBtn = item.querySelector(".plus");
    const qtyDisplay = item.querySelector(".qty");

    // Load existing quantity
    qtyDisplay.textContent = cart[name]?.qty || 0;

    plusBtn.addEventListener("click", () => {
      cart[name] = cart[name] || { price, qty: 0 };
      cart[name].qty += 1;
      qtyDisplay.textContent = cart[name].qty;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateBadge();
    });

    minusBtn.addEventListener("click", () => {
      if (cart[name]) {
        cart[name].qty -= 1;
        if (cart[name].qty <= 0) {
          delete cart[name];
        }
        qtyDisplay.textContent = cart[name]?.qty || 0;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateBadge();
      }
    });
  });

  function updateBadge() {
    const badge = document.getElementById("cart-badge");
    const totalQty = Object.values(cart).reduce((acc, item) => acc + item.qty, 0);
    badge.textContent = totalQty;
  }

  updateBadge();
});
