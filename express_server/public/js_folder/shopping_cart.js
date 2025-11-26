document.addEventListener("DOMContentLoaded", () => {
  const cartItem = document.querySelector(".shopping_cart_middle_left");
  const quantityInput = cartItem.querySelector("input[type='number']");
  const priceElement = cartItem.querySelector(".price");
  const cartTotalElement = cartItem.querySelector(".cart_total");
  const clearCartBtn = document.querySelector(".clear_cart");
  const proceedToCheckoutBtn = document.querySelector(
    ".proceed_to_checkout button"
  );
  const cartTotalRightSide = document.querySelector(
    ".cart_total_right_side p:last-child"
  );

  // Extract price as a number
  const price = parseFloat(priceElement.textContent.replace(/[₱,]/g, ""));

  // Update item total and cart total
  function updateTotals() {
    const qty = parseInt(quantityInput.value, 10);
    const subtotal = price * qty;
    cartTotalElement.textContent = `₱${subtotal.toLocaleString()}`;
    cartTotalRightSide.textContent = `₱${subtotal.toLocaleString()}`;
  }

  // Change quantity via + / -
  window.changeValue = (change) => {
    let qty = parseInt(quantityInput.value, 10);
    qty += change;
    if (qty < parseInt(quantityInput.min)) qty = parseInt(quantityInput.min);
    if (qty > parseInt(quantityInput.max)) qty = parseInt(quantityInput.max);
    quantityInput.value = qty;
    updateTotals();
  };

  // Also update totals if user types directly
  quantityInput.addEventListener("input", updateTotals);

  // Clear cart button
  clearCartBtn.addEventListener("click", () => {
    cartItem.remove(); // Remove the product
    cartTotalRightSide.textContent = "₱0.00";
  });

  // Proceed to checkout
  proceedToCheckoutBtn.addEventListener("click", () => {
    const totalPrice = cartTotalRightSide.textContent;
    alert(`Checkout Order\nTotal: ${totalPrice}`);
    cartItem.remove(); // Remove the product
    cartTotalRightSide.textContent = "₱0.00";
  });

  updateTotals();
});
