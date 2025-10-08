const mainImage = document.querySelector(".main-image img");
const thumbnails = document.querySelectorAll(".img-thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});

// Quantity

// Select elements
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const quantityInput = document.getElementById("quantityInput");

// Add event listeners
plusBtn.addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  value++;
  quantityInput.value = value;
});

minusBtn.addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  if (value > 1) {
    value--;
    quantityInput.value = value;
  }
});

// Prevent negative or invalid values manually entered
quantityInput.addEventListener("input", () => {
  if (quantityInput.value === "" || quantityInput.value < 1) {
    quantityInput.value = 1;
  }
});
