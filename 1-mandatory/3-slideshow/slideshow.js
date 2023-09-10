const images = ["assets/cute-cat-a.png", "assets/cute-cat-b.jpg", "assets/cute-cat-c.jpg", "assets/cute-cat-d.png"];
let currentIndex = 0;
let autoPlayInterval;

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const autoPrevButton = document.getElementById('auto-prev-button');
const autoNextButton = document.getElementById('auto-next-button');

function showImage(index) {
    if (index >= 0 && index < images.length) {
        imageElement.src = images[index];
        currentIndex = index;
    }
}

prevButton.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

autoPrevButton.addEventListener('click', () => {
    autoPlay(false);
});

autoNextButton.addEventListener('click', () => {
    autoPlay(true);
});

function autoPlay(next) {
    clearInterval(autoPlayInterval);
    if (next) {
        showImage(currentIndex + 1);
    } else {
        showImage(currentIndex - 1);
    }
    autoPlayInterval = setInterval(() => {
        showImage(next ? currentIndex + 1 : currentIndex - 1);
    }, 3000);
}

showImage(currentIndex);

autoPlayInterval = setInterval(() => {
    showImage(currentIndex + 1);
}, 3000);
