const imagesArray = ["assets/cute-cat-a.png", "assets/cute-cat-b.jpg", "assets/cute-cat-c.jpg"];

let currentImageIndex = 0;
document.querySelector("p").textContent = currentImageIndex;
let image = document.querySelector("img");

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
    let backInterval = setInterval(moveBack, 1000);
    document.getElementById("stopButton").addEventListener("click", function () {
        clearInterval(backInterval);
    });
});
document.getElementById("autoForwardButton").addEventListener("click", function () {
    let forwardInterval = setInterval(moveForward, 1000);
    document.getElementById("stopButton").addEventListener("click", function () {
        clearInterval(forwardInterval);
    });
});
