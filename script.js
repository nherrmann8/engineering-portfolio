/* Five images (all 4:3 ratio). 
   We'll create 5 items in .carousel-track 
   but only show 3 at once (prev, center, next). 
   We'll do a sliding transform to center the correct group. 
*/
const images = [
  { src: "images/zio1.jpg",     caption: "Zio iRhythm" },
  { src: "images/ultra1.jpg",   caption: "quip Ultra" },
  { src: "images/flosser1.jpg", caption: "quip Water Flosser" },
  { src: "images/shark1.jpg",   caption: "Shark EvoPower System" },
  { src: "images/stomach1.jpg", caption: "Artificial Stomach" }
];

let currentIndex = 0; // which image is center
const track = document.getElementById("carouselTrack");
const subtitle = document.getElementById("subtitle");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

/* 1) Dynamically create each item in the track */
images.forEach((imgObj, i) => {
  const div = document.createElement("div");
  div.classList.add("carousel-item");
  const img = document.createElement("img");
  img.src = imgObj.src;
  div.appendChild(img);
  track.appendChild(div);
});

/* Now we have 5 .carousel-item elements in a row. 
   We'll show images[i-1], images[i], images[i+1] as side/center. 
   For a real "sliding" effect, we'll transform the track so that 
   the center image is in the middle. 
*/

/* 2) Update classes + track transform */
function updateCarousel() {
  /* We show 3 images at once: 
     - item at (currentIndex-1) => side
     - item at currentIndex => center
     - item at (currentIndex+1) => side
  */
  const items = document.querySelectorAll(".carousel-item");
  const total = items.length;

  // For cyclical indexing:
  function wrap(idx) { 
    return (idx + total) % total; 
  }

  // For each item, decide if it's prev, center, or next, or hidden
  items.forEach((item, i) => {
    const img = item.querySelector("img");
    item.classList.remove("center-img", "side-img");
    
    // Are we the center?
    if (i === wrap(currentIndex)) {
      img.classList.add("center-img"); // 640×480
      img.classList.remove("side-img");
    }
    // Are we prev?
    else if (i === wrap(currentIndex - 1) || i === wrap(currentIndex + 4)) {
      // side image
      img.classList.add("side-img");
      img.classList.remove("center-img");
    }
    // Are we next?
    else if (i === wrap(currentIndex + 1)) {
      img.classList.add("side-img");
      img.classList.remove("center-img");
    }
    // Otherwise, hide
    else {
      // Hide (set zero width/height or display none)
      img.classList.remove("center-img", "side-img");
      img.style.width = "0px";
      img.style.height = "0px";
      img.style.opacity = "0";
      item.style.pointerEvents = "none";
    }
  });

  // Update subtitle for center
  subtitle.textContent = images[wrap(currentIndex)].caption || "";

  /* Slide the track left so the center item appears in middle. 
     Each item takes up space for side or center. We'll measure. 
  */
  // We'll assume each item has width = side? Actually we can do a simpler approach:
  // We'll place the center item in the middle = currentIndex * (some width)
  // Actually let's do a 680 px offset per item (a bit bigger than side 640?).
  // We'll do simpler: each item is 700 px wide in the track to accommodate gap + side/center. 
  // Then we transform by -currentIndex * 700.
  
  const itemWidth = 700; // approximate space for each item + gap
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

/* 3) Arrows */
function goLeft() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  resetAutoSlide();
}
function goRight() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  resetAutoSlide();
}

arrowLeft.addEventListener("click", goLeft);
arrowRight.addEventListener("click", goRight);

/* 4) Auto-slide */
let autoSlide = setInterval(() => {
  goRight();
}, 4000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    goRight();
  }, 4000);
}

/* 5) Init */
updateCarousel();
