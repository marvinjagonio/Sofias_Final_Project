const mainImage = document.querySelector(".main-image img");
const thumbnails = document.querySelectorAll(".img-thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});
