document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    const caption = document.getElementById("imageCaption");

    let currentIndex = 0;
    const captions = [
        "quip Ultra",
        "quip Water Flosser",
        "Shark EvoPower",
        "Artificial Stomach",
        "Zio iRhythm"
    ];

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("active");
            if (index === currentIndex) {
                item.classList.add("active");
            }
        });

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        caption.textContent = captions[currentIndex];
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    updateCarousel();
});
