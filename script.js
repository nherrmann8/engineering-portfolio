const images = [
  { src: "images/flosser1.jpg", subtitle: "quip Water Flosser" },
  { src: "images/shark1.jpg",   subtitle: "Shark EvoPower System" },
  { src: "images/stomach1.jpg", subtitle: "Artificial Stomach" },
  { src: "images/zio1.jpg",     subtitle: "Zio iRhythm" },
  { src: "images/ultra1.jpg",   subtitle: "quip Ultra" },
];

let currentIndex = 0;
const total = images.length;

/* DOM Elements */
const prevImg    = document.getElementById("prev-img");
const centerImg  = document.getElementById("center-img");
const nextImg    = document.getElementById("next-img");
const centerOverlay = document.getElementById("center-overlay");
const arrowLeft  = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const rangeInput = document.querySelector(".carousel-range");

/* Update the 3-image preview layout */
function updateCarousel(idx) {
  currentIndex = (idx + total) % total;
  
  // Indices for prev/center/next
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  // Update main (center) image
  centerImg.src = images[currentIndex].src;
  centerOverlay.textContent = images[currentIndex].subtitle || "Subtitle";

  // Update left (prev) image
  prevImg.src = images[prevIndex].src;

  // Update right (next) image
  nextImg.src = images[nextIndex].src;

  // Update range
  rangeInput.value = currentIndex;
}

/* Arrows */
arrowLeft.addEventListener("click", () => {
  updateCarousel(currentIndex - 1);
  resetAutoSlide();
});
arrowRight.addEventListener("click", () => {
  updateCarousel(currentIndex + 1);
  resetAutoSlide();
});

/* Click left or right image => becomes center */
prevImg.addEventListener("click", () => {
  updateCarousel(currentIndex - 1);
  resetAutoSlide();
});
nextImg.addEventListener("click", () => {
  updateCarousel(currentIndex + 1);
  resetAutoSlide();
});

/* Range input */
rangeInput.max = total - 1;
rangeInput.addEventListener("input", () => {
  updateCarousel(parseInt(rangeInput.value, 10));
  resetAutoSlide();
});

/* Auto-slide every 3 seconds */
let autoSlide = setInterval(() => {
  updateCarousel(currentIndex + 1);
}, 3000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    updateCarousel(currentIndex + 1);
  }, 3000);
}

/* Init */
updateCarousel(0);
