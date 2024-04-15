const sliderContainer = document.querySelector('.brands__slider')
const showAllButton = document.querySelector('.brands__show-all-button')

import breakPoints from '../break-points.js'

const buttonInnerText = ['Показать все', 'Скрыть']
const initialHeight = sliderContainer.clientHeight

showAllButton.addEventListener('click', () => {
  if (sliderContainer.clientHeight < sliderContainer.scrollHeight) {
    sliderContainer.style.cssText = `
      height: ${sliderContainer.scrollHeight}px;
    `
    showAllButton.classList.add('brands__show-all-button--expanded')
    showAllButton.innerText = buttonInnerText[1]
  }
  else {
    sliderContainer.style.cssText = `
      height: ${initialHeight}px;
    `
    showAllButton.classList.remove('brands__show-all-button--expanded')
    showAllButton.innerText = buttonInnerText[0]
  }
})

for (const key in breakPoints) {
  if (Object.hasOwnProperty.call(breakPoints, key)) {
    const element = breakPoints[key];
    element.addEventListener('change', () => {
      sliderContainer.style.cssText = `
      height: ${initialHeight}px;
      `
    })
  }
}
