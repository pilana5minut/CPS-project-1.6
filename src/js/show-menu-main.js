const menuMain = document.querySelector('.menu-main')
const pageOverlay = document.querySelector('.page__overlay')
const buttonBurger = document.querySelector('.circular-button--burger')
const menuMainButtonClose = document.querySelector('.menu-main__circular-button--close')

const mediaMinWidthLG = window.matchMedia('(min-width: 1120px)')

buttonBurger.addEventListener('click', function () {
  menuMain.classList.add('menu-main--is-open')
  pageOverlay.classList.add('page__overlay--visible')
})

menuMainButtonClose.addEventListener('click', function () {
  menuMain.classList.remove('menu-main--is-open')
  pageOverlay.classList.remove('page__overlay--visible')
})

pageOverlay.addEventListener('click', function () {
  menuMain.classList.remove('menu-main--is-open')
  pageOverlay.classList.remove('page__overlay--visible')
})

mediaMinWidthLG.addEventListener('change', () => {
  menuMain.classList.remove('menu-main--is-open')
  pageOverlay.classList.remove('page__overlay--visible')
})
