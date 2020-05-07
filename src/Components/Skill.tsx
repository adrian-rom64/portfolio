import React from 'react'
import { LinearProgress, Box, makeStyles, Typography } from '@material-ui/core'

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
    width: '60%'
  },
  label: {
    height: 23,
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid var(--secondary) 1px',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    minWidth: 80
  },
  value: {
    backgroundColor: 'var(--secondary)',
    height: 25,
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#eee',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    minWidth: 50
  }
})

function Skill (props: SkillProps): JSX.Element {
  const styles = useStyles()

  return (
    <Box className={styles.root}>
      <Box className={styles.label}>
        <Typography variant="caption">
          {props.label}
        </Typography>
      </Box>
      <LinearProgress
        value={props.progress}
        variant="buffer"
        className={styles.progress}
        valueBuffer={props.progress}

      />
      <Box className={styles.value}>
        <Typography variant="caption">
          {props.progress}%
        </Typography>
      </Box>
    </Box>
  )
}

export default Skill
