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

<<<<<<< HEAD
=======
//  Featured Products Section

document.addEventListener("DOMContentLoaded", () => {
  const featuredProductsContainer = document.querySelector(".featured_products_container");
  const featuredProductNextButton = document.querySelector(".featured_products_next");
  const featuredProductPrevButton = document.querySelector(".featured_products_preview");

  let featuredProductsIndex = 0;
  const visibleSlides = 5; 
  const productElements = featuredProductsContainer.querySelectorAll(".product");
  const productCount = productElements.length;
  const slideWidth = productElements[0].offsetWidth + 15; 

  function updateSlider() {
    featuredProductsContainer.style.transform = `translateX(-${featuredProductsIndex * slideWidth}px)`;
  }

  featuredProductNextButton.addEventListener("click", () => {
    if (featuredProductsIndex < productCount - visibleSlides) {
      featuredProductsIndex++;
    } else {
      featuredProductsIndex = 0;
    }
    updateSlider();
  });

  featuredProductPrevButton.addEventListener("click", () => {
    if (featuredProductsIndex > 0) {
      featuredProductsIndex--;
    } else {
      featuredProductsIndex = productCount - visibleSlides;
    }
    updateSlider();
  });
});

           // Featured Brands Section

>>>>>>> a74a0ca (Initial commit)
document.addEventListener("DOMContentLoaded", () => {
    const featuredContainer = document.querySelector(".featured_brands_container");
    const featuredSlides = document.querySelectorAll(".featured_brands_slides");
    const nextButton = document.querySelector(".featured_brands_button_preview");
    const prevButton = document.querySelector(".featured_brands_button_next");

    let index = 0;
<<<<<<< HEAD
    const slideWidth = featuredSlides[1].offsetWidth; // No need to add padding separately
=======
    const slideWidth = featuredSlides[1].offsetWidth; 
>>>>>>> a74a0ca (Initial commit)
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

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const loptopContainer = document.querySelector(".loptop");
  const desktopContainer = document.querySelector(".desktop");

=======
// Loptop and Desktop Product

document.addEventListener("DOMContentLoaded", () => {
  const loptopContainer = document.querySelector(".loptop");
  const desktopContainer = document.querySelector(".desktop");
>>>>>>> a74a0ca (Initial commit)
  const loptopNextButton = document.querySelector(".loptop_next");
  const loptopPrevButton = document.querySelector(".loptop_preview");
  const desktopNextButton = document.querySelector(".desktop_next");
  const desktopPrevButton = document.querySelector(".desktop_preview");

  let indexLoptop = 0;
  let indexDesktop = 0;
<<<<<<< HEAD
  const loptopsVisibleSlides = 3;
  const desktopVisibleSlides = 3;

  window.addEventListener("resize", () => {
  loptopSlideWidth = loptopContainer.querySelector(".product").offsetWidth + 30;
  desktopSlideWidth = desktopContainer.querySelector(".product").offsetWidth + 30;
  updateLoptopCarousel();
  updateDesktopCarousel();
   });
=======
  const loptopsVisibleSlides = 2;
  const desktopVisibleSlides = 2;

  const loptopSlideWidth = loptopContainer.querySelector(".product").offsetWidth + 30;
  const desktopSlideWidth = desktopContainer.querySelector(".product").offsetWidth + 30;
>>>>>>> a74a0ca (Initial commit)

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
    } else {
    indexLoptop = loptoptotalSlides - loptopsVisibleSlides;
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
    } else {
<<<<<<< HEAD
    indexDesktop = loptoptotalSlides - loptopsVisibleSlides;
=======
    indexDesktop = desktoptotalSlides - desktopVisibleSlides;
>>>>>>> a74a0ca (Initial commit)
     }
     updateDesktopCarousel();
  });

<<<<<<< HEAD
  if (loptoptotalSlides <= loptopsVisibleSlides) {
  loptopNextButton.style.display = "none";
  loptopPrevButton.style.display = "none";
=======
    if (loptoptotalSlides <= loptopsVisibleSlides) {
    loptopNextButton.style.display = "none";
    loptopPrevButton.style.display = "none";
  }

  if (desktoptotalSlides <= desktopVisibleSlides) {
    desktopNextButton.style.display = "none";
    desktopPrevButton.style.display = "none";
>>>>>>> a74a0ca (Initial commit)
  }
});

    // Items Category Products

document.addEventListener("DOMContentLoaded", () => {
  const itemsCategoryContainer = document.querySelector(".items_category");
<<<<<<< HEAD

=======
>>>>>>> a74a0ca (Initial commit)
  const itemsCategoryNext = document.querySelector(".items_category_next");
  const itemsCategoryPreview = document.querySelector(".items_category_preview");


  let itemsCategory = 1;
<<<<<<< HEAD
  const itemsVisibleSlides = 6;


  const itemsSlideWidth = document.querySelector(".items_category_product").offsetWidth + 10;
=======
  const itemsVisibleSlides = 7;


  const itemsSlideWidth = document.querySelector(".items_category_product").offsetWidth + 34;
>>>>>>> a74a0ca (Initial commit)


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
<<<<<<< HEAD
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
=======
  const commentsContainer = document.querySelector(".comments_container");
  const commentsNextButton = document.querySelector(".comments_next");
  const commentsPreviewButton = document.querySelector(".comments_preview");

  let commentsIndex = 0;
  const commentsVisibleSlides = 3;

  const commentsSlideWidth = commentsContainer.querySelector(".comment").offsetWidth + 5;
  const commentstotalSlides = commentsContainer.querySelectorAll(".comment").length;

  function updateCommentsCarousel() {
    commentsContainer.style.transform = `translateX(-${commentsIndex * commentsSlideWidth}px)`;
  }

  commentsNextButton.addEventListener("click", () => {
    if (commentsIndex < commentstotalSlides - commentsVisibleSlides) {
      commentsIndex++;
    } else {
      commentsIndex = 0;
>>>>>>> a74a0ca (Initial commit)
    }
    updateCommentsCarousel();
  });

  commentsPreviewButton.addEventListener("click", () => {
<<<<<<< HEAD
    if (comments > 0) {
      comments--;
=======
    if (commentsIndex > 0) {
      commentsIndex--;
    } else{
      commentsIndex = commentstotalSlides - commentsVisibleSlides
>>>>>>> a74a0ca (Initial commit)
    }
    updateCommentsCarousel();
  });


});


  