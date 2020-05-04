import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles, CardActions } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grow from '@material-ui/core/Grow'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    minHeight: '300px',
    margin: '10px',
    width: '300px',
    textAlign: 'left'
  },
  media: {
    height: 150,
    width: '100%'
  }
})

function ProjectCover (): JSX.Element {
  const classes = useStyles()

  return (
    <Grow in={true} >
      <Card className={classes.root}>
        <CardHeader
          title="Project"
        />
        <CardMedia
          image={`https://picsum.photos/300/150?${Math.random()}`}
          title="hello"
          className={classes.media}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="text">Link</Button>
          <Button disabled color="primary" variant="text">Repository</Button>
        </CardActions>
      </Card>
    </Grow>
  )
}

export default ProjectCover
