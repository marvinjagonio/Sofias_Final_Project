function buyNow(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "shopping_list.html";
}
