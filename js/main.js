//Mobile Navigation Toggler
const navToggler = document.querySelector('#navToggler');
const nav = document.querySelector('#nav');

navToggler.addEventListener('click', () => {
    nav.classList.toggle('active');
});