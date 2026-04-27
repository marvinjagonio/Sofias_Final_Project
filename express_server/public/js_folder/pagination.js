// ===== PAGINATION SECTION ===== //

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productContainer");
  const pagination = document.getElementById("pagination");
  const sortLinks = document.querySelectorAll(
    ".bestselling-dropdown-content a",
  );
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");
  const brandCheckboxes = document.querySelectorAll(".filter-brand");
  const discountCheckboxes = document.querySelectorAll(".filter-discount");
  const ratingCheckboxes = document.querySelectorAll(".filter-rating");
  const availabilityCheckbox = document.querySelector(
    'input[type="checkbox"]:not(.filter-brand):not(.filter-discount):not(.filter-rating)',
  );

  const allProducts = Array.from(document.querySelectorAll(".product"));
  const itemsPerPage = 6;
  let currentPage = 1;
  let currentSort = null;
  let filteredProducts = [...allProducts];

  // ✅ Apply Filters
  function applyFilters() {
    const min = Number(minPriceInput.value) || 0;
    const max = Number(maxPriceInput.value) || Infinity;
    const selectedBrands = Array.from(brandCheckboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);
    const selectedDiscounts = Array.from(discountCheckboxes)
      .filter((cb) => cb.checked)
      .map((cb) => Number(cb.value));
    const selectedRatings = Array.from(ratingCheckboxes)
      .filter((cb) => cb.checked)
      .map((cb) => Number(cb.value));
    const availabilityChecked =
      availabilityCheckbox && availabilityCheckbox.checked;

    filteredProducts = allProducts.filter((p) => {
      const price = Number(p.dataset.price);
      const brand = p.dataset.brand;
      const discount = Number(p.dataset.discount);
      const rating = Number(p.dataset.rating);
      const availability = p.dataset.availability;

      const priceMatch = price >= min && price <= max;
      const brandMatch = selectedBrands.length
        ? selectedBrands.includes(brand)
        : true;
      const discountMatch = selectedDiscounts.length
        ? selectedDiscounts.includes(discount)
        : true;
      const ratingMatch = selectedRatings.length
        ? selectedRatings.includes(rating)
        : true;
      const availabilityMatch = availabilityChecked
        ? availability === "in-stock"
        : true;

      return (
        priceMatch &&
        brandMatch &&
        discountMatch &&
        ratingMatch &&
        availabilityMatch
      );
    });

    applySort();
  }

  // ✅ Apply Sorting
  function applySort() {
    switch (currentSort) {
      case "az":
        filteredProducts.sort((a, b) =>
          a
            .querySelector(".product_name b")
            .textContent.localeCompare(
              b.querySelector(".product_name b").textContent,
            ),
        );
        break;
      case "za":
        filteredProducts.sort((a, b) =>
          b
            .querySelector(".product_name b")
            .textContent.localeCompare(
              a.querySelector(".product_name b").textContent,
            ),
        );
        break;
      case "high-low":
        filteredProducts.sort(
          (a, b) => Number(b.dataset.price) - Number(a.dataset.price),
        );
        break;
      case "low-high":
        filteredProducts.sort(
          (a, b) => Number(a.dataset.price) - Number(b.dataset.price),
        );
        break;
    }

    currentPage = 1;
    renderPage(currentPage);
  }

  // ✅ Render Page
  function renderPage(page) {
    container.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    filteredProducts.slice(start, end).forEach((p) => container.appendChild(p));

    // Empty message
    if (filteredProducts.length === 0) {
      container.innerHTML = `<p style="text-align:center; color:gray;">No products found.</p>`;
    }

    renderPagination(totalPages);
  }

  // ✅ Render Pagination Buttons
  function renderPagination(totalPages) {
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.classList.toggle("active", i === currentPage);
      btn.addEventListener("click", () => {
        currentPage = i;
        renderPage(currentPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      pagination.appendChild(btn);
    }
  }

  // ✅ Event Listeners
  sortLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentSort = link.dataset.sort;
      applySort();
    });
  });

  [minPriceInput, maxPriceInput].forEach((input) =>
    input.addEventListener("input", applyFilters),
  );

  [...brandCheckboxes, ...discountCheckboxes, ...ratingCheckboxes].forEach(
    (cb) => cb.addEventListener("change", applyFilters),
  );

  if (availabilityCheckbox)
    availabilityCheckbox.addEventListener("change", applyFilters);

  // ✅ Initial Render
  applyFilters();
});
