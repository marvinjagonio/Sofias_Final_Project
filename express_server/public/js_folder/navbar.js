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

const backToTop = document.getElementById("backToTop");
const navbar1 = document.getElementById("navbar1");
const navbar2 = document.getElementById("navbar2");
const marquee = document.querySelector(".marquee");

// Show button when scrolling down
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  // Scroll smoothly to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Clear the previous timer
  clearTimeout(timer);

  // Remove old animation classes so they can replay
  navbar1.classList.remove("fade-in", "fade-out");
  navbar2.classList.remove("fade-in", "fade-out");
  marquee.classList.remove("fade-in", "fade-out");
  scrollingText.classList.remove("fade-in", "fade-out");

  // Restart the animation
  void navbar1.offsetWidth;

  timer = setTimeout(() => {
    navbar1.classList.add("fade-in");
    navbar2.classList.add("fade-in");
    marquee.classList.add("fade-in");
    scrollingText.classList.add("fade-in");

    // Fade out after 5 seconds
    setTimeout(() => {
      navbar1.classList.remove("fade-in");
      navbar2.classList.remove("fade-in");
      marquee.classList.remove("fade-in");
      scrollingText.classList.remove("fade-in");

      navbar1.classList.add("fade-out");
      navbar2.classList.add("fade-out");
      marquee.classList.add("fade-out");
      scrollingText.classList.add("fade-out");
    }, 100);
  }, 1000);
});

// ===== ON SALE NOW COUNTDOWN ===== //

// Set your sale ending date and time
const saleEndDate = new Date("2026-12-31T23:59:59+08:00").getTime();

const saleCountdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = saleEndDate - now;

  if (distance <= 0) {
    clearInterval(saleCountdown);

    document.querySelector(".countdown_timer").innerHTML = `
      <h2>SALE HAS ENDED!</h2>
    `;

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("sale_days").textContent = String(days).padStart(
    2,
    "0",
  );

  document.getElementById("sale_hours").textContent = String(hours).padStart(
    2,
    "0",
  );

  document.getElementById("sale_minutes").textContent = String(
    minutes,
  ).padStart(2, "0");

  document.getElementById("sale_seconds").textContent = String(
    seconds,
  ).padStart(2, "0");
}, 1000);
