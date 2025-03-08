document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const totalSlides = slides.length;

    function showSlide(i) {
        index = (i + totalSlides) % totalSlides;
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener("click", () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(index + 1);
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 3000);
});
