import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minWidth: 250
  },
  photo: {
    backgroundImage: 'url(https://picsum.photos/250)',
    width: 250,
    height: 250,
    borderRadius: 125,
    margin: 20,
    border: 'solid var(--secondary) 4px'
  },
  text: {
    textAlign: 'justify',
    color: '#444',
    maxWidth: 400
  }
})

function Bio (props: any): JSX.Element {
  const styles = useStyles()

  return (
    <Box className={styles.root} style={{ ...props.style }}>
      <Box className={styles.photo} />
      <Typography variant="h5" gutterBottom>
        That&apos;s me
      </Typography>
      <Typography className={styles.text}>
        I&apos;m a web developer. I enjoy both backend and frontend coding. Currently I work at
        <Link target="_blank" rel="noopener noreferrer" href="http://itelab.eu"> Itelab</Link>.
        Recently I&apos;m stoked about building web apps with React/MaterialUI and mobile apps with React Native,
        running on firebase backend and cloud functions.
      </Typography>
    </Box>
  )
}

export default Bio
