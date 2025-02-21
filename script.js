document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded Successfully");

    const track = document.querySelector(".carousel-track");

    if (!track) {
        console.error("❌ ERROR: Carousel track not found!");
        return;
    }

    let clone = track.innerHTML;
    track.innerHTML += clone; // ✅ Infinite Looping

    document.querySelectorAll(".carousel-item img").forEach(img => {
        img.addEventListener("mouseenter", () => {
            track.style.animationPlayState = "paused";
        });
        img.addEventListener("mouseleave", () => {
            track.style.animationPlayState = "running";
        });
    });
});
