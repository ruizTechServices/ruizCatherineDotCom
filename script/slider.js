const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
const slideWidth = slider.clientWidth; // Assuming 1 slide visible at a time
let slideIndex = 0;

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > slides.children.length - 1) {
    slideIndex = slides.children.length - 1;
  }
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

console.log('slider script loaded');
