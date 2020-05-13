import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CardActions from '@material-ui/core/CardActions'
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
}

function ProjectCover (props: ProjectCoverProps): JSX.Element {
  const styles = useStyles()

  const getImage = (name: string): string => {
    return `${window.location.origin}/images/${name}`
  }

  const clickHandler = (link: string): void => {
    const doc = window.open(link, '_blank')
    return doc?.focus()
  }

  const links = Object.keys(props.links).map((key) => {
    if (!props.links[key]) {
      return <Button key={key} disabled color="primary" variant="text">{key}</Button>
    }
    return (
      <Button
        key={key}
        onClick={(): void => clickHandler(props.links[key])}
        color="primary"
        variant="text"
      >
        {key}
      </Button>
    )
  })

  return (
    <Card className={styles.root}>
      <CardHeader
        title={props.title}
      />
      <CardMedia
        image={getImage(props.image)}
        title={props.title}
        className={styles.media}
      />
      <CardContent className={styles.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        {links}
      </CardActions>
    </Card>
  )
}

export default ProjectCover
