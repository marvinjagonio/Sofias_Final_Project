document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const visibleSlides = 3; 
    const totalSlides = slides.length;
    if (!slides.length) return;
    const slideWidth = slides[0].offsetWidth + 10; 

    function updateCarousel() {
        sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (index < totalSlides - visibleSlides) {
            index++;
        } else {
            index = 0; 
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = totalSlides - visibleSlides; 
        }
        updateCarousel();
    });

    
    setInterval(() => {
        nextButton.click();
    }, 3000);

    
 });


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


document.addEventListener("DOMContentLoaded", () => {
    const featuredContainer = document.querySelector(".featured_brands_container");
    const featuredSlides = document.querySelectorAll(".featured_brands_slides");
    const nextButton = document.querySelector(".featured_brands_button_preview");
    const prevButton = document.querySelector(".featured_brands_button_next");

    let index = 0;

    const slideWidth = featuredSlides[1].offsetWidth; 

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
    const slideWidth = thirdBottomSlides[1].offsetWidth; 
    const totalSlides = thirdBottomSlides.length;

     function updateCarousel() {
        thirdBottomContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (index < totalSlides - 1) {
            index++;
        } else {
            
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            
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
  const loptopsVisibleSlides = 2;
  const desktopVisibleSlides = 2;

  const loptoptotalSlides = loptopContainer.querySelectorAll(".product").length;
  const desktoptotalSlides = desktopContainer.querySelectorAll(".product").length;

  let loptopSlideWidth = 0;
  let desktopSlideWidth = 0;

  function calculateSlideWidths() {
    loptopSlideWidth = loptopContainer.querySelector(".product").offsetWidth + 30;
    desktopSlideWidth = desktopContainer.querySelector(".product").offsetWidth + 30;
  }

  function updateLoptopCarousel() {
    loptopContainer.style.transform = `translateX(-${indexLoptop * loptopSlideWidth}px)`;
  }

  function updateDesktopCarousel() {
    desktopContainer.style.transform = `translateX(-${indexDesktop * desktopSlideWidth}px)`;
  }

  // Initial setup
  calculateSlideWidths();
  updateLoptopCarousel();
  updateDesktopCarousel();

  // Responsive
  window.addEventListener("resize", () => {
    calculateSlideWidths();
    updateLoptopCarousel();
    updateDesktopCarousel();
  });


   // Button functionality
  loptopNextButton.addEventListener("click", () => {
    indexLoptop = (indexLoptop < loptoptotalSlides - loptopsVisibleSlides) ? indexLoptop + 1 : 0;
    updateLoptopCarousel();
  });

  loptopPrevButton.addEventListener("click", () => {
    indexLoptop = (indexLoptop > 0) ? indexLoptop - 1 : loptoptotalSlides - loptopsVisibleSlides;
    updateLoptopCarousel();
  });

  desktopNextButton.addEventListener("click", () => {
    indexDesktop = (indexDesktop < desktoptotalSlides - desktopVisibleSlides) ? indexDesktop + 1 : 0;
    updateDesktopCarousel();
  });

  desktopPrevButton.addEventListener("click", () => {
    indexDesktop = (indexDesktop > 0) ? indexDesktop - 1 : desktoptotalSlides - desktopVisibleSlides;
    updateDesktopCarousel();
  });


});



    // Items Category Products

document.addEventListener("DOMContentLoaded", () => {
  const itemsCategoryContainer = document.querySelector(".items_category");
  const itemsCategoryNext = document.querySelector(".items_category_next");
  const itemsCategoryPreview = document.querySelector(".items_category_preview");

  let itemsCategory = 1;
  const itemsVisibleSlides = window.innerWidth <= 575.98 ? 1 : 7;

  const itemsSlideWidth = document.querySelector(".items_category_product").offsetWidth + 20;
  const itemstotalSlides = itemsCategoryContainer.querySelectorAll(".items_category_product").length;

    function updatesItemCategoryCarousel() {
    itemsCategoryContainer.style.transform = `translateX(-${itemsCategory * itemsSlideWidth}px)`;
  }

  itemsCategoryNext.addEventListener("click", () => {
    if (itemsCategory < itemstotalSlides - itemsVisibleSlides) {
      itemsCategory++;
    } else {
      itemsCategory = 0;
    }
    updatesItemCategoryCarousel();
   
  });

  itemsCategoryPreview.addEventListener("click", () => {
    if (itemsCategory > 0) {
      itemsCategory--;
    }else{
       itemsCategory = 0;
    }
    updatesItemCategoryCarousel();
  });

      window.addEventListener("resize", () => {
    commentsVisibleSlides = window.innerWidth <= 575.98 ? 1 : 3;
    updateCommentsCarousel();
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const commentsContainer = document.querySelector(".comments_container");
  const commentsNextButton = document.querySelector(".comments_next");
  const commentsPreviewButton = document.querySelector(".comments_preview");

  let commentsIndex = 0;
  const commentsVisibleSlides = window.innerWidth <= 575.98 ? 1 : 13;

  const commentsSlideWidth = commentsContainer.querySelector(".comment").offsetWidth + 10;
  const commentstotalSlides = commentsContainer.querySelectorAll(".comment").length;

  function updateCommentsCarousel() {
    commentsContainer.style.transform = `translateX(-${commentsIndex * commentsSlideWidth}px)`;
  }

  commentsNextButton.addEventListener("click", () => {
    if (commentsIndex < commentstotalSlides - commentsVisibleSlides) {
      commentsIndex++;
    } else {
      commentsIndex = 0;

    }
    updateCommentsCarousel();

      window.addEventListener("resize", () => {
    commentsVisibleSlides = window.innerWidth <= 575.98 ? 1 : 1;
    updateCommentsCarousel();
  });
  });


 

  commentsPreviewButton.addEventListener("click", () => {
    if (commentsIndex > 0) {
      commentsIndex--;
    } else{ 
      commentsIndex = 0;
    }
    updateCommentsCarousel();
   

  });

});

document.addEventListener("DOMContentLoaded", () => {
  const newArrivalsContainer = document.querySelector(".new_arrivals_container");
  const topSellersContainer = document.querySelector(".top_sellers_container");
  const newArrivalsNextButton = document.querySelector(".new_arrivals_next");
  const newArrivalsPreviewButton = document.querySelector(".new_arrivals_preview");
  const topSellersNextButton = document.querySelector(".top_sellers_next");
  const topSellersPreviewButton = document.querySelector(".top_sellers_preview");

  let newArrivalsIndex = 0;
  let topSellersIndex = 0;
  const newArrivalsVisibleSlides = 5;
  const topSellersVisibleSlides = 5;

  const newArrivalsSlideWidth = newArrivalsContainer.querySelector(".product").offsetWidth + 10;
  const newArrivalsTotalSlides = newArrivalsContainer.querySelectorAll(".product").length;

  const topSellersSlideWidth = topSellersContainer.querySelector(".product").offsetWidth + 10;
  const topSellersTotalSlides = topSellersContainer.querySelectorAll(".product").length;

  function updateNewArrivalsCarousel() {
    newArrivalsContainer.style.transform = `translateX(-${newArrivalsIndex * newArrivalsSlideWidth}px)`;
  }

  function updateTopSellersCarousel() {
    topSellersContainer.style.transform = `translateX(-${topSellersIndex * topSellersSlideWidth}px)`;
  }

  newArrivalsNextButton.addEventListener("click", () => {
    if (newArrivalsIndex < newArrivalsTotalSlides - newArrivalsVisibleSlides) {
      newArrivalsIndex++;
    } else {
      newArrivalsIndex = 0;
    }
    updateNewArrivalsCarousel();
  });

  newArrivalsPreviewButton.addEventListener("click", () => {
    if (newArrivalsIndex > 0) {
      newArrivalsIndex--;
    } else {
      newArrivalsIndex = newArrivalsTotalSlides - newArrivalsVisibleSlides;
    }
    updateNewArrivalsCarousel();
  });

  topSellersNextButton.addEventListener("click", () => {
    if (topSellersIndex < topSellersTotalSlides - topSellersVisibleSlides) {
      topSellersIndex++;
    } else {
      topSellersIndex = 0;
    }
    updateTopSellersCarousel();
  });

  topSellersPreviewButton.addEventListener("click", () => {
    if (topSellersIndex > 0) {
      topSellersIndex--;
    } else {
      topSellersIndex = topSellersTotalSlides - topSellersVisibleSlides;
    }
    updateTopSellersCarousel();
  });
});


  






  