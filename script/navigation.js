const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');

const menuMask = document.querySelector('.menu-mask');
const menuOverlay = document.querySelector('.menu-overlay');

const header = document.querySelector('.header')
const heroSection = document.getElementById('hero');

menuOpenBtn.addEventListener('click', () => {
    menuOverlay.classList.add('isOpen');
    menuMask.classList.add('fade');
})

menuCloseBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('isOpen');
    menuMask.classList.remove('fade');
})

menuMask.addEventListener('click', () => {
    menuOverlay.classList.remove('isOpen');
    menuMask.classList.remove('fade');
})

const firstSectionObserver = new IntersectionObserver((entries) => {
    if(!entries[0].isIntersecting){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
}, {threshold: 1})

firstSectionObserver.observe(heroSection);