export const goto = (id: string): void => {
  const element = document.getElementById(id)
  if (!element) {
    console.warn(`Element ${element} not found`)
    return
  }
  element.scrollIntoView({ behavior: 'smooth' })
}
