const buttonUp = document.querySelector('.up-button');
const buttonDown = document.querySelector('.down-button');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const lengthOfSlide = slideRight.querySelectorAll('div').length;
const containerOfSlider = document.querySelector('.slider-container');


let liveSlideIndex = 0; // Helps to track which index in the current view

slideLeft.style.top = `-${(lengthOfSlide - 1) * 100}vh`; // It should be - because of contrast move

buttonUp.addEventListener('click', () => changeSlide('up'));
buttonDown.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = containerOfSlider.clientHeight
    if(direction === 'up') {
        liveSlideIndex++;
        if(liveSlideIndex > lengthOfSlide - 1) {
            liveSlideIndex = 0;
        }
    } else if(direction === 'down') {
        liveSlideIndex--;
        if(liveSlideIndex < 0) {
            liveSlideIndex = lengthOfSlide - 1;
        }
    }

    slideRight.style.transform = `translateY(-${liveSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${liveSlideIndex * sliderHeight}px)`;
}