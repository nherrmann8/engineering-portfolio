document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    const caption = document.getElementById("imageCaption");

    let currentIndex = 0;
    const order = [
        "images/ultra1.jpg",
        "images/flosser1.jpg",
        "images/shark1.jpg",
        "images/stomach1.jpg",
        "images/zio1.jpg"
    ];
    const captions = [
        "quip Ultra",
        "quip Water Flosser",
        "Shark EvoPower",
        "Artificial Stomach",
        "Zio iRhythm"
    ];

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 50}%)`;
        images.forEach((img, index) => {
            img.classList.remove("active");
            if (index === currentIndex) {
                img.classList.add("active");
            }
        });
        caption.textContent = captions[currentIndex];

        // Ensure continuous wrap-around behavior
        setTimeout(() => {
            if (currentIndex === images.length - 1) {
                currentIndex = 0;
                track.style.transition = "none";
                track.style.transform = `translateX(0)`;
            } else if (currentIndex === 0) {
                currentIndex = images.length - 1;
                track.style.transition = "none";
                track.style.transform = `translateX(-${(images.length - 1) * 50}%)`;
            }
        }, 500);
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel();
});
