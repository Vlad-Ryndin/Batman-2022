const swiper = new Swiper('.main-slider', {

    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    }
});

let burger = document.querySelector('.burger__menu');
let closeMenu = document.querySelector('.header__menu-close')
let menuMobile = document.querySelector('.header')


burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
    burger.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
    menuMobile.style.display = 'none';
    burger.style.display = 'block';
});