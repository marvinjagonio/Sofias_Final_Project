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
          <button class="btn btn-danger btn-sm" data-index="${order.index}">
  Cancel Order
</button>
        </div>
      </div>
    `;
  });
}

document.getElementById("toShipOrders").addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-danger");
  if (!btn) return;

  const index = Number(btn.dataset.index);
  cancelOrder(index);
});

function cancelOrder(realIndex) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!orders[realIndex]) return;

  orders[realIndex].status = "Cancelled";

  localStorage.setItem("orders", JSON.stringify(orders));
  toShipRenderOrders();
}
