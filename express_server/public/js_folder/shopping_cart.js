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

  const price = parseFloat(priceElement.textContent.replace(/[₱,]/g, ""));

  const continueBtn = document.querySelector(".continue_shopping");

  if (continueBtn) {
    continueBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Continue Shopping clicked");

      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "items_page_folder/index.html";
      }
    });
  }

  function updateTotals() {
    const qty = parseInt(quantityInput.value, 10);
    const subtotal = price * qty;
    cartTotalElement.textContent = `₱${subtotal.toLocaleString()}`;
    cartTotalRightSide.textContent = `₱${subtotal.toLocaleString()}`;
  }

  window.changeValue = (change) => {
    let qty = parseInt(quantityInput.value, 10);
    qty += change;
    if (qty < parseInt(quantityInput.min)) qty = parseInt(quantityInput.min);
    if (qty > parseInt(quantityInput.max)) qty = parseInt(quantityInput.max);
    quantityInput.value = qty;
    updateTotals();
  };

  quantityInput.addEventListener("input", updateTotals);

  clearCartBtn.addEventListener("click", () => {
    cartItem.remove();
    cartTotalRightSide.textContent = "₱0.00";
  });

  proceedToCheckoutBtn.addEventListener("click", () => {
    const totalPrice = cartTotalRightSide.textContent;
    alert(`Checkout Order\nTotal: ${totalPrice}`);
    cartItem.remove();
    cartTotalRightSide.textContent = "₱0.00";
  });

  updateTotals();
});
