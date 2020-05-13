import React, { useState, useEffect } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { goto } from '../utils'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'

import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import Home from '@material-ui/icons/Home'
import Person from '@material-ui/icons/Person'
import List from '@material-ui/icons/List'
import LocalPhone from '@material-ui/icons/LocalPhone'
import ArrowDown from '@material-ui/icons/ArrowDownward'

const useStyles = makeStyles({
  scroll: {
    position: 'fixed',
    right: 20,
    bottom: 30
  }
})

function Scroll (): JSX.Element {
  const styles = useStyles()

  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!show) setOpen(false)
  }, [show])

  const actions = [
    { name: 'Bottom', icon: <ArrowDown />, section: 'footer' },
    { name: 'Contact', icon: <LocalPhone />, section: 'contact' },
    { name: 'Projects', icon: <List />, section: 'projects' },
    { name: 'About', icon: <Person />, section: 'about' },
    { name: 'Home', icon: <Home />, section: 'splash' }
  ]

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

  const handleClick = (section: string): void => {
    goto(section)
    setOpen(false)
  }

  const actionsMap = actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
      onClick={(): void => handleClick(action.section)}
    />
  ))

  return (
    <React.Fragment>
      <SpeedDial
        className={styles.scroll}
        ariaLabel="menu"
        open={open && show}
        hidden={!show}
        icon={<SpeedDialIcon style={{ color: 'white' }} />}
        onOpen={(): void => setOpen(true)}
        onClose={(): void => setOpen(false)}
        direction={window.innerWidth > 500 ? 'left' : 'up'}
      >
        {actionsMap}
      </SpeedDial>
    </React.Fragment>

  )
}

export default Scroll
