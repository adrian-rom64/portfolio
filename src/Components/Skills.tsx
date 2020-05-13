import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Skill from './Skill'

const useStyles = makeStyles({
  root: {
    textAlign: 'left',
    minWidth: 250,
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 360
  },
  title: {
    fontSize: 30,
    marginBottom: 15
  },
  disclaimer: {
    fontSize: 12,
    marginTop: 5,
    color: '#666'
  }
})

interface SkillsProps {
  style?: React.CSSProperties;
}

function Skills (props: SkillsProps): JSX.Element {
  const styles = useStyles()

  return (
    <Box className={styles.root} style={{ ...props.style }}>
      <Box className={styles.title}>
        My top skills
      </Box>
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
      <Box className={styles.disclaimer}>
        *This is very subjective though 😀
      </Box>
    </Box>
  )
}

export default Skills
