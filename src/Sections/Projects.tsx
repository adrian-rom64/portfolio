import React, { useState, useEffect } from 'react'
import ProjectCover from '../Components/ProjectCover'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import projects from '../Variables/projects'
import { onScroll } from '../utils'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 30,
    paddingBottom: 30
  },
  container: {
    maxWidth: 1200
  }
})

const Projects: React.FC = () => {
  const styles = useStyles()

  const [show, setShow] = useState(false)

  useEffect(() => {
    onScroll('projects', () => {
      if (!show) setShow(true)
    })
  }, [])

  const mapping = projects.map((project, index) => <ProjectCover key={index} grow={show} {...project} />)

  return (
    <Box id="projects" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Projects that I worked on
      </Typography>
      <Box className={styles.container}>
        {mapping}
      </Box>
    </Box>
  )
}

export default Projects
