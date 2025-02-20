const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".slide"));
const rangeInput = document.querySelector(".carousel-range");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let currentIndex = 0;
const totalSlides = slides.length;

// Move to a specific slide
function goToSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
  rangeInput.value = currentIndex;
  updateSliderFill(currentIndex);
}

// Update slider fill background
function updateSliderFill(val) {
  const percent = (val / (rangeInput.max - rangeInput.min)) * 100; 
  rangeInput.style.background = 
    `linear-gradient(to right,
       #eee 0%,
       #eee ${percent}%,
       #999 ${percent}%,
       #999 100%)`;
}

// Arrows: left = -1, right = +1
arrowLeft.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
  resetAutoSlide();
});
arrowRight.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
  resetAutoSlide();
});

// Slider input
rangeInput.addEventListener("input", () => {
  const val = parseInt(rangeInput.value, 10);
  goToSlide(val);
  resetAutoSlide();
});

// Auto-slide every 3s
let autoSlideInterval = setInterval(() => {
  goToSlide(currentIndex + 1);
}, 3000);

// Reset auto-slide on user interaction
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 3000);
}

// Initialize
goToSlide(0);
updateSliderFill(0);
