const openBtn = document.querySelector('.header__burger-btn');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('body')

openBtn.addEventListener('click', e=> {
    nav.classList.toggle('header__nav--visible')
    openBtn.classList.toggle('header__burger-btn--opened')
    body.classList.toggle('body--locked')
  }
)





