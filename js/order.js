document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const orderList = document.getElementById('order-list');
  const totalBillSpan = document.getElementById('total-bill');

  function updateOrderSummary() {
    let total = 0;
    orderList.innerHTML = '';

    Object.entries(cart).forEach(([name, item]) => {
      if (item.qty > 0) {
        const subtotal = item.price * item.qty;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${name}</td>
          <td>₹${item.price}</td>
          <td>${item.qty}</td>
          <td>₹${subtotal}</td>
        `;
        orderList.appendChild(row);
      }
    });

    totalBillSpan.textContent = total;
    document.getElementById('cart-badge').textContent = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  }

  window.placeOrder = () => {
    if (Object.keys(cart).length === 0 || Object.values(cart).every(i => i.qty === 0)) {
      alert('Your cart is empty!');
      return;
    }

    const address = document.getElementById('address').value.trim();
    if (!address) {
      alert('Please enter your delivery address.');
      return;
    }

    alert('Thank you for your order!');
    localStorage.removeItem('cart');
    window.location.reload();
  };

  updateOrderSummary();
});
