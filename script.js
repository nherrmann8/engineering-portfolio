document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    const caption = document.getElementById("imageCaption");

    let currentIndex = 1; // "quip Ultra" is the first centered image
    const captions = [
        "Zio iRhythm",
        "quip Ultra",
        "quip Water Flosser",
        "Shark EvoPower",
        "Artificial Stomach",
        "Zio iRhythm",
        "quip Ultra",
        "quip Water Flosser"
    ];

    function updateCarousel() {
        const imageWidth = images[0].offsetWidth + 20; 
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });

        caption.textContent = captions[currentIndex];
    }

    function moveToNext() {
        if (currentIndex >= images.length - 2) {
            track.style.transition = "none";
            currentIndex = 1;
            track.style.transform = `translateX(-${currentIndex * (images[0].offsetWidth + 20)}px)`;
        } else {
            currentIndex++;
        }
        setTimeout(updateCarousel, 50);
    }

    function moveToPrev() {
        if (currentIndex <= 0) {
            track.style.transition = "none";
            currentIndex = images.length - 3;
            track.style.transform = `translateX(-${currentIndex * (images[0].offsetWidth + 20)}px)`;
        } else {
            currentIndex--;
        }
        setTimeout(updateCarousel, 50);
    }

    prevButton.addEventListener("click", moveToPrev);
    nextButton.addEventListener("click", moveToNext);

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
});
