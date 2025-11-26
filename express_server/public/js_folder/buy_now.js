document.addEventListener("DOMContentLoaded", () => {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  // Buy Now buttons (safe on all pages)
  document.querySelectorAll(".buy_now").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productCard = this.closest(".product");

      const selectedProduct = {
        name: productCard.dataset.name,
        price: productCard.dataset.price,
        image: productCard.dataset.image,
      };

      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

      window.location.href = "items_page_folder/shopping_list.html";
    });
  });

  // ---- RUN ONLY ON SHOPPING LIST PAGE ----
  const shoppingPage = document.getElementById("shoppingPage");
  if (!shoppingPage) return; // STOP if not on shopping page

  // ---- PRODUCT SECTION ----
  if (!product) {
    document.querySelector(".product_name").textContent = "No product found.";
    return;
  }

  document.querySelector(".product_image").src = "../" + product.image;
  document.querySelector(".product_name").textContent = product.name;
  document.querySelector(".price").textContent = product.price;

  // ---- CART LOGIC ----

  const qtyInput = document.getElementById("quantity");
  const cartTotalEl = document.querySelector(".cart_total");
  const rightTotal = document.querySelector(".cartTotal");

  function toNumber(price) {
    return Number(price.replace(/[₱,]/g, ""));
  }

  const priceValue = toNumber(product.price);

  function updateTotal() {
    const qty = parseInt(qtyInput.value) || 1;
    const total = priceValue * qty;

    cartTotalEl.textContent = "₱" + total.toLocaleString();
    rightTotal.textContent = cartTotalEl.textContent;
  }

  updateTotal();

  document.getElementById("increaseQty").onclick = () => {
    qtyInput.value++;
    updateTotal();
  };

  document.getElementById("decreaseQty").onclick = () => {
    if (qtyInput.value > 1) qtyInput.value--;
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
