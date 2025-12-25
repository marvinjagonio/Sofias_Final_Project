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
  const rawPrice = Number(priceElement.textContent.replace(/[^\d.]/g, ""));

  priceElement.textContent = rawPrice.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0,
  });

  const continueBtn = document.querySelector(".continue_shopping");

  if (continueBtn) {
    continueBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Continue Shopping clicked");

      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "../index.html";
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

  function renderCart() {
    container.innerHTML = "";

    cart.forEach((product, index) => {
      const price = Number(product.price);
      const total = price * product.quantity;

      container.innerHTML += `
      <div class="cart_item" data-index="${index}">
        <p>${product.name}</p>

        <p class="price">${product.price}</p>

        <button class="decrease">-</button>
        <span class="qty">${product.quantity}</span>
        <button class="increase">+</button>

        <p class="item_total">${peso(total)}</p>
        <button class="remove">Remove</button>
        <hr>
      </div>
    `;
    });

    updateGrandTotal();
  }

  function updateGrandTotal() {
    let grandTotal = 0;

    document.querySelectorAll(".cart_total").forEach((el) => {
      grandTotal += parseFloat(el.textContent.replace(/[₱,]/g, ""));
    });

    cartTotalRightSide.textContent = `₱${grandTotal.toFixed(2)}`;
  }

  container.addEventListener("click", (e) => {
    const item = e.target.closest(".cart_item");
    if (!item) return;

    const index = item.dataset.index;

    if (e.target.classList.contains("increase")) {
      cart[index].quantity++;
    }

    if (e.target.classList.contains("decrease")) {
      if (cart[index].quantity > 1) cart[index].quantity--;
    }

    if (e.target.classList.contains("remove")) {
      cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  });

  renderCart();
});
