let lastScroll = 0;
const navbar1 = document.getElementById("navbar1");
const navbar2 = document.getElementById("navbar2");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll === 0) {
    navbar1.classList.remove("scroll", "y");
    navbar2.classList.remove("scroll", "y");
    return;
  }

  if (currentScroll > lastScroll) {
    navbar1.classList.remove("scroll", "y");
    navbar2.classList.remove("scroll", "y");
  } else {
    navbar1.classList.add("scroll");

    if (currentScroll > 10) {
      navbar1.classList.add("y");
      navbar2.classList.add("y");
    } else {
      navbar1.classList.remove("y");
      navbar2.classList.remove("y");
    }
  }

  lastScroll = currentScroll;
});
