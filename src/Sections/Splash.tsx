import React from 'react'
import BackgroundImage from '../Assets/bg.jpg'
import Button from '../Components/Button'
import colors from '../Variables/colors'
import { goto } from '../utils'
import { Slide } from '@material-ui/core'

const convertToSpans = (str: string): Array<JSX.Element> => {
  return str.split('').map((letter, index) => <span key={index} className="letter">{letter}</span>)
}

const Splash: React.FC = () => {
  return (
    <section id="splash" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={800}>
        <div className="splash-text">
          <React.Fragment>
            <span style={{ color: colors.secondary }}>{convertToSpans('Hi')}</span>
            <span>{convertToSpans(', my name is ')}</span>
            <span style={{ color: colors.primary }}>{convertToSpans('Chris Hemsworth')}</span>
            <span style={{ color: colors.secondary }}>{convertToSpans('.')}</span>
          </React.Fragment>
          <br />
          <React.Fragment>
            <span>{convertToSpans('I\'m a fullstack developer')}</span>
            <span style={{ color: colors.secondary }}>{convertToSpans('.')}</span>
          </React.Fragment>
          <br />
          <div className="splash-buttons">
            <Button label="About" onClick={(): void => goto('about')}/>
            <Button label="Contact" onClick={(): void => goto('contact')}/>
          </div>
        </div>
      </Slide>
    </section>
  )
}

export default Splash
