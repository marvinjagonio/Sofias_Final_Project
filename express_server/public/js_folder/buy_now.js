// ===== BUY NOW SECTION ===== //

document.addEventListener("DOMContentLoaded", () => {
  const cartItem = document.querySelector(".shopping_cart_middle_left");
  const quantityInput = cartItem.querySelector("input[type='number']");
  const priceElement = cartItem.querySelector(".price");
  const cartTotalElement = cartItem.querySelector(".cart_total");
  const clearCartBtn = document.querySelector(".clear_cart");

  const cartTotalRightSide = document.querySelector(
    ".cart_total_right_side p:last-child",
  );
  const rawPrice = Number(priceElement.textContent.replace(/[^\d.]/g, ""));

  priceElement.textContent = rawPrice.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0,
  });

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

  updateTotals();
});

document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.querySelector(".continue_shopping");

  if (!continueBtn) {
    console.warn("Continue button not found");
    return;
  }

  continueBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "../index.html";
    }
  });
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".proceed_to_checkout");
  if (!btn) return;

  e.preventDefault();

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders = orders.map((order) =>
    order.status === "Cart" || order.status === "To Ship"
      ? { ...order, status: "To Ship" }
      : order,
  );

  localStorage.setItem("orders", JSON.stringify(orders));

  window.location.href = "to_ship.html";
});

// ===== BUY NOW BUTTON ===== //

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".buy_now");
  if (!btn) return;

  e.preventDefault();

  const productCard = btn.closest(".product");
  if (!productCard) return;

  const product = {
    name: productCard.dataset.name,
    price: Number(productCard.dataset.price),
    image: productCard.dataset.image,
    quantity: 1,
    total: `₱${Number(productCard.dataset.price).toLocaleString()}`,
    status: "Cart",
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(product);
  localStorage.setItem("orders", JSON.stringify(orders));

  window.location.href = "items_page_folder/shopping_list.html";
});

document.addEventListener("DOMContentLoaded", () => {
  shoppingCartRenderOrders();
});

/* RENDER CART */
function shoppingCartRenderOrders() {
  const container = document.getElementById("cartItems");
  const noOrdersMessage = document.querySelector(".empty_cart");
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!container || !noOrdersMessage) return;

  container.innerHTML = "";

  const onCartOrders = orders
    .map((order, index) => ({ ...order, index }))
    .filter((order) => order.status === "Cart");

  if (onCartOrders.length === 0) {
    noOrdersMessage.style.display = "block";
    return;
  } else {
    noOrdersMessage.style.display = "none";
  }

  onCartOrders.forEach((order, displayIndex) => {
    container.innerHTML += `
        <div class="d-flex card mb-3">
          <div class="badge_product_img d-flex align-items-center gap-3">
            <strong>Order #${displayIndex + 1}</strong>
<div class="mt-3 text-end">
            <button
  class="badge border-0 bg-danger rounded-pill removeProduct"
  data-index="${order.index}"
>x</button>
         

            <img class="product_image" src="${order.image}" alt="">
          </div>

          <div class="px-4 pt-4">
            <p class="product_name">${order.name}</p>
            <p>⚲ SPC Available stock: <span class="available">0</span></p>
          </div>

          <div class="d-flex gap-5 pt-4">
            <p class="price">${order.total}</p>
            <p class="quantity">${order.quantity}</p>
            <p class="cart_total">${order.total}</p>
          </div>
        </div>
      `;
  });
}

function cartRemoveOrder(cartIndex) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!orders[cartIndex]) return;

  orders[cartIndex].status = "Cancelled";

  localStorage.setItem("orders", JSON.stringify(orders));
  shoppingCartRenderOrders();
}

document.getElementById("cartItems").addEventListener("click", (e) => {
  const btn = e.target.closest(".removeProduct");
  if (!btn) return;

  const index = Number(btn.dataset.index);
  cartRemoveOrder(index);
});
