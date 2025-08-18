document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const list = document.getElementById("itemList");
  const items = list.querySelectorAll("li");
  const noResults = document.getElementById("noResults");

  let matchCount = 0;

  items.forEach((item) => {
    if (item.id === "noResults") return; // skip the "no results" item

    const match = item.textContent.toLowerCase().includes(query);

    item.style.display = match ? "list-item" : "none";
    if (match) matchCount++;
  });

  // Show "No results" only when nothing matches
  noResults.style.display = query && matchCount === 0 ? "list-item" : "none";

  // Show/hide the whole list
  list.style.display = query ? "block" : "none";
});

document.addEventListener("click", function (e) {
  const search = document.getElementById("search");
  const list = document.getElementById("itemList");
  if (!search.contains(e.target) && !list.contains(e.target)) {
    list.style.display = "none";
  }
});
