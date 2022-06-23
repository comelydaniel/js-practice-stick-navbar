const header = document.querySelector('.header');

window.addEventListener('scroll', headerColor);

headerColor();

function headerColor() {
    if (window.scrollY > 120 ) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}