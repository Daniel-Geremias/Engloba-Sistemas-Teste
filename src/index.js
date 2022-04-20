import './style.css';

const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list')

menuList.style.display = 'none';

menuButton.addEventListener('click', function() {
    if (menuList.style.display == 'none') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
})

let slidePosition = 0;

const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', function() {
    moveToNextSlide();
})

document.getElementById('carousel-button-prev').addEventListener('click', function() {
    moveToPrevSlide();
})

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }

    slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToNextSlide() {

    updateSlidePosition();

    if (slidePosition === totalSlides -1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
};

function moveToPrevSlide() {

    updateSlidePosition();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--
    }
}