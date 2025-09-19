window.addEventListener("load", function () {
  const comments_swiper = new Swiper(".comments_swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".comments_next",
      prevEl: ".comments_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    on: {
      fromEdge: function () {
        document
          .querySelector(".comments_prev")
          .classList.remove("swiper-button-disabled");
        document
          .querySelector(".comments_next")
          .classList.remove("swiper-button-disabled");
      },
    },
  });
});

window.addEventListener("load", function () {
  const new_arrivals_swiper = new Swiper(".new_arrivals_swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: ".new-arrivals-next",
      prevEl: ".new-arrivals-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
    on: {
      fromEdge: function () {
        document
          .querySelector(".new-arrivals-prev")
          .classList.remove("swiper-button-disabled");
        document
          .querySelector(".new-arrivals-next")
          .classList.remove("swiper-button-disabled");
      },
    },
  });
});

window.addEventListener("load", function () {
  const top_sellers_swiper = new Swiper(".top_sellers_swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: ".top-sellers-next",
      prevEl: ".top-sellers-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
    on: {
      fromEdge: function () {
        document
          .querySelector(".top-sellers-prev")
          .classList.remove("swiper-button-disabled");
        document
          .querySelector(".top-sellers-next")
          .classList.remove("swiper-button-disabled");
      },
    },
  });
});

window.addEventListener("load", function () {
  const featured_products_swiper = new Swiper(".featured_products_swiper", {
    loop: false,

    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".featured_products_next",
      prevEl: ".featured_products_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
    on: {
      fromEdge: function () {
        document
          .querySelector(".featured_products_prev")
          .classList.remove("swiper-button-disabled");
        document
          .querySelector(".featured_products_next")
          .classList.remove("swiper-button-disabled");
      },
    },
  });
});

window.addEventListener("load", function () {
  // Loptop Swiper
  const loptopSwiper = new Swiper(".laptop_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".laptop_next",
      prevEl: ".laptop_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  // Desktop Swiper
  const desktopSwiper = new Swiper(".desktop_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".desktop_next",
      prevEl: ".desktop_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
});

window.addEventListener("load", function () {
  const itemsCathegorySwiper = new Swiper(".items_cathegory_swiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: ".items_cathegory_next",
      prevEl: ".items_cathegory_prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
});
