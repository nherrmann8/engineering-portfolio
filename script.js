const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".slide"));
const rangeInput = document.querySelector(".carousel-range");

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

// Update the slider's pill background to show a partial fill
function updateSliderFill(val) {
  const percent = (val / (rangeInput.max - rangeInput.min)) * 100; 
  // We want a lighter fill on the left, darker on right:
  // e.g. left portion = #eee, right portion = #999
  rangeInput.style.background = 
    `linear-gradient(to right, 
       #eee 0%, 
       #eee ${percent}%, 
       #999 ${percent}%, 
       #999 100%)`;
}

// Listen for manual slider movements
rangeInput.addEventListener("input", () => {
  const val = parseInt(rangeInput.value, 10);
  goToSlide(val);
  resetAutoSlide();
});

// Auto-slide every 3 seconds
let autoSlideInterval = setInterval(() => {
  goToSlide(currentIndex + 1);
}, 3000);

// Reset auto-slide timer
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 3000);
}

// Initialize first slide & slider fill
goToSlide(0);
updateSliderFill(0);
