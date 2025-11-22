document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".buy_now").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productCard = this.closest(".product");

      const product = {
        name: productCard.dataset.name,
        price: productCard.dataset.price,
        image: productCard.dataset.image,
      };

      localStorage.setItem("selectedProduct", JSON.stringify(product));
      console.log("Saved product:", product);

      window.location.href = "items_page_folder/shopping_list.html";
    });
  });

  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (!product) {
    document.querySelector(".product_name").textContent = "No product found.";
    return;
  }

  document.querySelector(".product_image").src = "../" + product.image;
  document.querySelector(".product_name").textContent = product.name;
  document.querySelector(".price").textContent = product.price;

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
