const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');

const menuMask = document.querySelector('.menu-mask');
const menuOverlay = document.querySelector('.menu-overlay');

const header = document.querySelector('.header')
const heroSection = document.getElementById('hero');

const homeHeroBtn = document.querySelector('.hero-btn');
const cirlceEl = document.querySelector('.cirlce');

const videoContainer = document.querySelector('.video-container');
const videoClose = document.querySelector('.video-close');

const videoIframe = document.querySelector('.gm-video');
const bodyTag = document.querySelector('.body')
const videoSpinner = document.querySelector('.video-spinner');


window.addEventListener('load', () => {
    bodyTag.classList.remove('preload');
})


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

homeHeroBtn.addEventListener('mouseover', () => {
    cirlceEl.classList.add('scale')
})

homeHeroBtn.addEventListener('mouseleave', () => {
    cirlceEl.classList.remove('scale')
})

homeHeroBtn.addEventListener('click', () => {
    videoContainer.classList.add('fade');
    videoSpinner.classList.add('show');
    videoIframe.src = "https://player.vimeo.com/video/371416332?h=0cebcb48c4&autoplay=1";
})

videoClose.addEventListener('click', () => {
    videoContainer.classList.remove('fade');
    videoSpinner.classList.remove('show');
    videoIframe.src = "";
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




