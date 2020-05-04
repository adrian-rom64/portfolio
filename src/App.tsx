import React from 'react'
import Scroll from './Components/Scroll'
import Splash from './Sections/Splash'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Scroll />
      <Splash />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
