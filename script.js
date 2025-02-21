document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded Successfully");

    const track = document.querySelector(".carousel-track");

    if (!track) {
        console.error("❌ ERROR: Carousel track not found!");
        return;
    }

    console.log("✅ Carousel Initialized");

    let isPaused = false;

    track.addEventListener("mouseenter", () => {
        track.style.animationPlayState = "paused";
        isPaused = true;
    });

    track.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
        isPaused = false;
    });

    function resetScroll() {
        if (!isPaused) {
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            setTimeout(() => {
                track.style.transition = "transform 60s linear";
                track.style.transform = "translateX(-50%)";
            }, 50);
        }
    }

    track.addEventListener("transitionend", resetScroll);
});
