let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-container img');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'block';
});

document.querySelector('.prev').addEventListener('click', function() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
});
