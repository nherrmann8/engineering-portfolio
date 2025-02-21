document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded Successfully");

    const track = document.querySelector(".image-track");
    const images = document.querySelectorAll(".image-container img");

    if (!track) {
        console.error("❌ ERROR: Carousel track not found!");
        return;
    }

    console.log("✅ Carousel Initialized");

    // ✅ Duplicate images to create an infinite loop
    track.innerHTML += track.innerHTML;

    let isPaused = false;

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            track.style.animationPlayState = "paused"; // ✅ Stop scrolling on hover
            isPaused = true;
        });

        img.addEventListener("mouseleave", () => {
            track.style.animationPlayState = "running"; // ✅ Resume scrolling when mouse leaves
            isPaused = false;
        });
    });

    // ✅ Ensure Scroll Completely Stops on Hover
    track.addEventListener("mouseenter", () => {
        track.style.animationPlayState = "paused";
    });

    track.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
    });

    // ✅ Continuous Scrolling Fix
    function resetScroll() {
        if (!isPaused) {
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            setTimeout(() => {
                track.style.transition = "transform 65s linear";
                track.style.transform = "translateX(-50%)";
            }, 50);
        }
    }

    track.addEventListener("transitionend", resetScroll);
});
