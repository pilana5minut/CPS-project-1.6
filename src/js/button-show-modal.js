const page = document.querySelector('.page')
const menuMain = document.querySelector('.menu-main')
const pageOverlay = document.querySelector('.page__overlay')

const setCircularButtonChat = document.querySelectorAll('.circular-button--chat')
const setCircularButtonCall = document.querySelectorAll('.circular-button--call')

const feedbackModalTemplate = document.querySelector('#modal-feedback').content
const callbackModalTemplate = document.querySelector('#modal-callback').content

///////////////////////////////////////////////////////////////////////////////

const modalFeedbackElement = feedbackModalTemplate.querySelector('.modal-feedback')
const modalFeedbackButtonClose = feedbackModalTemplate.querySelector('.modal__circular-button--close')

setCircularButtonChat.forEach((elem) => {
  elem.addEventListener('click', function () {
    page.append(modalFeedbackElement)
    pageOverlay.classList.add('page__overlay--visible')
    menuMain.classList.remove('menu-main--is-open')
    page.classList.add('page--scroll-stop')
  })
})

modalFeedbackButtonClose.addEventListener('click', function () {
  modalFeedbackElement.remove()
  pageOverlay.classList.remove('page__overlay--visible')
  page.classList.remove('page--scroll-stop')
})

///////////////////////////////////////////////////////////////////////////////

const modalCallbackElement = callbackModalTemplate.querySelector('.modal-callback')
const modalCallbackButtonClose = callbackModalTemplate.querySelector('.modal__circular-button--close')

setCircularButtonCall.forEach((elem) => {
  elem.addEventListener('click', function () {
    page.append(modalCallbackElement)
    pageOverlay.classList.add('page__overlay--visible')
    menuMain.classList.remove('menu-main--is-open')
    page.classList.add('page--scroll-stop')
  })
})

modalCallbackButtonClose.addEventListener('click', function () {
  modalCallbackElement.remove()
  pageOverlay.classList.remove('page__overlay--visible')
  page.classList.remove('page--scroll-stop')
})

///////////////////////////////////////////////////////////////////////////////

pageOverlay.addEventListener('click', function () {
  modalFeedbackElement.remove()
  modalCallbackElement.remove()
  pageOverlay.classList.remove('page__overlay--visible')
  menuMain.classList.remove('menu-main--is-open')
  page.classList.remove('page--scroll-stop')
})
