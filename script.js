document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".image-track");
    const images = document.querySelectorAll(".image-container img");

    // ✅ Duplicate images to ensure seamless infinite scrolling
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

    // ✅ Ensure Smooth Continuous Loop
    function resetScroll() {
        if (!isPaused) {
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            setTimeout(() => {
                track.style.transition = "transform 18.75s linear";
                track.style.transform = "translateX(-50%)";
            }, 50);
        }
    }

    track.addEventListener("transitionend", resetScroll);
});
