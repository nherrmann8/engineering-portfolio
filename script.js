document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    const caption = document.getElementById("imageCaption");

    let currentIndex = 2;
    const captions = [
        "quip Ultra",
        "quip Water Flosser",
        "Shark EvoPower",
        "Artificial Stomach",
        "Zio iRhythm"
    ];

    function updateCarousel() {
        const trackWidth = track.scrollWidth;
        const imageWidth = images[0].offsetWidth;
        const containerWidth = document.querySelector(".carousel-container").offsetWidth;
        
        // Center the active image
        const offset = (containerWidth / 2) - (imageWidth / 2);
        track.style.transform = `translateX(${offset - (currentIndex * imageWidth)}px)`;

        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });

        caption.textContent = captions[currentIndex];
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    // Ensure centering when the page loads
    window.addEventListener("resize", updateCarousel);
    updateCarousel();
});
