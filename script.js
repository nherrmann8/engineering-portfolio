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
    const scrollSpeed = 0.5;
    let isPaused = false;

    function moveCarousel() {
        if (!isPaused) {
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
        }

        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();

    // ✅ Stop scrolling on hover
    document.querySelectorAll(".carousel-item img").forEach(img => {
        img.addEventListener("mouseenter", () => {
            isPaused = true;
        });
        img.addEventListener("mouseleave", () => {
            isPaused = false;
        });
    });

    // ✅ Dropdown menu fix for mobile
    document.querySelectorAll(".dropdown > a").forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault();
            let menu = this.nextElementSibling;
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
    });

    // ✅ Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.style.display = "none";
            });
        }
    });

});
