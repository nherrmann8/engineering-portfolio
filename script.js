document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    const caption = document.getElementById("imageCaption");

    let currentIndex = 1; 
    const captions = [
        "Zio iRhythm",
        "quip Ultra",
        "quip Water Flosser",
        "Shark EvoPower",
        "Artificial Stomach"
    ];

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });
        caption.textContent = captions[currentIndex];

        // Adjust position to keep the active image centered
        const offset = images[currentIndex].offsetLeft - (track.offsetWidth / 2) + (images[currentIndex].offsetWidth / 2);
        track.style.transform = `translateX(-${offset}px)`;
    }

    function moveToNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function moveToPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    prevButton.addEventListener("click", moveToPrev);
    nextButton.addEventListener("click", moveToNext);

    updateCarousel();
});
