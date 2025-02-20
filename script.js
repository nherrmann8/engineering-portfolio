/* 5 images with optional subtitles */
const images = [
  { src: "images/flosser1.jpg", subtitle: "quip Water Flosser" },
  { src: "images/shark1.jpg",   subtitle: "Shark EvoPower System" },
  { src: "images/stomach1.jpg", subtitle: "Artificial Stomach" },
  { src: "images/zio1.jpg",     subtitle: "Zio iRhythm" },
  { src: "images/ultra1.jpg",   subtitle: "quip Ultra" }
];

let currentIndex = 0;
const total = images.length;

/* DOM elements */
const prevImg        = document.getElementById("prev-img");
const centerImg      = document.getElementById("center-img");
const nextImg        = document.getElementById("next-img");
const centerOverlay  = document.getElementById("center-overlay");
const arrowLeft      = document.querySelector(".arrow-left");
const arrowRight     = document.querySelector(".arrow-right");

/* Update the 3-image preview */
function updateCarousel(idx) {
  currentIndex = (idx + total) % total;

  const prevIndex   = (currentIndex - 1 + total) % total;
  const nextIndex   = (currentIndex + 1) % total;

  // Assign images
  centerImg.src     = images[currentIndex].src;
  centerOverlay.textContent = images[currentIndex].subtitle || "";
  prevImg.src       = images[prevIndex].src;
  nextImg.src       = images[nextIndex].src;
}

/* Navigation */
function goLeft() {
  updateCarousel(currentIndex - 1);
  resetAutoSlide();
}
function goRight() {
  updateCarousel(currentIndex + 1);
  resetAutoSlide();
}
arrowLeft.addEventListener("click", goLeft);
arrowRight.addEventListener("click", goRight);
prevImg.addEventListener("click", goLeft);
nextImg.addEventListener("click", goRight);

/* Auto-slide every 3s */
let autoSlide = setInterval(() => {
  updateCarousel(currentIndex + 1);
}, 3000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    updateCarousel(currentIndex + 1);
  }, 3000);
}

/* Initialize */
updateCarousel(0);
