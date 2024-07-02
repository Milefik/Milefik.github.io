const slider = document.getElementById('slider');
const cardsCount = document.getElementsByClassName('section-slider__item').length;

let cardsForPerView;
let cardWidth;
let currentIndex = 0;

const resizeWindow = () => {
    currentIndex = 0;
    slider.style.left = '0';

    if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
        cardsForPerView = 2;
        cardWidth = 485;

        return;
    }

    if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        cardsForPerView = 2;
        cardWidth = 375;

        return;
    }

    if (window.innerWidth >= 576 && window.innerWidth <= 767) {
        cardsForPerView = 2;
        cardWidth = 288;

        return;
    }

    if (window.innerWidth <= 575) {
        cardsForPerView = 1;
        cardWidth = 320;

        return;
    }

    cardsForPerView = 3;
    cardWidth = 390;
};

const moveToNext = () => {
    if (currentIndex === cardsCount - cardsForPerView) {
        slider.style.left = '0px';
        currentIndex = 0;

        return;
    }

    currentIndex += 1;
    slider.style.left = `-${cardWidth * currentIndex}px`;
};

const moveToPrev = () => {
    if (!currentIndex) {
        slider.style.left = `-${cardWidth * (cardsCount - cardsForPerView)}px`;
        currentIndex = cardsCount - cardsForPerView;

        return;
    }

    currentIndex -= 1;
    slider.style.left = `-${cardWidth * currentIndex}px`;
};

window.addEventListener('load', resizeWindow);
window.addEventListener('resize', resizeWindow);

document.querySelector('.section-slider__arrow--right').addEventListener('click', moveToNext);
document.querySelector('.section-slider__arrow--left').addEventListener('click', moveToPrev);