const mainImage = document.querySelector(".main-image img");
const thumbnails = document.querySelectorAll(".img-thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});

const qtyInput = document.getElementById("quantityInput");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");

minusBtn.addEventListener("click", () => {
  let value = parseInt(qtyInput.value) || 1;
  if (value > 1) qtyInput.value = value - 1;
});

plusBtn.addEventListener("click", () => {
  let value = parseInt(qtyInput.value) || 1;
  qtyInput.value = value + 1;
});
