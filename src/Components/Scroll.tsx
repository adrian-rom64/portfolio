import React, { useState, useEffect } from 'react'
import { Box, makeStyles, Grow } from '@material-ui/core'
import { goto } from '../utils'
import { ArrowUpward } from '@material-ui/icons'

const useStyles = makeStyles({
  marker: {
    height: 0
  },
  scroll: {
    position: 'fixed',
    right: 20,
    bottom: 30,
    width: 40,
    height: 40,
    borderRadius: 25,
    cursor: 'pointer',
    border: 'solid var(--secondary) 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  }
})

function Scroll (): JSX.Element {
  const styles = useStyles()

  const [show, setShow] = useState(false)

  const listener = (): void => {
    const splashHeight = document.getElementById('splash')?.clientHeight
    if (!splashHeight) return
    if (splashHeight / 2 < window.scrollY) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
  }, [])

  return (
    <React.Fragment>
      <Box className={styles.marker} id="top" />
      <Grow in={show} timeout={500}>
        <Box className={styles.scroll} onClick={(): void => goto('top')}>
          <ArrowUpward color="primary" fontSize="large" />
        </Box>
      </Grow>
    </React.Fragment>

  )
}

export default Scroll
