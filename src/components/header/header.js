import stringToElement from '../../utils/string-to-element'
import headerHTML from './header.html'
import './header.scss'
///////////////////////////////////////////////////////////////////////////////
import svgIcons from '../../assets/svg/svg-set.js'
///////////////////////////////////////////////////////////////////////////////
import circularButtonComponent from '../circular-button/circular-button.js'
import logoComponent from '../logo/logo.js'
///////////////////////////////////////////////////////////////////////////////

const implementHeaderComponent = () => {
  const header = stringToElement(headerHTML)

  const logo = logoComponent({
    className: 'header__logo',
    imagePath: svgIcons.logoBrand,
    altText: 'Логотип компании CPS',
  })

  const buttonBurger = circularButtonComponent({
    iconsPath: svgIcons.iconButtonBurger,
    placeholder: 'Кнопка открыть меню',
  })

  const buttonCall = circularButtonComponent({
    iconsPath: svgIcons.iconCall,
    placeholder: 'Кнопка заказать звонок',
  })

  const buttonChat = circularButtonComponent({
    iconsPath: svgIcons.iconChat,
    placeholder: 'Кнопка открыть чат',
  })

  const buttonRequest = circularButtonComponent({
    iconsPath: svgIcons.iconRequest,
    placeholder: 'Кнопка перейти на страницу профиля',
  })

  const buttonProfile = circularButtonComponent({
    link: true,
    iconsPath: svgIcons.iconProfile,
    placeholder: 'Кнопка оставить заявку',
  })

  const buttonStatus = circularButtonComponent({
    link: true,
    iconsPath: svgIcons.iconCheckStatus,
    placeholder: 'Кнопка узнать статус ремонта',
  })

  /////////////////////////////////////////////////////////////////////////////

  header.querySelector('.header__left-section').append(buttonBurger,)
  header.querySelector('.header__center-section').prepend(logo)

  const headerContactList = [
    buttonCall,
    buttonChat,
    buttonProfile,
  ].forEach((elem) => {
    const listItem = document.createElement('li')
    listItem.append(elem)
    header.querySelector('.header__contact-list').append(listItem)
  })

  const headerRightSection = [
    buttonRequest,
    buttonStatus,
  ].forEach((elem) => {
    const listItem = document.createElement('li')
    listItem.append(elem)
    header.querySelector('.header__right-section').append(listItem)
  })

  return header
}

export default implementHeaderComponent()
