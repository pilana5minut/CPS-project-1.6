const sliderContainer = document.querySelector('.prices__slider')
const sliderWrapper = document.querySelector('.prices__wrapper')
const sliderSlides = document.querySelectorAll('.card-price')
const sliderPagination = document.querySelector('.prices__slider-pagination')

export default {
  addClassSlider: function () {
    sliderContainer.classList.add('swiper')
    sliderWrapper.classList.add('swiper-wrapper')
    sliderSlides.forEach((elem) => {
      elem.classList.add('swiper-slide')
    })
    sliderPagination.classList.remove('visually-hidden')
  },

  removeClassSlider: function () {
    sliderContainer.classList.remove('swiper')
    sliderWrapper.classList.remove('swiper-wrapper')
    sliderSlides.forEach((elem) => {
      elem.classList.remove('swiper-slide')
    })
    sliderPagination.classList.add('visually-hidden')
  },
}
