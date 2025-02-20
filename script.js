// Carousel setup
const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".slide"));
const rangeInput = document.querySelector(".carousel-range");

// Current slide index
let currentIndex = 0;
const totalSlides = slides.length;

// Move to a given slide index (updates transform)
function goToSlide(index) {
  // Keep index in bounds
  currentIndex = index % totalSlides;
  if (currentIndex < 0) currentIndex = totalSlides - 1;
  // Calculate the offset
  const offset = -currentIndex * 100; // each slide is 100% width
  track.style.transform = `translateX(${offset}%)`;

  // Update the range input value
  rangeInput.value = currentIndex;
}

// Listen for manual slider input
rangeInput.addEventListener("input", () => {
  const val = parseInt(rangeInput.value, 10);
  goToSlide(val);
  // Reset auto-slide timer, so it doesn't immediately jump
  resetAutoSlide();
});

// Auto-slide every 3 seconds
let autoSlideInterval = setInterval(() => {
  goToSlide(currentIndex + 1);
}, 3000);

// Reset the auto-slide timer if the user interacts
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 3000);
}

// Initial slide
goToSlide(0);
