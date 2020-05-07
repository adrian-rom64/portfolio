import React, { useState, useEffect } from 'react'
import Skills from '../Components/Skills'
// TODO Rewrite those to make the app faster
// TODO start lazy loading
import { makeStyles, Box, Slide, createStyles, Theme } from '@material-ui/core'
import Bio from '../Components/Bio'
import { onScroll } from '../utils'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      paddingTop: 30,
      paddingBottom: 30,
      minHeight: 300
    },
    container: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      },
      justifyContent: 'space-evenly',
      alignItems: 'center',
      maxWidth: 1300,
      margin: 'auto'
    },
    box: {
      width: '45%',
      [theme.breakpoints.down('sm')]: {
        width: '95%'
      },
      padding: 30
    }
  })
)

const About: React.FC = () => {
  const styles = useStyles()
  const [show, setShow] = useState(false)

  useEffect(() => {
    onScroll('about', () => {
      if (!show) setShow(true)
    })
  }, [])

  return (
    <Box id="about" className={styles.root}>
      <Box className={styles.container}>
        <Slide direction="right" in={show} timeout={600}>
          <Box className={styles.box}>
            <Bio />
          </Box>
        </Slide>
        <Slide direction="left" in={show} timeout={600}>
          <Box className={styles.box}>
            <Skills />
          </Box>
        </Slide>
      </Box>
    </Box>
  )
}

export default About
