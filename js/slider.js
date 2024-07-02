const slider = document.getElementById('slider');
const cardsCount = document.getElementsByClassName('section-slider__item').length;

let cardsForPerView;
let cardWidth;

const сheckAdaptive = () => {
	if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
		cardsForPerView = 2;
		cardWidth = 485;
	} else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
		cardsForPerView = 2;
		cardWidth = 375;
	} else if (window.innerWidth >= 576 && window.innerWidth <= 767) {
		cardsForPerView = 2;
		cardWidth = 288;
	} else if (window.innerWidth <= 575) {
		cardsForPerView = 1;
		cardWidth = 320;
	} else {
		cardsForPerView = 3;
		cardWidth = 390;
	}
}

сheckAdaptive();

let currentIndex = 0;
let currentOffset = 0;

const moveToNext = () => {
    if (currentOffset === cardsCount - cardsForPerView) {
			slider.style.left = '0px';
			currentIndex = 0;
			currentOffset = 0;

			return;
    }

    currentIndex += 1;
    currentOffset += 1;
		
    slider.style.left = `-${cardWidth * currentIndex}px`;
	};

const moveToPrev = () => {
    if (!currentOffset) return;

    currentIndex -= 1;
    currentOffset -= 1;

    slider.style.left = `-${cardWidth * currentIndex}px`;
}

const reset = () => {
	slider.style.left = '0px';
	currentIndex = 0;
	currentOffset = 0;
}

document.querySelector('.section-slider__arrow--right').addEventListener('click', moveToNext);
document.querySelector('.section-slider__arrow--left').addEventListener('click', moveToPrev);
window.addEventListener('resize', сheckAdaptive);
window.addEventListener('resize', reset);