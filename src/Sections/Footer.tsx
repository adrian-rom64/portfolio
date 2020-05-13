import React from 'react'
import Socials from '../Components/Socials'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

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
