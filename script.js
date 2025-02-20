/* 5 images (4:3 ratio) with optional subtitles */
const images = [
  { src: "images/flosser1.jpg", subtitle: "quip Water Flosser" },
  { src: "images/shark1.jpg",   subtitle: "Shark EvoPower System" },
  { src: "images/stomach1.jpg", subtitle: "Artificial Stomach" },
  { src: "images/zio1.jpg",     subtitle: "Zio iRhythm" },
  { src: "images/ultra1.jpg",   subtitle: "quip Ultra" }
];

let currentIndex = 0;
const total = images.length;

/* DOM Refs */
const prevImg       = document.getElementById("prev-img");
const centerImg     = document.getElementById("center-img");
const nextImg       = document.getElementById("next-img");
const centerOverlay = document.getElementById("center-overlay");
const arrowLeft     = document.querySelector(".arrow-left");
const arrowRight    = document.querySelector(".arrow-right");

/* Update the 3-image preview */
function updateCarousel(idx) {
  currentIndex = (idx + total) % total;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  // Set center
  centerImg.src = images[currentIndex].src;
  centerOverlay.textContent = images[currentIndex].subtitle || "";
  // Left
  prevImg.src = images[prevIndex].src;
  // Right
  nextImg.src = images[nextIndex].src;
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

/* Clicking side images also navigates */
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

/* Init */
updateCarousel(0);
