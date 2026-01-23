document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".buy_now");
    if (!btn) return;

    e.preventDefault();

    const productCard = btn.closest(".product");
    if (!productCard) {
      alert("No .product parent found");
      return;
    }

    const selectedProduct = {
      name: productCard.dataset.name,
      price: Number(productCard.dataset.price),
      image: productCard.dataset.image,
    };

    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    window.location.href = "items_page_folder/shopping_list.html";
  });

  const shoppingPage = document.getElementById("shoppingPage");
  if (!shoppingPage) return;

  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (!product) {
    document.querySelector(".product_name").textContent = "No product found.";
    document.querySelector(".cart_total").textContent = "₱0.00";
    document.querySelector(".price").textContent = "₱0.00";
    document.querySelector(".product_image").src = "../image/no_image.jpg";
    document.querySelector("#quantity").value = "0";
    alert("No Product Selected");
    window.location.href = "../index.html";
    return;
  }

  document.querySelector(".product_image").src = "../" + product.image;
  document.querySelector(".product_name").textContent = product.name;
  document.querySelector(".price").textContent = `₱${product.price}`;

  const qtyInput = document.getElementById("quantity");
  const cartTotalEl = document.querySelector(".cart_total");
  const rightTotal = document.querySelector(".cartTotal");

  function toNumber(priceStr) {
    return Number(priceStr.replace(/[₱,]/g, ""));
  }

  const priceValue = toNumber(product.price.toString());

  function updateTotal() {
    const qty = parseInt(qtyInput.value) || 1;
    const total = priceValue * qty;

    cartTotalEl.textContent = "₱" + total.toLocaleString();
    rightTotal.textContent = cartTotalEl.textContent;
  }

  updateTotal();

  document.getElementById("increaseQty").onclick = () => {
    qtyInput.value = Math.min(parseInt(qtyInput.value) + 1, 10);
    updateTotal();
  };

  document.getElementById("decreaseQty").onclick = () => {
    qtyInput.value = Math.max(parseInt(qtyInput.value) - 1, 1);
    updateTotal();
  };

  document.getElementById("removeProduct").onclick = () => {
    localStorage.removeItem("selectedProduct");
    location.reload();
  };

  document.getElementById("clearCart").onclick = () => {
    localStorage.removeItem("selectedProduct");
    location.reload();
  };
});
