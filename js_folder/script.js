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

function increase() {
    let qty = document.getElementById("quantity");
    if (parseInt(qty.value) < 10) {
        qty.value = parseInt(qty.value) + 1;
    }
}

function decrease() {
    let qty = document.getElementById("quantity");
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
}
