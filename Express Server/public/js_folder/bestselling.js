//  BESTSELLER

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

// MAX PRICE and MIN PRICE

function filterPrices() {
  const minPrice = document.getElementById("min-price").value;
  const maxPrice = document.getElementById("max-price").value;

  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const price = parseFloat(product.getAttribute("data-price"));

    // Check conditions
    if (
      (minPrice === "" || price >= minPrice) &&
      (maxPrice === "" || price <= maxPrice)
    ) {
      product.style.display = "block"; // Show if within range
    } else {
      product.style.display = "none"; // Hide if not
    }
  });
}

// AVAILABILITY // RATINGS // DISCOUNTS

// Add event listener for all checkboxes
const checkboxes = document.querySelectorAll(".filters input[type=checkbox]");
checkboxes.forEach((cb) => {
  cb.addEventListener("change", filterProducts);
});

function filterProducts() {
  const selectedBrands = getCheckedValues(".filter-brand");
  const selectedDiscounts = getCheckedValues(".filter-discount");
  const selectedRatings = getCheckedValues(".filter-rating");
  const selectedAvailability = getCheckedValues(".filter-availability");

  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const brand = product.dataset.brand;
    const discount = product.dataset.discount;
    const rating = product.dataset.rating;
    const availability = product.dataset.availability;

    let show = true;

    if (selectedBrands.length && !selectedBrands.includes(brand)) show = false;
    if (selectedDiscounts.length && !selectedDiscounts.includes(discount))
      show = false;
    if (selectedRatings.length && !selectedRatings.includes(rating))
      show = false;
    if (
      selectedAvailability.length &&
      !selectedAvailability.includes(availability)
    )
      show = false;

    product.style.display = show ? "block" : "none";
  });
}

function getCheckedValues(selector) {
  return [...document.querySelectorAll(selector + ":checked")].map(
    (cb) => cb.value
  );
}
