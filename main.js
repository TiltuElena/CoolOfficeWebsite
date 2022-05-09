var images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg'];
var currentIndex = 0;
function setBackgroundImage(image) {
    var display = document.querySelector('.display');
    display.style.backgroundImage = "url('images/".concat(image, "')");
}
function slideToLeft() {
    currentIndex = currentIndex - 1;
    if (currentIndex === -1) {
        currentIndex = images.length - 1;
    }
    setBackgroundImage(images[currentIndex]);
}
function slideToRight() {
    currentIndex = currentIndex + 1;
    if (currentIndex === images.length) {
        currentIndex = 0;
    }
    setBackgroundImage(images[currentIndex]);
}
function autoChangeSlide(timeOut) {
    setInterval(slideToRight, timeOut);
}
function initiateSlider() {
    setBackgroundImage(images[currentIndex]);
    autoChangeSlide(4000);
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        slideToLeft();
    }
    if (event.key === 'ArrowLeft') {
        slideToRight();
    }
});
document.querySelector('#arrowRight').addEventListener('click', function () {
    slideToRight();
});
document.querySelector('#arrowLeft').addEventListener('click', function () {
    slideToLeft();
});
initiateSlider();
