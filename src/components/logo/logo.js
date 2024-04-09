import stringToElement from '../../utils/string-to-element'
import logoHTML from './logo.html'
import './logo.scss'
///////////////////////////////////////////////////////////////////////////////
import svgSet from '../../assets/svg/svg-set.js'
///////////////////////////////////////////////////////////////////////////////

const implementLogoComponent = ({
  className = [],
  imagePath,
  altText,
}) => {
  const logoElement = stringToElement(logoHTML)
  const logoImage = logoElement.querySelector('.logo__image')
  logoImage.alt = altText
  logoElement.classList.add(className)
  logoImage.src = imagePath

  return logoElement
}

export default implementLogoComponent
