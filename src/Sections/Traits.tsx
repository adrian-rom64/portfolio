import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/styles/makeStyles'
import Slide from '@material-ui/core/Slide'
import { onScroll } from '../utils'

import Code from '@material-ui/icons/Code'
import Speed from '@material-ui/icons/Speed'
import Module from '@material-ui/icons/ViewModule'
import Done from '@material-ui/icons/DoneAll'

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'white',
    paddingBottom: 30
  },
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    maxWidth: 1300,
    margin: 'auto'
  },
  trait: {
    display: 'flex',
    flexDirection: 'column',
    width: 90
  },
  icon: {
    fontSize: 90,
    color: '#0074D9'
  },
  text: {
    fontSize: 20,
    opacity: 0.5
  }
})

const Traits = (): JSX.Element => {
  const styles = useStyles()
  const [show, setShow] = useState(false)

  useEffect(() => {
    onScroll('traits', () => {
      if (!show) setShow(true)
    })
  }, [])

  return (
    <Box id="traits" className={styles.root}>
      <Box className={styles.container}>
        <Slide in={show} direction="right" timeout={600}>
          <Box className={styles.trait}>
            <Code className={styles.icon} />
            <Box className={styles.text}>Clean</Box>
          </Box>
        </Slide>
        <Slide in={show} direction="right" timeout={600}>
          <Box className={styles.trait}>
            <Speed className={styles.icon} />
            <Box className={styles.text}>Fast</Box>
          </Box>
        </Slide>
        <Slide in={show} direction="left" timeout={600}>
          <Box className={styles.trait}>
            <Module className={styles.icon} />
            <Box className={styles.text}>Modular</Box>
          </Box>
        </Slide>
        <Slide in={show} direction="left" timeout={600}>
          <Box className={styles.trait}>
            <Done className={styles.icon} />
            <Box className={styles.text}>Testable</Box>
          </Box>
        </Slide>
      </Box>
    </Box>
  )
}

export default Traits
