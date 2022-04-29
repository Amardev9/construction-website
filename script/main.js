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

const servicesBG = document.querySelectorAll('.service-bg');
const services = document.querySelectorAll('.home-service');
const servicesLinks = document.querySelectorAll('.home-service__link');


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


services.forEach((serviceEl, index) => {
    serviceEl.addEventListener('mouseover', () => {
        switch(index){
            case 0:
                servicesBG[0].classList.add('fade');
                servicesBG[1].classList.remove('fade');
                servicesBG[2].classList.remove('fade');
                servicesBG[3].classList.remove('fade');

                servicesLinks[0].classList.add('fade-up');
                servicesLinks[1].classList.remove('fade-up');
                servicesLinks[2].classList.remove('fade-up');
                servicesLinks[3].classList.remove('fade-up');
            break;
            case 1:
                servicesBG[0].classList.remove('fade');
                servicesBG[1].classList.add('fade');
                servicesBG[2].classList.remove('fade');
                servicesBG[3].classList.remove('fade');

                servicesLinks[0].classList.remove('fade-up');
                servicesLinks[1].classList.add('fade-up');
                servicesLinks[2].classList.remove('fade-up');
                servicesLinks[3].classList.remove('fade-up');
            break;
            case 2:
                servicesBG[0].classList.remove('fade');
                servicesBG[1].classList.remove('fade');
                servicesBG[2].classList.add('fade');
                servicesBG[3].classList.remove('fade');

                servicesLinks[0].classList.remove('fade-up');
                servicesLinks[1].classList.remove('fade-up');
                servicesLinks[2].classList.add('fade-up');
                servicesLinks[3].classList.remove('fade-up');
            break;
            case 3:
                servicesBG[0].classList.remove('fade');
                servicesBG[1].classList.remove('fade');
                servicesBG[2].classList.remove('fade');
                servicesBG[3].classList.add('fade');

                servicesLinks[0].classList.remove('fade-up');
                servicesLinks[1].classList.remove('fade-up');
                servicesLinks[2].classList.remove('fade-up');
                servicesLinks[3].classList.add('fade-up');
            break;
        }
    })

    services.forEach(serviceEl => {
        serviceEl.addEventListener('mouseleave', () => {
            servicesBG[0].classList.remove('fade');
            servicesBG[1].classList.remove('fade');
            servicesBG[2].classList.remove('fade');
            servicesBG[3].classList.remove('fade');

            servicesLinks[0].classList.remove('fade-up');
            servicesLinks[1].classList.remove('fade-up');
            servicesLinks[2].classList.remove('fade-up');
            servicesLinks[3].classList.remove('fade-up');
        })
    });
});



const firstSectionObserver = new IntersectionObserver((entries) => {
    if(!entries[0].isIntersecting){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
}, {threshold: 1})

firstSectionObserver.observe(heroSection);


