// ====== Navigation ====== //
const navHeader = document.querySelector('.header');
const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');

const menuMask = document.querySelector('.menu-mask');
const menuOverlay = document.querySelector('.menu-overlay');

const homeHeroSection = document.querySelector('.home-hero');

menuOpenBtn.addEventListener('click', () => {
    menuOverlay.classList.add('is-open');
    menuMask.classList.add('show');
})

menuCloseBtn.addEventListener('click', ()=> {
    menuOverlay.classList.remove('is-open');
    menuMask.classList.remove('show');
})

const homeOptions = {
    threshold: 1,
}

const homeHeroSectionObserver = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting == false){
        console.log('add class');
        navHeader.classList.add('scrolled')
    }else{
        console.log('remove class')
        navHeader.classList.remove('scrolled')
    }

},homeOptions)

homeHeroSectionObserver.observe(homeHeroSection);
// ====== Hero ====== //

const heroBtn = document.querySelector('.hero-btn');
const btnCircle = document.querySelector('.circle');

heroBtn.addEventListener('mouseover', () => {
    btnCircle.classList.add('scale');
})

heroBtn.addEventListener('mouseleave', () => {
    btnCircle.classList.remove('scale');
})