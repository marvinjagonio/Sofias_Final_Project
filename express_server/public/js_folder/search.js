const searchInput = document.getElementById("search");
const itemList = document.getElementById("itemList");
const items = itemList.querySelectorAll("li");
const noResults = document.getElementById("noResults");

itemList.style.display = "none";

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();
  let matchFound = false;

  if (query === "") {
    itemList.style.display = "none";
    noResults.style.display = "none";
    return;
  }

  itemList.style.display = "block";

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();

    if (text.includes(query) && item.id !== "noResults") {
      item.style.display = "block";
      matchFound = true;
    } else {
      if (item.id !== "noResults") {
        item.style.display = "none";
      }
    }
  });

  noResults.style.display = matchFound ? "none" : "block";
});

window.addEventListener("load", () => {
  searchInput.value = "";
});

document.addEventListener("click", (event) => {
  const searchContainer = document.querySelector(".search-container");

  if (!searchContainer.contains(event.target)) {
    searchInput.value = "";
    itemList.style.display = "none";
    noResults.style.display = "none";
  }
});

document
  .querySelector(".search-container")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });
