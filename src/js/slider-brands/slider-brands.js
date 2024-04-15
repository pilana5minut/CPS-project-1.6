import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import breakPoints from '../break-points.js'
import sliderClassToggle from './slider-brands-class-toggle.js'
import sliderHideSlides from './slider-brands-hide-slides.js'

///////////////////////////////////////////////////////////////////////////////

const classNameWrapper = '.brands__slider'
let currentInstance
export const slideCount = 9 // Количество слайдов в мобильной версии (не может быть менее 3)

const optionSlider = {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.187,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
}

///////////////////////////////////////////////////////////////////////////////

// Инстанцирует класс Swiper
function initSlider() {
  sliderClassToggle.addClassSlider()
  currentInstance = new Swiper(`${classNameWrapper}`, optionSlider)
}

// Инстанцирует класс Swiper по условию, в момент загрузки.
window.addEventListener("load", function () {
  if (breakPoints.mediaMinWidthSM.matches) {
    sliderClassToggle.removeClassSlider()
  }
  else {
    sliderHideSlides.removeSlides()
    initSlider()
  }
});

// Инстанцирует или уничтожает класс Swiper по условию, при наступлении события в объекте MediaQueryList.
breakPoints.mediaMinWidthSM.addEventListener('change', (evt) => {
  if (evt.matches) {
    currentInstance.destroy()
    sliderClassToggle.removeClassSlider()
    sliderHideSlides.returnSlides()
  }
  else {
    sliderHideSlides.removeSlides()
    initSlider()
  }
})
