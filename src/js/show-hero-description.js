import breakPoints from './break-points.js'

const heroShowMoreButton = document.querySelector('.hero__show-more-button')
const heroText = document.querySelector('.hero__text')

let initialHeight = heroText.clientHeight

heroShowMoreButton.addEventListener('click', () => {
  if (heroText.clientHeight < heroText.scrollHeight) {
    heroText.style.cssText = `
      height: ${heroText.scrollHeight}px;
    `
    heroShowMoreButton.classList.add('hero__show-more-button--expanded')
  }
  else {
    heroText.style.cssText = `
    height: ${initialHeight}px;
    `
    heroShowMoreButton.classList.remove('hero__show-more-button--expanded')
  }
})

for (const key in breakPoints) {
  if (Object.hasOwnProperty.call(breakPoints, key)) {
    const element = breakPoints[key];
    element.addEventListener('change', () => {
      heroText.style.cssText = `
      height: ${initialHeight}px;
      `
      heroShowMoreButton.classList.remove('hero__show-more-button--expanded')
    })
  }
}
