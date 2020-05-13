import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '../Components/Button'
import colors from '../Variables/colors'
import { goto } from '../utils'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      width: '100vw',
      backgroundColor: colors.splashBackground,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: 'solid green 4px'
    },
    text: {
      fontSize: 45,
      color: '#eee',
      fontWeight: 500,
      textAlign: 'right',
      lineHeight: 1.8,
      padding: 10,
      letterSpacing: 0.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: 20
      }
    },
    divider: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    }
  })
)

const Splash: React.FC = () => {
  const styles = useStyles()

  const text = (content: string, color = 'white'): JSX.Element => {
    return <span style={{ color }}>{content}</span>
  }

  return (
    <Box id="splash" className={styles.root}>
      <Box>
        <Zoom in={true} mountOnEnter unmountOnExit timeout={600}>
          <Box className={styles.text}>
            {text('Hi', colors.secondary)}
            {text(', my ')}
            {text('n', colors.primary)}
            {text('ame is ')}
            <Box className={styles.divider} />
            {text('Adrian Romanowski', colors.primary)}
            {text('.', colors.secondary)}
            <br />
            {text('I\'m a fullst')}
            {text('a', colors.primary)}
            {text('ck develo')}
            {text('p', colors.primary)}
            {text('er')}
            {text('.', colors.secondary)}
            <br />
            <Box className="splash-buttons">
              <Button label="About" variant="primary" onClick={(): void => goto('about')}/>
              <Button label="Contact" variant="secondary" onClick={(): void => goto('contact')}/>
            </Box>
          </Box>
        </Zoom>
      </Box>
    </Box>
  )
}

export default Splash
