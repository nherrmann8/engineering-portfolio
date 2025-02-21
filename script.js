document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded Successfully");

    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");

    if (!track) {
        console.error("❌ ERROR: Carousel track not found!");
        return;
    }

    console.log("✅ Carousel Initialized");

    // Duplicate first images to create an infinite loop effect
    items.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });

    // Hover effect: Stop scrolling and show subtitle
    const images = document.querySelectorAll(".carousel-item img");

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            track.style.animationPlayState = "paused";
            img.nextElementSibling.style.opacity = "1"; // Show subtitle
        });

        img.addEventListener("mouseleave", () => {
            track.style.animationPlayState = "running";
            img.nextElementSibling.style.opacity = "0"; // Hide subtitle
        });
    });
});
