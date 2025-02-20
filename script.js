/* 5 images w/ subtitles */
const images = [
  { src: "images/flosser1.jpg", subtitle: "quip Water Flosser" },
  { src: "images/shark1.jpg",   subtitle: "Shark EvoPower System" },
  { src: "images/stomach1.jpg", subtitle: "Artificial Stomach" },
  { src: "images/zio1.jpg",     subtitle: "Zio iRhythm" },
  { src: "images/ultra1.jpg",   subtitle: "quip Ultra" }
];

let currentIndex = 0;
const total = images.length;

/* DOM */
const prevImg    = document.getElementById("prev-img");
const centerImg  = document.getElementById("center-img");
const nextImg    = document.getElementById("next-img");
const centerOverlay = document.getElementById("center-overlay");
const arrowLeft  = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

/* Update 3-image layout + overlay subtitle */
function updateCarousel(idx) {
  currentIndex = (idx + total) % total;
  
  // indexes for left & right
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  // main (center)
  centerImg.src = images[currentIndex].src;
  centerOverlay.textContent = images[currentIndex].subtitle || "";
  // left (prev)
  prevImg.src = images[prevIndex].src;
  // right (next)
  nextImg.src = images[nextIndex].src;
}

/* Click events */
arrowLeft.addEventListener("click", () => {
  updateCarousel(currentIndex - 1);
  resetAutoSlide();
});
arrowRight.addEventListener("click", () => {
  updateCarousel(currentIndex + 1);
  resetAutoSlide();
});
prevImg.addEventListener("click", () => {
  updateCarousel(currentIndex - 1);
  resetAutoSlide();
});
nextImg.addEventListener("click", () => {
  updateCarousel(currentIndex + 1);
  resetAutoSlide();
});

/* Auto-slide */
let autoSlide = setInterval(() => {
  updateCarousel(currentIndex + 1);
}, 3000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    updateCarousel(currentIndex + 1);
  }, 3000);
}

/* Initial */
updateCarousel(0);
