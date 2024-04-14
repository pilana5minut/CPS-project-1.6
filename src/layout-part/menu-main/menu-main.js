import stringToElement from '../../js/utils/stringToElement'
import menuMainHTML from './menu-main.html'
import './menu-main.scss'
///////////////////////////////////////////////////////////////////////////////

const mediaMinWidthLG = window.matchMedia('(min-width: 1120px)')

///////////////////////////////////////////////////////////////////////////////

let pageOverlay
document.addEventListener('DOMContentLoaded', function () {
  pageOverlay = document.querySelector('.page__overlay')
})

///////////////////////////////////////////////////////////////////////////////

const implementMenuMainComponent = () => {
  const menuMainElement = stringToElement(menuMainHTML)
  const menuButtonClose = menuMainElement.querySelector('.menu-main__circular-button--close')

  menuButtonClose.addEventListener('click', function () {
    menuMainElement.classList.remove('menu-main--is-open')
    pageOverlay.classList.remove('page__overlay--visible')
  })

  // pageOverlay.addEventListener('click', function () {
  //   menuMainElement.classList.remove('menu-main--is-open')
  //   pageOverlay.classList.remove('page__overlay--visible')
  // })

  mediaMinWidthLG.addEventListener('change', () => {
    menuMainElement.classList.remove('menu-main--is-open')
    pageOverlay.classList.remove('page__overlay--visible')
  })

  return menuMainElement
}

export default implementMenuMainComponent
