import React from 'react'
import ProjectCover from '../Components/ProjectCover'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import projects from '../Variables/projects'

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
  },
  text: {
    fontSize: 32,
    marginBottom: 30
  }
})

const Projects: React.FC = () => {
  const styles = useStyles()

  const mapping = projects.map((project, index) => <ProjectCover key={index} {...project} />)

  return (
    <Box id="projects" className={styles.root}>
      <Box className={styles.text}>
        Projects that I worked on
      </Box>
      <Box className={styles.container}>
        {mapping}
      </Box>
    </Box>
  )
}

export default Projects
