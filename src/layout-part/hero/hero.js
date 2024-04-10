import stringToElement from '../../js/utils/stringToElement'
import heroHTML from './hero.html'
import './hero.scss'
///////////////////////////////////////////////////////////////////////////////

const implementHeroSectionComponent = () => {
  const heroElement = stringToElement(heroHTML)
  return heroElement
}

export default implementHeroSectionComponent
