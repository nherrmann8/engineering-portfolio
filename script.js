/* The fixed order: quip Ultra, Water Flosser, Shark, Stomach, Zio */
const imagesData = [
  { src: "images/ultra1.jpg",    caption: "quip Ultra" },
  { src: "images/flosser1.jpg",  caption: "quip Water Flosser" },
  { src: "images/shark1.jpg",    caption: "Shark EvoPower System" },
  { src: "images/stomach1.jpg",  caption: "Artificial Stomach" },
  { src: "images/zio1.jpg",      caption: "Zio iRhythm" }
];

const track = document.getElementById("carousel-track");
const subtitleEl = document.getElementById("subtitle");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

/* We'll create 5 .carousel-item elements in the track, each flex:0 0 33.33% 
   so we see 3 items at a time in the viewport. 
*/
imagesData.forEach(data => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("carousel-item");
  const img = document.createElement("img");
  img.src = data.src;
  itemDiv.appendChild(img);
  track.appendChild(itemDiv);
});

/* We have 5 items in total. 
   We'll shift the track left/right so that the center item is in the middle slot. 
   We'll also add .side-img to items that are not center. 
   Let's define currentIndex = 0 => the center item in slot #0 => 
   but we have 3 slots in the viewport => 
   We'll do a simpler approach: the center item will appear in the middle slot => 
   that means track translateX(...) to shift items so the currentIndex is in that middle slot. 
*/
let currentIndex = 0; // which item is "center" in the middle slot
const totalItems = imagesData.length;

function updateCarousel() {
  /* 
     We'll show the item at currentIndex in the middle slot, 
     item at currentIndex-1 in left slot, item at currentIndex+1 in right slot, etc. 
     For a simple approach:
       translateX( - (currentIndex * (100% / 3) ) ) 
     But we have 5 items, each 33.33% wide, so the total track is 5*33.33% = 166.65% wide.
     If the center is currentIndex, we want that item to appear in the middle. 
     The middle slot is effectively 1 slot from the left => we want to shift left by (currentIndex - 1) * 33.33%. 
  */
  const offsetPercent = (currentIndex - 1) * 33.33;
  track.style.transform = `translateX(-${offsetPercent}%)`;

  // Identify which items are side vs. center
  const items = track.querySelectorAll(".carousel-item");
  items.forEach((item, i) => {
    const img = item.querySelector("img");
    img.classList.remove("side-img");
    // "distance" from currentIndex
    let dist = i - currentIndex;
    // wrap around if needed
    if (dist >  2) dist -= totalItems; 
    if (dist < -2) dist += totalItems;

    if (dist === 0) {
      // center
      img.style.transform = "scale(1)";
      img.style.opacity = "1";
    } else if (dist === 1 || dist === -1) {
      // side
      img.classList.add("side-img");
    } else {
      // more than 1 away => fade out or scale? 
      // let's hide them or just do side as well
      img.classList.add("side-img");
      img.style.opacity = "0.3"; 
    }
  });

  // Update subtitle for the center item
  const centerIdx = (currentIndex + totalItems) % totalItems;
  subtitleEl.textContent = imagesData[centerIdx].caption || "";
}

/* Arrows */
function goLeft() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
  resetAutoSlide();
}
function goRight() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
  resetAutoSlide();
}
arrowLeft.addEventListener("click", goLeft);
arrowRight.addEventListener("click", goRight);

/* Auto-slide */
let autoSlide = setInterval(() => {
  goRight();
}, 3000);
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    goRight();
  }, 3000);
}

/* Initialize */
updateCarousel();
