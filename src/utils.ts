export const goto = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (!element) {
    console.warn(`Element ${elementId} not found`)
    return
  }
  element.scrollIntoView({ behavior: 'smooth' })
}

export const onScroll = (elementId: string, callback: () => void): void => {
  const listener = (): void => {
    const element = document.getElementById(elementId)
    if (!element) {
      console.warn(`Element ${elementId} not found`)
      return
    }
    if (window.scrollY > element.offsetTop - window.innerHeight * 0.75) {
      callback()
    }
  }
  window.addEventListener('scroll', listener)
}
