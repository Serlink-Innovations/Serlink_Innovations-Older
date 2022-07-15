//Mobile Navigation Toggler
const navToggler = document.querySelector('#navToggler');
const nav = document.querySelector('#nav');

navToggler.addEventListener('click', () => {
    nav.classList.toggle('active');
});

//Mobile HeaderFixed function
const header = document.getElementsByClassName('header-main')[0];
const stickyHeader = header.offSetTop;

window.onscroll = function () {
    fixedMenu()
};

function fixedMenu() {
    if (window.pageYOffset) {
        header.classList.add("stickyHeader")
    } else {
        header.classList.remove("stickyHeader");
    }
}