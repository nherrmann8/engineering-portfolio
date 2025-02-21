document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".image-track");
    const images = document.querySelectorAll(".image-container img");

    // ✅ Restored Continuous Scrolling Functionality
    track.innerHTML += track.innerHTML;

    let isPaused = false;

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            track.style.animationPlayState = "paused";
            isPaused = true;
        });

        img.addEventListener("mouseleave", () => {
            track.style.animationPlayState = "running";
            isPaused = false;
        });
    });

    function resetScroll() {
        if (!isPaused) {
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            setTimeout(() => {
                track.style.transition = "transform 53.46s linear";
                track.style.transform = "translateX(-50%)";
            }, 50);
        }
    }

    track.addEventListener("transitionend", resetScroll);
});
