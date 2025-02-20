const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".slide"));
const rangeInput = document.querySelector(".carousel-range");

let currentIndex = 0;
const totalSlides = slides.length;

// Move to a specific slide index
function goToSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides; 
  const offset = -currentIndex * 100; 
  track.style.transform = `translateX(${offset}%)`;
  rangeInput.value = currentIndex;
}

// Listen for slider input
rangeInput.addEventListener("input", () => {
  const val = parseInt(rangeInput.value, 10);
  goToSlide(val);
  resetAutoSlide();
});

// Auto-slide every 3 seconds
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

// Initialize first slide
goToSlide(0);
