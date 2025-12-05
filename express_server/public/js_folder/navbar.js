window.onload = function () {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const threshold = 10;
  let isVisible = true;

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    if ((scrollPos) => threshold) {
      let timer = setTimeout(() => {
        navbar.classList.add("fade-in");
        setTimeout(() => {
          navbar.classList.add("fade-out");
          isVisible = true;
        }, 4000);
      }, 100);
    } else if (scrollPos != threshold) {
      clearTimeout(timer);
    }
  });
});
