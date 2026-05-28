const mobileMenu = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#navLinks');

    burger.addEventListener('click', () => {
        // Toggle the Nav menu
        nav.classList.toggle('nav-active');

        // Optional: Change burger to "X" would go here
    });
}

mobileMenu();

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    let scrollPosition = window.scrollY;

    // Fades out completely once you scroll 100% of the screen height
    let opacity = 1 - (scrollPosition / window.innerHeight);

    if (opacity >= 0) {
        header.style.opacity = opacity;
    } else {
        header.style.opacity = 0;
    }
});

const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    // Moves the carousel right by the width of one card
    const cardWidth = carousel.querySelector('.card').offsetWidth + 20; 
    carousel.scrollLeft += cardWidth;
});

prevBtn.addEventListener('click', () => {
    // Moves the carousel left
    const cardWidth = carousel.querySelector('.card').offsetWidth + 20;
    carousel.scrollLeft -= cardWidth;
});