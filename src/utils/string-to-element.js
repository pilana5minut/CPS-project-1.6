export default function (stringHTML) {
  const template = document.createElement('template')
  template.innerHTML = stringHTML
  const element = template.content.firstChild
  return element
}
