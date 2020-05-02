import React from 'react'
import BackgroundImage from '../Assets/bg.jpg'
import Button from '../Components/Button'
import colors from '../Variables/colors'
import { goto } from '../utils'

const Splash: React.FC = () => {
  return (
    <section id="splash" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="splash-text">
        <React.Fragment>
          <span>Hi, my name is </span>
          <span style={{ color: colors.primary }}>Adrian Romanowski</span>
          <span style={{ color: colors.secondary }}>.</span>
        </React.Fragment>
        <br />
        <React.Fragment>
          <span>I&apos;m a fullstack developer</span>
          <span style={{ color: colors.secondary }}>.</span>
        </React.Fragment>
        <br />
        <div className="splash-buttons">
          <Button label="About" onClick={(): void => goto('about')}/>
          <Button label="Contact" onClick={(): void => goto('contact')}/>
        </div>
      </div>
    </section>
  )
}

export default Splash
