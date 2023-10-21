let currentSlide = 0;

    function showSlide(n) {
        const slides = document.querySelectorAll('.carrusel-item');
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    document.querySelector('.btn-prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    document.querySelector('.btn-next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });