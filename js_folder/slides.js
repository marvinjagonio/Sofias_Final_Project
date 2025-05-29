document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const visibleSlides = 3; // Adjust to show more or fewer slides
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + 10; // Includes gap

    function updateCarousel() {
        sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (index < totalSlides - visibleSlides) {
            index++;
        } else {
            index = 0; // Loop back to the start
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = totalSlides - visibleSlides; // Loop to the end
        }
        updateCarousel();
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        nextButton.click();
    }, 3000);

    
 });

document.addEventListener("DOMContentLoaded", () => {
    const featuredContainer = document.querySelector(".featured_brands_container");
    const featuredSlides = document.querySelectorAll(".featured_brands_slides");
    const nextButton = document.querySelector(".featured_brands_button_preview");
    const prevButton = document.querySelector(".featured_brands_button_next");

    let index = 0;
    const slideWidth = featuredSlides[1].offsetWidth; // No need to add padding separately
    const totalSlides = featuredSlides.length;

    function updateSlider() {
        featuredContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (index < totalSlides - 1) {
            index++;
        } else {
           index = 0;
        }
        updateSlider();
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            
        }
        updateSlider();
    });


});

document.addEventListener("DOMContentLoaded", () => {
    const thirdBottomContainer = document.querySelector(".third_bottom_section_container");
    const thirdBottomSlides = document.querySelectorAll(".third_bottom_section_slides");
    const nextButton = document.querySelector(".third_bottom_button_right");
    const prevButton = document.querySelector(".third_bottom_button_left");

    let index = 0;
    const slideWidth = thirdBottomSlides[1].offsetWidth; // No need to add padding separately
    const totalSlides = thirdBottomSlides.length;

     function updateCarousel() {
        thirdBottomContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (index < totalSlides - 1) {
            index++;
        } else {
            // index = 0; // Loop back to the start
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            // index = totalSlides - 1; // Loop to the end
        }
        updateCarousel();
    });

   

});

document.addEventListener("DOMContentLoaded", () => {
  const loptopContainer = document.querySelector(".loptop");
  const desktopContainer = document.querySelector(".desktop");

  const loptopNextButton = document.querySelector(".loptop_next");
  const loptopPrevButton = document.querySelector(".loptop_preview");
  const desktopNextButton = document.querySelector(".desktop_next");
  const desktopPrevButton = document.querySelector(".desktop_preview");

  let indexLoptop = 0;
  let indexDesktop = 0;
  const loptopsVisibleSlides = 3;
  const desktopVisibleSlides = 3;

  const loptopSlideWidth = loptopContainer.querySelector(".product").offsetWidth + 30;
  const desktopSlideWidth = desktopContainer.querySelector(".product").offsetWidth + 30;

  const loptoptotalSlides = loptopContainer.querySelectorAll(".product").length;
  const desktoptotalSlides = desktopContainer.querySelectorAll(".product").length;

  function updateLoptopCarousel() {
    loptopContainer.style.transform = `translateX(-${indexLoptop * loptopSlideWidth}px)`;
  }

  function updateDesktopCarousel() {
    desktopContainer.style.transform = `translateX(-${indexDesktop * desktopSlideWidth}px)`;
  }

  loptopNextButton.addEventListener("click", () => {
    if (indexLoptop < loptoptotalSlides - loptopsVisibleSlides) {
      indexLoptop++;
    } else {
      indexLoptop = 0;
    }
    updateLoptopCarousel();
  });

  loptopPrevButton.addEventListener("click", () => {
    if (indexLoptop > 0) {
      indexLoptop--;
    }
    updateLoptopCarousel();
  });

  desktopNextButton.addEventListener("click", () => {
    if (indexDesktop < desktoptotalSlides - desktopVisibleSlides) {
      indexDesktop++;
    } else {
      indexDesktop = 0;
    }
    updateDesktopCarousel();
  });

  desktopPrevButton.addEventListener("click", () => {
    if (indexDesktop > 0) {
      indexDesktop--;
    }
    updateDesktopCarousel();
  });
});

    // Items Category Products

document.addEventListener("DOMContentLoaded", () => {
  const itemsCategoryContainer = document.querySelector(".items_category");

  const itemsCategoryNext = document.querySelector(".items_category_next");
  const itemsCategoryPreview = document.querySelector(".items_category_preview");


  let itemsCategory = 1;
  const itemsVisibleSlides = 6;


  const itemsSlideWidth = document.querySelector(".items_category_product").offsetWidth + 10;


  const itemstotalSlides = itemsCategoryContainer.querySelectorAll(".items_category_product").length;

  function updateItemsCarousel() {
    itemsCategoryContainer.style.transform = `translateX(-${itemsCategory * itemsSlideWidth}px)`;
  }

  itemsCategoryNext.addEventListener("click", () => {
    if (itemsCategory < itemstotalSlides - itemsVisibleSlides) {
      itemsCategory++;
    } else {
      itemsCategory = 0;
    }
    updateItemsCarousel();
  });

  itemsCategoryPreview.addEventListener("click", () => {
    if (itemsCategory > 0) {
      itemsCategory--;
    }
    updateItemsCarousel();
  });


});

document.addEventListener("DOMContentLoaded", () => {
  const commentsContainer = document.querySelector(".comments_flex");

  const commentsNextButton = document.querySelector(".comments_next_button");
  const commentsPreviewButton = document.querySelector(".comments_preview_button");


  let comments = 0;
  const commentsVisibleSlides = 4;


  const commentsSlideWidth = document.querySelector(".comment").offsetWidth + 10;


  const commentstotalSlides = commentsContainer.querySelectorAll(".comment").length;

  function updateCommentsCarousel() {
    commentsContainer.style.transform = `translateX(-${comments * commentsSlideWidth}px)`;
  }

  commentsNextButton.addEventListener("click", () => {
    if (comments < commentstotalSlides - commentsVisibleSlides) {
      comments++;
    } else {
      comments = 0;
    }
    updateCommentsCarousel();
  });

  commentsPreviewButton.addEventListener("click", () => {
    if (comments > 0) {
      comments--;
    }
    updateCommentsCarousel();
  });


});


  