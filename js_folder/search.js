document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const list = document.getElementById("itemList");
  const items = list.querySelectorAll("li");
  const noResults = document.getElementById("noResults");

  let matchCount = 0;

  items.forEach(item => {
    const match = item.textContent.toLowerCase().startsWith(query); 
    
    item.style.display = match ? "list-item" : "none";
    if (match) matchCount++;
  });

  // Show/hide the "No results found" item
  noResults.style.display = (query.length > 0 && matchCount === 0) ? "list-item" : "none";

  if (query.length == 0){
    list.style.display = "none";
  }
  // ✅ Show list on first letter
  list.style.display = query.length > 0 ? "block" : "no result";
});

document.addEventListener("click", function (e) {
  const search = document.getElementById("search");
  const list = document.getElementById("itemList");
  if (!search.contains(e.target) && !list.contains(e.target)) {
    list.style.display = "none";
  }
});