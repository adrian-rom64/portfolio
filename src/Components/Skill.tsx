import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

interface SkillProps {
  label: string;
  progress: number;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%'
  },
  progress: {
    height: 25,
    width: '100%'
  },
  label: {
    height: 23,
    width: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid var(--primary) 1px',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    fontSize: 14
  },
  value: {
    backgroundColor: 'var(--primary)',
    height: 25,
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#eee',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    fontSize: 14
  }
})

function Skill (props: SkillProps): JSX.Element {
  const styles = useStyles()

  return (
    <Box className={styles.root}>
      <Box className={styles.label}>
        {props.label}
      </Box>
      <LinearProgress
        value={props.progress}
        variant="determinate"
        className={styles.progress}
      />
      <Box className={styles.value}>
        {props.progress}%
      </Box>
    </Box>
  )
}

export default Skill
