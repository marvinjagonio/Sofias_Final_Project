const dropdownLinks = document.querySelectorAll(
  ".bestselling-dropdown-content a"
);
const productList = document.querySelector(".products_flex"); // FIXED selector

dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sortType = e.target.dataset.sort;

    let products = Array.from(productList.querySelectorAll(".product"));

    products.sort((a, b) => {
      let titleA = a
        .querySelector(".product_name")
        .innerText.trim()
        .toLowerCase();
      let titleB = b
        .querySelector(".product_name")
        .innerText.trim()
        .toLowerCase();

      let priceA = parseFloat(
        a.querySelector(".price").innerText.replace(/[₱,]/g, "")
      );
      let priceB = parseFloat(
        b.querySelector(".price").innerText.replace(/[₱,]/g, "")
      );

      switch (sortType) {
        case "az":
          return titleA.localeCompare(titleB);
        case "za":
          return titleB.localeCompare(titleA);
        case "high-low":
          return priceB - priceA;
        case "low-high":
          return priceA - priceB;
        // "new-old" and "old-new" would need a DATE field in your product data
        default:
          return 0;
      }
    });

    // Re-render products in sorted order
    productList.innerHTML = "";
    products.forEach((p) => productList.appendChild(p));
  });
});
