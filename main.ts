const images: string[] = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg'];
let currentIndex: number = 0;

function setBackgroundImage(image: string): void {
    const display: HTMLElement = document.querySelector('.display')
    display.style.backgroundImage = `url('images/${image}')`;
}

function slideToLeft(): void {
    currentIndex = currentIndex - 1;

    if (currentIndex === -1) {
        currentIndex = images.length - 1;
    }

    setBackgroundImage(images[currentIndex]);
}

function slideToRight(): void {
    currentIndex = currentIndex + 1;

    if (currentIndex === images.length) {
        currentIndex = 0;
    }

    setBackgroundImage(images[currentIndex]);
}

function autoChangeSlide(timeOut: number): void {
    setInterval(slideToRight, timeOut);
}

function initiateSlider(): void {
    setBackgroundImage(images[currentIndex]);
    autoChangeSlide(4000);
}

document.addEventListener('keydown', function (event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
        slideToLeft();
    }

    if (event.key === 'ArrowLeft') {
        slideToRight();
    }
})

document.querySelector('#arrowRight').addEventListener('click', function () {
    slideToRight();
})

document.querySelector('#arrowLeft').addEventListener('click', function () {
    slideToLeft();
})

initiateSlider();

