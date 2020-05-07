import React from 'react'
import Socials from '../Components/Socials'
import { Typography, Link, makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles({
  section: {
    margin: 20,
    color: '#aaa',
    fontSize: 14
  }
})

const About: React.FC = () => {
  const styles = useStyles()

  return (
    <section id="footer">
      <Typography variant="subtitle1" align="left" className={styles.section}>
        Design inspired by this <Link target="_blank" rel="noopener noreferrer" href="http://findmatthew.com">portfolio</Link>
        <br />
        Lading page image by <Link target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@the_real_napster">Dominik Lange</Link>
        <br />
        Adrian Romanowski &copy; 2020
      </Typography>
      <Typography variant="subtitle1" className={styles.section}>
        <Link color="primary" href="mailto:adrian.rom64@gmail.com">adrian.rom64@gmail.com</Link>
        <br />
        <Link color="primary">+48 732 013 011</Link>
      </Typography>
      <Box className={styles.section}>
        <Socials />
      </Box>
    </section>
  )
}

export default About
