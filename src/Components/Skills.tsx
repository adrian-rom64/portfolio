import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Skill from './Skill'

const useStyles = makeStyles({
  root: {

  },
  container: {
    maxWidth: 1300,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 360
  }
})

function Skills (): JSX.Element {
  const styles = useStyles()

  return (
    <Box className={styles.root}>
      <Box className={styles.container}>
        <Skill label="Javascript" progress={80} />
        <Skill label="Linux" progress={80} />
        <Skill label="React" progress={70} />
        <Skill label="Git" progress={70} />
        <Skill label="HTML/CSS" progress={70} />
        <Skill label="Express.js" progress={60} />
        <Skill label="Ruby on Rails" progress={50} />
        <Skill label="React Native" progress={40} />
        <Skill label="Typescript" progress={40} />
        <Skill label="MaterialUI" progress={30} />
      </Box>
    </Box>
  )
}

export default Skills
