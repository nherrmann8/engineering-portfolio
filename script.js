document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "images/ultra1.jpg", name: "quip Ultra" },
        { src: "images/flosser1.jpg", name: "quip Water Flosser" },
        { src: "images/shark1.jpg", name: "Shark EvoPower System" },
        { src: "images/stomach1.jpg", name: "Artificial Stomach" },
        { src: "images/zio1.jpg", name: "iRhythm Zio" }
    ];

    let currentIndex = 0; // Always start with "quip Ultra"

    const carouselContainer = document.querySelector(".carousel-container");
    const projectTitle = document.getElementById("project-title");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function updateCarousel() {
        carouselContainer.innerHTML = "";

        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        const nextIndex = (currentIndex + 1) % images.length;

        const prevImage = document.createElement("img");
        prevImage.src = images[prevIndex].src;
        prevImage.alt = images[prevIndex].name;
        prevImage.classList.add("carousel-image", "side-image");

        const currentImage = document.createElement("img");
        currentImage.src = images[currentIndex].src;
        currentImage.alt = images[currentIndex].name;
        currentImage.classList.add("carousel-image", "active");

        const nextImage = document.createElement("img");
        nextImage.src = images[nextIndex].src;
        nextImage.alt = images[nextIndex].name;
        nextImage.classList.add("carousel-image", "side-image");

        carouselContainer.appendChild(prevImage);
        carouselContainer.appendChild(currentImage);
        carouselContainer.appendChild(nextImage);

        projectTitle.textContent = images[currentIndex].name;
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

    updateCarousel(); // Initialize carousel on page load
});
