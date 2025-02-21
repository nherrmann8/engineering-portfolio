document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    const title = document.getElementById("project-title");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    const projectNames = [
        "quip Ultra",
        "quip Water Flosser",
        "Shark EvoPower System",
        "Artificial Stomach",
        "iRhythm Zio"
    ];

    let currentIndex = 2; // Start with the third image (Shark EvoPower System)

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.remove("active");
            img.style.opacity = "0.5";
            img.style.width = "400px";
            img.style.height = "300px";
        });

        images[currentIndex].classList.add("active");
        images[currentIndex].style.opacity = "1";
        images[currentIndex].style.width = "500px";
        images[currentIndex].style.height = "375px";

        title.textContent = projectNames[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    setInterval(nextImage, 3000); // Auto-cycle every 3 seconds
});
