const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
let currentIndex = 0;
let autoPlayInterval;
let intervalSeconds = 2;

const imageElement = document.getElementById("carousel-img");
const prevButton = document.getElementById("backward-btn");
const nextButton = document.getElementById("forward-btn");
const autoPrevButton = document.getElementById("auto-backward");
const autoNextButton = document.getElementById("auto-forward");
const intervalInput = document.getElementById("interval-input");
const setIntervalButton = document.getElementById("set-interval-button");
const stopButton = document.getElementById("stop");

function showImage(index) {
  if (index >= 0 && index < images.length) {
    imageElement.src = images[index];
    currentIndex = index;
  }
}

prevButton.addEventListener("click", () => {
  var imageNumber = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(imageNumber);
});

nextButton.addEventListener("click", () => {
  var imageNumber = currentIndex + 1 === images.length ? 0 : currentIndex + 1;
  showImage(imageNumber);
});

autoPrevButton.addEventListener("click", () => {
  autoPrevButton.disabled = true;
  autoNextButton.disabled = true;
  autoPlay(false);
});

autoNextButton.addEventListener("click", () => {
  autoPrevButton.disabled = true;
  autoNextButton.disabled = true;
  autoPlay(true);
});

stopButton.addEventListener("click", () => {
  clearInterval(autoPlayInterval);
  autoPrevButton.disabled = false;
  autoNextButton.disabled = false;
});

setIntervalButton.addEventListener("click", () => {
  intervalSeconds = parseFloat(intervalInput.value);
  clearInterval(autoPlayInterval);
  autoPlay(true);
});

function autoPlay(next) {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    if (next) {
      currentIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1;
    } else {
      currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    showImage(currentIndex);
  }, intervalSeconds * 1000);
}

showImage(currentIndex);

autoPlayInterval = setInterval(() => {
  currentIndex = images.length === currentIndex + 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
}, intervalSeconds * 1000);
// npm test run 1-mandatory/3-slideshow/slideshow.test.js
