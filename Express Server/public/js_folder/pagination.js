document.addEventListener("DOMContentLoaded", () => {
  const items = [
    {
      name: "Gaming Mouse Pro",
      price: "₱1,499.00",
      discount: "₱1,299.00",
      image: "../../sample_img/spc_sample_network_device.png",
      brand: "AMD",
      availability: "in-stock",
      rating: 4,
      dataPrice: 1499,
      dataDiscount: 200,
      bestseller: 10,
    },
    {
      name: "Wireless Mouse X",
      price: "₱1,299.00",
      discount: "₱999.00",
      image: "../../sample_img/spc_sample_desktop.png",
      brand: "Intel",
      availability: "in-stock",
      rating: 4,
      dataPrice: 1299,
      dataDiscount: 300,
      bestseller: 8,
    },
    {
      name: "RGB Gamer Mouse",
      price: "₱1,899.00",
      discount: "₱1,499.00",
      image: "../../sample_img/spc_sample_network_device.png",
      brand: "AMD",
      availability: "in-stock",
      rating: 5,
      dataPrice: 1899,
      dataDiscount: 400,
      bestseller: 9,
    },
    {
      name: "Ergonomic Mouse",
      price: "₱999.00",
      discount: "₱799.00",
      image: "../../sample_img/spc_sample_network_device.png",
      brand: "AMD",
      availability: "in-stock",
      rating: 3,
      dataPrice: 999,
      dataDiscount: 200,
      bestseller: 6,
    },
    {
      name: "Office Silent Mouse",
      price: "₱799.00",
      discount: "₱649.00",
      image: "../../sample_img/spc_sample_network_device.png",
      brand: "AMD",
      availability: "in-stock",
      rating: 4,
      dataPrice: 799,
      dataDiscount: 150,
      bestseller: 4,
    },
    {
      name: "Bluetooth Mouse",
      price: "₱1,099.00",
      discount: "₱899.00",
      image: "../../sample_img/spc_sample_network_device.png",
      brand: "AMD",
      availability: "in-stock",
      rating: 4,
      dataPrice: 1099,
      dataDiscount: 200,
      bestseller: 7,
    },
  ];

  const perPage = 12;
  let currentPage = 1;
  let currentSort = "bestseller";
  let filteredItems = [...items];
  let sortedItems = [...items];

  const listContainer = document.getElementById("product-list");
  const pageLinks = document.querySelectorAll(".page-link");
  const sortLinks = document.querySelectorAll(
    ".bestselling-dropdown-content a"
  );

  // 🔹 SORT LOGIC
  function sortItems(criteria) {
    if (criteria === "az") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "za") {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria === "high-low") {
      sortedItems.sort((a, b) => b.dataPrice - a.dataPrice);
    } else if (criteria === "low-high") {
      sortedItems.sort((a, b) => a.dataPrice - b.dataPrice);
    } else if (criteria === "bestseller") {
      sortedItems.sort((a, b) => b.bestseller - a.bestseller);
    }
  }

  // 🔹 FILTER LOGIC (fixed)
  function filterItems() {
    const minPrice =
      parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice =
      parseFloat(document.getElementById("max-price").value) || Infinity;

    const selectedBrands = Array.from(
      document.querySelectorAll(".filter-brand:checked")
    ).map((el) => el.value);

    // discount checkboxes hold numeric percent values (e.g. "10", "20")
    const selectedDiscounts = Array.from(
      document.querySelectorAll(".filter-discount:checked")
    ).map((el) => parseInt(el.value));

    // ratings checkboxes hold numeric rating values (e.g. "5","4")
    const selectedRatings = Array.from(
      document.querySelectorAll(".filter-rating:checked")
    ).map((el) => parseInt(el.value));

    filteredItems = items.filter((item) => {
      const matchPrice =
        item.dataPrice >= minPrice && item.dataPrice <= maxPrice;

      const matchBrand = selectedBrands.length
        ? selectedBrands.includes(item.brand)
        : true;

      const discountPercent = item.dataPrice
        ? Math.round((item.dataDiscount / item.dataPrice) * 100)
        : 0;

      const matchDiscount = selectedDiscounts.length
        ? selectedDiscounts.some((disc) => discountPercent >= disc)
        : true;

      const matchRating = selectedRatings.length
        ? selectedRatings.some((r) => item.rating >= r)
        : true;

      return matchPrice && matchBrand && matchDiscount && matchRating;
    });

    sortedItems = [...filteredItems];
    sortItems(currentSort);
    currentPage = 1;
    renderPage(currentPage);
  }

  // 🔹 RENDER PAGE
  function renderPage(page) {
    listContainer.innerHTML = "";
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageItems = sortedItems.slice(start, end);

    pageItems.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <p class="product_save"><b>Save ₱${item.dataDiscount}</b></p>
        <img src="${item.image}" alt="${item.name}">
        <p class="product-name">${item.name}</p>
        <button class="spcfix_btn"><b>SPCfix</b></button>
        <div class="d-flex justify-content-between">
          <div>
            <p class="price">${item.price}</p>
            <p class="discount"><del>${item.discount}</del></p>
          </div>
          <div><span class="star">⭐ ${item.rating}</span></div>
        </div>
        <div class="d-flex justify-content-between">
          <button class="buy_now">Buy Now</button>
          <button class="cart"><img src="../../image/cart.png" alt="cart"></button>
        </div>
      `;

      listContainer.appendChild(card);
    });

    // ✨ Fade-in animation
    listContainer.classList.remove("fade-in");
    void listContainer.offsetWidth;
    listContainer.classList.add("fade-in");
  }

  // 🔹 PAGINATION
  pageLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      if (link.classList.contains("prev") && currentPage > 1) {
        currentPage--;
      } else if (
        link.classList.contains("next") &&
        currentPage < Math.ceil(sortedItems.length / perPage)
      ) {
        currentPage++;
      } else if (link.dataset.page) {
        currentPage = parseInt(link.dataset.page);
      }

      renderPage(currentPage);
    });
  });

  // 🔹 SORT DROPDOWN
  sortLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentSort = e.target.dataset.sort;
      sortItems(currentSort);
      currentPage = 1;
      renderPage(currentPage);
      document.querySelector(".dropbtn").textContent = e.target.textContent;
    });
  });

  // 🔹 FILTER BUTTON (Price range)
  document
    .querySelector(".price_dropdown button")
    .addEventListener("click", filterItems);

  // 🔹 FILTER CHECKBOXES
  document.querySelectorAll(".filters input").forEach((checkbox) => {
    checkbox.addEventListener("change", filterItems);
  });

  // ✅ INITIAL LOAD
  sortItems(currentSort);
  renderPage(currentPage);
});
