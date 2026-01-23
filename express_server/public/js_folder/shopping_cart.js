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
      name: document.querySelector(".product_name").textContent,
      price: document.querySelector(".price").textContent,
      quantity: document.getElementById("quantity").value,
      total: document.querySelector(".cart_total").textContent,
      image: document.querySelector(".product_image").src,
      note: document.getElementById("message").value,
      status: "To Ship",
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(product);

    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href = "to_ship.html";
    // const totalPrice = cartTotalRightSide.textContent;
    // alert(`Checkout Order\nTotal: ${totalPrice}`);
    // cartItem.remove();
    // cartTotalRightSide.textContent = "₱0.00";
    // window.location.href = "../index.html";
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

document.addEventListener("DOMContentLoaded", () => {
  renderOrders();
});

function renderOrders() {
  const container = document.getElementById("toShipOrders");
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  container.innerHTML = "";

  if (orders.length === 0) {
    container.innerHTML = "<p>No orders to ship 📦</p>";
    return;
  }

  orders.forEach((order, index) => {
    if (order.status !== "To Ship") return;

    container.innerHTML += `
      <div class="card mb-3 p-3">
        <div class="d-flex justify-content-between">
          <strong>Order #${index + 1}</strong>
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
          <button class="btn btn-danger btn-sm" onclick="cancelOrder(${index})">
            Cancel Order
          </button>
        </div>
      </div>
    `;
  });
}

function cancelOrder(index) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders[index].status = "Cancelled";

  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}
