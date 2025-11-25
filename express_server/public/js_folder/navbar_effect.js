const navbar = document.getElementById("navbar1");

let lastY = 0;

window.addEventListener("scroll", () => {
  const y = window.scrollY || document.documentElement.scrollTop;

  if (y <= 0) {
    navbar.classList.remove("scroll-down", "scroll-up");
  } else if (y > lastY) {
    navbar.classList.add("scroll-down");
    navbar.classList.remove("scroll-up");
  } else if (y < lastY) {
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  }

  lastY = y;
});
