document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded Successfully");

    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");

    if (!track) {
        console.error("❌ ERROR: Carousel track not found!");
        return;
    }

    console.log("✅ Carousel Initialized");

    function loopCarousel() {
        track.appendChild(track.firstElementChild.cloneNode(true)); // Duplicate first image at the end
        track.removeChild(track.firstElementChild); // Remove original first image
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        setTimeout(() => {
            track.style.transition = "transform 15s linear";
            track.style.transform = "translateX(-100%)";
        }, 50);
    }

    track.addEventListener("transitionend", loopCarousel);
});
