import stringToElement from '../../utils/string-to-element'
import circularButtonHTML from './circular-button.html'
import circularButtonLinkHTML from './circular-button--link.html'
import './circular-button.scss'
///////////////////////////////////////////////////////////////////////////////

const implementCircularButtonComponent = ({ link = false, iconsPath, placeholder = 'Кнопка', }) => {
  const htmlString = link ? circularButtonLinkHTML : circularButtonHTML

  const circularButtonElement = stringToElement(htmlString)
  const circularButtonPlaceholder = circularButtonElement.querySelector('.circular-button__placeholder')
  circularButtonPlaceholder.innerText = placeholder

  circularButtonElement.style.cssText = `
    background-image: url(${iconsPath});
    `

  return circularButtonElement
}

export default implementCircularButtonComponent
