import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles, CardActions, Zoom } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    minHeight: '300px',
    margin: '10px',
    width: '280px',
    textAlign: 'left'
  },
  media: {
    height: 140,
    width: '100%'
  },
  content: {
    height: 80
  }
})

interface ProjectCoverProps {
  title: string;
  type: string;
  desc: string;
  image: string;
  links: any;
  grow: boolean;
}

function ProjectCover (props: ProjectCoverProps): JSX.Element {
  const classes = useStyles()

  const [visible, setVisible] = useState(false)

  const getImage = (name: string): string => {
    return `${window.location.origin}/images/${name}`
  }

  useEffect(() => {
    if (props.grow) {
      setTimeout(() => setVisible(true), Math.random() * 1000)
    }
  }, [props.grow])

  return (
    <Zoom in={visible} timeout={700}>
      <Card className={classes.root}>
        <CardHeader
          title={props.title}
        />
        <CardMedia
          image={getImage(props.image)}
          title={props.title}
          className={classes.media}
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="text">Link</Button>
          <Button disabled color="primary" variant="text">Repository</Button>
        </CardActions>
      </Card>
    </Zoom>
  )
}

export default ProjectCover
