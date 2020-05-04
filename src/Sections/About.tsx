import React from 'react'
import Skills from '../Components/Skills'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

const About: React.FC = () => {
  const styles = useStyles()

  return (
    <Box id="about" className={styles.root}>
      <div>Hello</div>
      <Skills />
    </Box>
  )
}

export default About
