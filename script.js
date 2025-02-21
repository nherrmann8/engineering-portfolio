let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const title = document.getElementById("carousel-title");

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove("active");
        item.style.opacity = "0.5";
        item.style.width = "200px";
        item.style.display = "none";
    });
    
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;

    items[prevIndex].style.display = "block";
    items[prevIndex].style.opacity = "0.5";
    items[prevIndex].style.width = "200px";

    items[currentIndex].classList.add("active");
    items[currentIndex].style.display = "block";
    items[currentIndex].style.opacity = "1";
    items[currentIndex].style.width = "300px";

    items[nextIndex].style.display = "block";
    items[nextIndex].style.opacity = "0.5";
    items[nextIndex].style.width = "200px";

    title.textContent = items[currentIndex].dataset.title;
}

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}, 3000);

window.onload = () => {
    updateCarousel();
};
