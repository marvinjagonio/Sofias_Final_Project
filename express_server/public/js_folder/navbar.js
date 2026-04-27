// ===== NAVIGATION AND MARQUEE FADE-IN/FADE-OUT TRANSITION ===== //

const searchInput = document.getElementById("search");
const itemList = document.getElementById("itemList");
const items = itemList.querySelectorAll("li");
const noResults = document.getElementById("noResults");

itemList.style.display = "none";

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();
  let matchFound = false;

  if (query === "") {
    itemList.style.display = "none";
    noResults.style.display = "none";
    return;
  }

  itemList.style.display = "block";

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();

    if (text.includes(query) && item.id !== "noResults") {
      item.style.display = "block";
      matchFound = true;
    } else {
      if (item.id !== "noResults") {
        item.style.display = "none";
      }
    }
  });

  noResults.style.display = matchFound ? "none" : "block";
});

window.addEventListener("load", () => {
  searchInput.value = "";
});

document.addEventListener("click", (event) => {
  const searchContainer = document.querySelector(".search-container");

  if (!searchContainer.contains(event.target)) {
    searchInput.value = "";
    itemList.style.display = "none";
    noResults.style.display = "none";
  }
});

document
  .querySelector(".search-container")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });

// Navbar Section

window.onload = function () {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  const navbar1 = document.getElementById("navbar1");
  const navbar2 = document.getElementById("navbar2");
  const marquee = document.querySelector(".marquee");
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
        marquee.classList.add("fade-in");
        scrollingText.classList.add("fade-in");
        setTimeout(() => {
          navbar1.classList.add("fade-out");
          navbar2.classList.add("fade-out");
          marquee.classList.add("fade-out");
          scrollingText.classList.add("fade-out");
        }, 5000);
      }, 100);
    }
  });
});
