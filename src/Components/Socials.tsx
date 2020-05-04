import React from 'react'
import twitter from '../Assets/icons/twitter.svg'
import linkedin from '../Assets/icons/linkedin.svg'
import github from '../Assets/icons/github.svg'
import stackoverflow from '../Assets/icons/stackoverflow.svg'

interface SocialProps {
  icon: string;
  classes: string;
}

function Social (props: SocialProps): JSX.Element {
  return (
    <a href="#">
      <div className={`social ${props.classes}`}>
        <img src={props.icon} alt={props.classes}/>
      </div>
    </a>
  )
}

function Socials (): JSX.Element {
  return (
    <div className='social-media'>
      <Social icon={github} classes='github'/>
      <Social icon={linkedin} classes='linkedin'/>
      <Social icon={stackoverflow} classes='stackoverflow' />
      <Social icon={twitter} classes='twitter'/>
    </div>
  )
}

export default Socials
