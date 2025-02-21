document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".image-track");
    const images = document.querySelectorAll(".image-container img");

    let animationPaused = false;

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            track.style.animationPlayState = "paused"; // ✅ Stop scrolling on hover
        });

        img.addEventListener("mouseleave", () => {
            track.style.animationPlayState = "running"; // ✅ Resume scrolling when mouse leaves
        });
    });
});
