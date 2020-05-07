import React from 'react'
import twitter from '../Assets/icons/twitter.svg'
import linkedin from '../Assets/icons/linkedin.svg'
import github from '../Assets/icons/github.svg'
import stackoverflow from '../Assets/icons/stackoverflow.svg'

interface SocialProps {
  icon: string;
  classes: string;
  link: string;
}

function Social (props: SocialProps): JSX.Element {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className={`social ${props.classes}`}>
        <img src={props.icon} alt={props.classes}/>
      </div>
    </a>
  )
}

function Socials (): JSX.Element {
  return (
    <div className='social-media'>
      <Social icon={github} classes='github' link="https://github.com/adrian-rom64"/>
      <Social icon={linkedin} classes='linkedin' link="https://www.linkedin.com/in/adrian-romanowski-1b69361a1/"/>
      <Social icon={stackoverflow} classes='stackoverflow' link="https://stackoverflow.com/users/12696645/adrian"/>
      <Social icon={twitter} classes='twitter' link="https://twitter.com/adrian_rom64"/>
    </div>
  )
}

export default Socials
