let currentSlide = 0;
let slideInterval;

const slidesContainer = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slideElements.length;
const slideWidth = slideElements[0].clientWidth;
const leftArrow = document.querySelector('.arrow.left')
const rightArrow = document.querySelector('.arrow.right')

function goToSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;
    slidesContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'))
    dots[currentSlide].classList.add('active')
}

function nextSlide() {
    goToSlide(currentSlide + 1)
}
function previousSlide() {
    goToSlide(currentSlide - 1)
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000)
}
function stopSlideShow() {
    clearInterval(slideInterval);
}

leftArrow.addEventListener('click', () => {
    stopSlideShow()
    previousSlide()
    startSlideShow()
})
rightArrow.addEventListener('click', () => {
    stopSlideShow()
    nextSlide()
    startSlideShow()
})

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlideShow()
        goToSlide(index)
        startSlideShow()
    })
})

startSlideShow();

