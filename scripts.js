const prices = {
  milk: 10,
  paneer: 15,
  butter: 20,
};

function updateQuantity(id, change) {
  const input = document.getElementById(id);
  const cartCounter = document.getElementById('cart-counter');
  const subtotalElement = document.getElementById('subtotal');
  const taxElement = document.getElementById('tax');
  const totalElement = document.getElementById('total');

  let quantity = parseInt(input.value) + change;
  if (quantity < 0) quantity = 0;
  input.value = quantity;

  // Update cart counter
  const totalItems =
      parseInt(document.getElementById('milk').value) +
      parseInt(document.getElementById('paneer').value) +
      parseInt(document.getElementById('butter').value);
  cartCounter.textContent = totalItems;

  // Update totals
  const subtotal =
      prices.milk * parseInt(document.getElementById('milk').value) +
      prices.paneer * parseInt(document.getElementById('paneer').value) +
      prices.butter * parseInt(document.getElementById('butter').value);
  const tax = subtotal * 0.24; // 24% tax
  const total = subtotal + tax;

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  taxElement.textContent = `$${tax.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}
