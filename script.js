document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".image-track");
    const images = document.querySelectorAll(".image-container img");

    // ✅ Duplicate images to ensure smooth infinite scrolling
    track.innerHTML += track.innerHTML;

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            track.style.animationPlayState = "paused"; // ✅ Stop scrolling on hover
        });

        img.addEventListener("mouseleave", () => {
            track.style.animationPlayState = "running"; // ✅ Resume scrolling when mouse leaves
        });
    });
});
