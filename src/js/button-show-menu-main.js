import breakPoints from './break-points.js'

const page = document.querySelector('.page')
const menuMain = document.querySelector('.menu-main')
const pageOverlay = document.querySelector('.page__overlay')
const buttonBurger = document.querySelector('.circular-button--burger')
const menuMainButtonClose = document.querySelector('.menu-main__circular-button--close')

buttonBurger.addEventListener('click', function () {
  page.classList.add('page--scroll-stop')
  menuMain.classList.add('menu-main--is-open')
  pageOverlay.classList.add('page__overlay--visible')
})

menuMainButtonClose.addEventListener('click', function () {
  page.classList.remove('page--scroll-stop')
  menuMain.classList.remove('menu-main--is-open')
  pageOverlay.classList.remove('page__overlay--visible')
})

pageOverlay.addEventListener('click', function () {
  page.classList.remove('page--scroll-stop')
  menuMain.classList.remove('menu-main--is-open')
  pageOverlay.classList.remove('page__overlay--visible')
})

for (const key in breakPoints) {
  if (Object.hasOwnProperty.call(breakPoints, key)) {
    const element = breakPoints[key];
    element.addEventListener('change', () => {
      menuMain.classList.remove('menu-main--is-open')
      pageOverlay.classList.remove('page__overlay--visible')
    })
  }
}
