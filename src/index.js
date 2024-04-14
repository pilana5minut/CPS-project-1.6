import './index.scss'
import './index.html'

///////////////////////////////////////////////////////////////////////////////

const page = document.querySelector('.page')
const main = document.querySelector('.main')

///////////////////////////////////////////////////////////////////////////////

import headerComponent from './layout-part/header/header.js'
import menuMainComponent from './layout-part/menu-main/menu-main.js'
import heroSectionComponent from './layout-part/hero/hero.js'

/////////////////////////////////////////////////////////////////////////////

main.prepend(headerComponent())
page.prepend(menuMainComponent())
main.append(heroSectionComponent())
