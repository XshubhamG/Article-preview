let btnEl = document.querySelectorAll('.share');
let footerEl = document.querySelector('.footer__dark');

btnEl.forEach((btn) => {
    btn.addEventListener('click', () => {
        footerEl.classList.toggle('display');
    })
})