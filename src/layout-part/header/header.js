import stringToElement from '../../js/utils/stringToElement'
import headerHTML from './header.html'
import './header.scss'
///////////////////////////////////////////////////////////////////////////////

const implementHeaderComponent = () => {
  const headerElement = stringToElement(headerHTML)
  return headerElement
}

export default implementHeaderComponent
