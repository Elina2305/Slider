const leftButton = document.querySelector('.slider-arrows__arrow__left');
const rightButton = document.querySelector('.slider-arrows__arrow__right');
const itemsWrapper = document.querySelector('.slider-arrows__items__wrapper');
const items = document.querySelectorAll('.slider-arrows__item');
const icons = document.querySelectorAll('.slider-arrows__scrollbar__icon');

let currentIndex = 0;

function updateSlider() {
   
    items.forEach((item, index) => {
        item.style.display = (index === currentIndex) ? 'block' : 'none';
    });
  
    icons.forEach(icon => icon.classList.remove('active'));

    icons[currentIndex].classList.add('active');
}

leftButton.addEventListener('click', () => {
   
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateSlider();
});

rightButton.addEventListener('click', () => {
   
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

function autoSlide() {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
}

let slideInterval = setInterval(autoSlide, 1000);

updateSlider();
