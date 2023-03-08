const background = document.getElementById("background");
const images = ["R.jpg", "blizzard.jpg"];
var imageIndex = 0;

function addAnimation() {
    background.style.animationName = "slide";
    background.style.animationDuration = "5s";
    background.style.animationIterationCount = "infinite";
    background.style.backgroundImage = `url('images/${images[imageIndex]}')`;
}

function startAnimation() {
    setInterval(() => {
        imageIndex++;
        if (imageIndex == images.length) {
            imageIndex = 0;
        }
        background.style.backgroundImage = `url('images/${images[imageIndex]}')`;
    } , 5000);
}

window.onload = () => {
    addAnimation();
    startAnimation();
}