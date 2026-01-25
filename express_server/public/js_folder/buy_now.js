document.addEventListener("DOMContentLoaded", () => {
  /* BUY NOW BUTTON */
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
      status: "To Ship",
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(product);
    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href = "items_page_folder/shopping_list.html";
  });

  /* RENDER CART */
  function shoppingCartRenderOrders() {
    const container = document.getElementById("cartItems");
    const noOrdersMessage = document.querySelector(".empty_cart");
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (!container || !noOrdersMessage) return;

    const toShipOrders = orders
      .map((order, index) => ({ ...order, index })) // 👈 keep real index
      .filter((order) => order.status === "To Ship");

    if (toShipOrders.length === 0) {
      noOrdersMessage.style.display = "block";
      container.innerHTML = "";
      return;
    } else {
      noOrdersMessage.style.display = "none";
    }

    toShipOrders.forEach((order, displayIndex) => {
      container.innerHTML += `
        <div class="shopping_cart_middle_left mb-3">
          <div class="badge_product_img d-flex align-items-center gap-3">
            <strong>Order #${displayIndex + 1}</strong>

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

  /* REMOVE PRODUCT (EVENT DELEGATION) */
  document.getElementById("cartItems")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".removeProduct");
    if (!btn) return;

    const index = Number(btn.dataset.index);
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));

    shoppingCartRenderOrders();
  });

  shoppingCartRenderOrders();
});
