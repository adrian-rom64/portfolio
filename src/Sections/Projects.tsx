import React from 'react'
import ProjectCover from '../Components/ProjectCover'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10
  },
  container: {
    maxWidth: 1300
  },
  text: {
  }
})

const Projects: React.FC = () => {
  const styles = useStyles()

  return (
    <Box id="projects" className={styles.root}>
      <Typography variant="h3" gutterBottom className={styles.text}>
        My projects
      </Typography>
      <Box className={styles.container}>
        <ProjectCover />
        <ProjectCover />
        <ProjectCover />
        <ProjectCover />
        <ProjectCover />
        <ProjectCover />
        <ProjectCover />
        <ProjectCover />
      </Box>
    </Box>
  )
}

export default Projects
