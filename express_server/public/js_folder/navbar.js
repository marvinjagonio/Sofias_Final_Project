document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const threshold = 400;
  let isVisible = true;
  let timeout;

  window.addEventListener("scroll", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const scrollPos = window.scrollY || window.pageYOffset;

      if (scrollPos < threshold && isVisible) {
        navbar.classList.add("hidden");
        isVisible = false;
      }

      if (scrollPos >= threshold && !isVisible) {
        setTimeout(function () {
          navbar.classList.remove("hidden");
          isVisible = true;
        }, 50);
      }
    }, 50);
  });
});
