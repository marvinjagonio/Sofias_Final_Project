window.onload = function () {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  const navbar1 = document.getElementById("navbar1");
  const navbar2 = document.getElementById("navbar2");
  const scrollingText = document.getElementById("scrolling_text");
  if (!navbar1 || !navbar2) return;

  const threshold = 10;
  let isVisible = true;

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    if ((scrollPos) => threshold) {
      let timer = setTimeout(() => {
        navbar1.classList.add("fade-in");
        navbar2.classList.add("fade-in");
        scrollingText.classList.add("fade-in");
        setTimeout(() => {
          navbar1.classList.add("fade-out");
          navbar2.classList.add("fade-out");
          scrollingText.classList.add("fade-out");
          isVisible = true;
        }, 5000);
      }, 100);
    } else if (scrollPos != threshold) {
      clearTimeout(timer);
    }
  });
});
