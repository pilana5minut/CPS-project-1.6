const sliderContainer = document.querySelector('.types__slider')
const sliderWrapper = document.querySelector('.types__wrapper')
const sliderSlides = document.querySelectorAll('.card-type')
const sliderPagination = document.querySelector('.types__slider-pagination')

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
