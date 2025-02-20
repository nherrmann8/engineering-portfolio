// Select all images in the carousel
const images = document.querySelectorAll(".carousel img");
let index = 0;

// Function to show the next image
function showNextImage() {
  // Hide the current image
  images[index].classList.remove("active");
  // Move to next index (wrap around with modulo)
  index = (index + 1) % images.length;
  // Show the new image
  images[index].classList.add("active");
}

// Automatically switch images every 3 seconds
setInterval(showNextImage, 3000);
