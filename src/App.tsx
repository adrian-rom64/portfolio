import React, { Suspense } from 'react'
import Splash from './Sections/Splash'
import Scroll from './Components/Scroll'

const About = React.lazy(() => import('./Sections/About'))
const Traits = React.lazy(() => import('./Sections/Traits'))
const Projects = React.lazy(() => import('./Sections/Projects'))
const Contact = React.lazy(() => import('./Sections/Contact'))
const Footer = React.lazy(() => import('./Sections/Footer'))

const App: React.FC = () => {
  return (
    <div className="App">
      <Scroll />
      <Splash />
      <Suspense fallback={<span>Loading...</span>}>
        <About />
        <Traits />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
