let stars = document.querySelector('.stars');
let moon = document.querySelector('.moon');
let mountains__back = document.querySelector('.mountains__back');
let mountains__front = document.querySelector('.mountains__front');
let text = document.querySelector('.text');
let btn = document.querySelector('.btn');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    console.log(scrollY);

    stars.style.left = scrollY * 0.2 + 'px';
    moon.style.top = scrollY * 0.5 + 'px';
    mountains__back.style.top = scrollY * 0.5 + 'px';
    mountains__front.style.top = scrollY * 0 + 'px';
    text.style.marginRight = scrollY * 3 + 'px';
    text.style.marginTop = scrollY * 1.5 + 'px';
});