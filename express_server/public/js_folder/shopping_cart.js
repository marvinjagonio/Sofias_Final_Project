document.addEventListener("DOMContentLoaded", () => {
  const cartItem = document.querySelector(".shopping_cart_middle_left");
  const quantityInput = cartItem.querySelector("input[type='number']");
  const priceElement = cartItem.querySelector(".price");
  const cartTotalElement = cartItem.querySelector(".cart_total");
  const clearCartBtn = document.querySelector(".clear_cart");
  const proceedToCheckoutBtn = document.querySelector(
    ".proceed_to_checkout button",
  );
  const cartTotalRightSide = document.querySelector(
    ".cart_total_right_side p:last-child",
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
    const product = {
      name: productCard.dataset.name,
      price: Number(productCard.dataset.price),
      image: productCard.dataset.image,
      quantity: 1,
      total: `₱${Number(productCard.dataset.price).toLocaleString()}`,
      status: "To Ship",
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(product);

    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href = "to_ship.html";
  });

  updateTotals();
});

//  To Ship Item

document.addEventListener("DOMContentLoaded", () => {
  toShipRenderOrders();
});

function toShipRenderOrders() {
  const container = document.getElementById("toShipOrders");
  const noOrdersMessage = document.querySelector(".no_to_ship");
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!container || !noOrdersMessage) return;

  container.innerHTML = "";

  const toShipOrders = orders
    .map((order, index) => ({ ...order, index }))
    .filter((order) => order.status === "To Ship");

  if (toShipOrders.length === 0) {
    noOrdersMessage.classList.add("active");
    return;
  } else {
    noOrdersMessage.classList.remove("active");
  }

  toShipOrders.forEach((order, displayIndex) => {
    container.innerHTML += `
      <div class="card mb-3 p-3">
        <div class="d-flex justify-content-between">
          <strong>Order #${displayIndex + 1}</strong>
          <span class="badge bg-warning">${order.status}</span>
        </div>

        <div class="d-flex mt-3">
          <img src="${order.image}" width="70" class="me-3 rounded">
          <div>
            <p class="mb-1">${order.name}</p>
            <p class="mb-1">Qty: ${order.quantity}</p>
            <p class="mb-1">${order.total}</p>
          </div>
        </div>

        <small class="text-muted">Note: ${order.note || "None"}</small>

        <div class="mt-3 text-end">
          <button class="btn btn-danger btn-sm"
            onclick="cancelOrder(${order.index})">
            Cancel Order
          </button>
        </div>
      </div>
    `;
  });
}

function cancelOrder(realIndex) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders[realIndex].status = "Cancelled";

  localStorage.setItem("orders", JSON.stringify(orders));
  toShipRenderOrders();
}
