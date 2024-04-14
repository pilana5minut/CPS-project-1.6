import stringToElement from '../../js/utils/stringToElement'
import headerHTML from './header.html'
import './header.scss'
///////////////////////////////////////////////////////////////////////////////

let pageOverlay
let menuMain
document.addEventListener('DOMContentLoaded', function () {
  pageOverlay = document.querySelector('.page__overlay')
  menuMain = document.querySelector('.menu-main')
})

///////////////////////////////////////////////////////////////////////////////

const implementHeaderComponent = () => {
  const headerElement = stringToElement(headerHTML)
  const circularButtonBurger = headerElement.querySelector('.circular-button--burger')

  circularButtonBurger.addEventListener('click', function () {
    pageOverlay.classList.add('page__overlay--visible')
    menuMain.classList.add('menu-main--is-open')
  })

  return headerElement
}

export default implementHeaderComponent
