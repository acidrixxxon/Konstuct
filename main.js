const closeBtn = document.querySelector('.navbar__close-btn');
const nav = document.querySelector('.navbar__menu')
const burgerIcon = document.querySelector('.navbar__burger')

const closeNavbar = () => {
    nav.classList.remove('active')
}

const openNavbar = () => {
    nav.classList.add('active')
}

burgerIcon.addEventListener('click',openNavbar);
closeBtn.addEventListener('click',closeNavbar);


// sticky header
const navbar = document.getElementById('navbar')
const header = document.getElementById('header')

const navbarHeight = navbar.offsetHeight;
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', (e) => {
    const scrollDistance = window.scrollY
    
    if (scrollDistance >= headerHeight) {
        navbar.classList.add('fixed-navbar')
        document.querySelector('.about__heading').style.marginTop = `${navbarHeight + 55}px`
    } else {
        navbar.classList.remove('fixed-navbar')
        document.querySelector('.about__heading').style.marginTop = 0;
    }
})

