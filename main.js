const closeBtn = document.querySelector('.navbar__close-btn');
const navbar = document.querySelector('.navbar__menu')
const burgerIcon = document.querySelector('.navbar__burger')

const closeNavbar = () => {
    navbar.classList.remove('active')
}

const openNavbar = () => {
    navbar.classList.add('active')
}

burgerIcon.addEventListener('click',openNavbar);
closeBtn.addEventListener('click',closeNavbar);

console.log(closeBtn);