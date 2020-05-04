import React from 'react'
import Socials from '../Components/Socials'
import Link from '@material-ui/core/Link'

const About: React.FC = () => {
  return (
    <section id="footer">
      <div style={{ color: 'white' }}>
        Thanks to dfg jdgh jdfhg
      </div>
      <div>
        <Link color="secondary" href="mailto:adrian.rom64@gmail.com">adrian.rom64@gmail.com</Link>
        <br /><br />
        <Link color="secondary" style={{ cursor: 'pointer' }}>+48 732 013 011</Link>
      </div>
      <Socials />
    </section>
  )
}

export default About
