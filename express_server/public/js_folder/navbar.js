window.onload = function () {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  const navbar1 = document.getElementById("navbar1");
  const navbar2 = document.getElementById("navbar2");
  const scrollingText = document.querySelector(".scrolling-container");
  if (!navbar1 || !navbar2) return;

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || window.pageYOffset;
    const threshold = 20;

    if (scrollPos >= threshold) {
      loopAnim();
    }

    if (scrollPos === 0) {
      clearTimeout(timer);

      loopAnim();
    }

    function loopAnim() {
      timer = setTimeout(() => {
        navbar1.classList.add("fade-in");
        navbar2.classList.add("fade-in");
        scrollingText.classList.add("fade-in");
        setTimeout(() => {
          navbar1.classList.add("fade-out");
          navbar2.classList.add("fade-out");
          scrollingText.classList.add("fade-out");
        }, 5000);
      }, 100);
    }
  });
});
