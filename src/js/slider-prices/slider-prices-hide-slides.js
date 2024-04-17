import { slideCount } from './slider-prices.js'

const sliderWrapper = document.querySelector('.prices__wrapper')
const sliderSlides = document.querySelectorAll('.card-price')

const slidesStorage = []

export default {
  removeSlides: function () {
    for (let i = 0; i < sliderSlides.length; i++) {
      const element = sliderSlides[i];
      if (i >= slideCount) {
        slidesStorage.push(element)
        element.remove()
      }
    }
  },

  returnSlides: function () {
    for (let i = 0; i < slidesStorage.length; i++) {
      const element = slidesStorage[i];
      sliderWrapper.append(element)
    }
    slidesStorage.length = 0
  }
}
