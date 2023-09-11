const imagesArray = ["assets/cute-cat-a.png", "assets/cute-cat-b.jpg", "assets/cute-cat-c.jpg"];

let currentImageIndex = 0;
document.querySelector("p").textContent = currentImageIndex;
let image = document.querySelector("img");

let intervalDuration = 1000;
let input = document.querySelector("input");
input.addEventListener("input", function () {
    intervalDuration = this.value * 1000;
});

function moveForward () {
    currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
    image.src = imagesArray[currentImageIndex];
    document.querySelector("p").textContent = currentImageIndex;
}

function moveBack () {
    if (currentImageIndex - 1 < 0) {
        currentImageIndex = imagesArray.length - 1;
    } else {
        currentImageIndex = (currentImageIndex - 1) % imagesArray.length;
    }
    image.src = imagesArray[currentImageIndex];
    document.querySelector("p").textContent = currentImageIndex;
}

document.getElementById("forwardButton").addEventListener("click", moveForward);
document.getElementById("backButton").addEventListener("click", moveBack);
document.getElementById("autoBackButton").addEventListener("click", function () {
    let backInterval = setInterval(moveBack, intervalDuration);
    document.getElementById("stopButton").addEventListener("click", function () {
        clearInterval(backInterval);
    });
});
document.getElementById("autoForwardButton").addEventListener("click", function () {
    let forwardInterval = setInterval(moveForward, intervalDuration);
    document.getElementById("stopButton").addEventListener("click", function () {
        clearInterval(forwardInterval);
    });
});
