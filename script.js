document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded Successfully");

    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");

    if (!track || items.length === 0) {
        console.error("❌ ERROR: Carousel track or items not found!");
        return;
    }

    console.log("✅ Restored Original Carousel Functionality");

    // Clone first few images and add them to the end to create a seamless loop
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjusted for correct speed

    function moveCarousel() {
        scrollAmount -= scrollSpeed;
        track.style.transform = `translateX(${scrollAmount}px)`;

        if (Math.abs(scrollAmount) >= items[0].offsetWidth * items.length) {
            scrollAmount = 0;
            track.style.transition = "none";
            track.style.transform = `translateX(0px)`;
            setTimeout(() => {
                track.style.transition = "transform 0.5s linear";
            }, 50);
        }

        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
});
