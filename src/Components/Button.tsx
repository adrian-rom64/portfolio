import React, { useState } from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import colors from '../Variables/colors'

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const useStyles = makeStyles({
  button: {
    background: 'unset',
    backgroundColor: 'black',
    color: '#eee',
    fontSize: 20,
    cursor: 'pointer',
    display: 'inline-block',
    padding: 10,
    lineHeight: 'normal',
    borderRadius: 2,
    margin: 10,
    outline: 'none',
    width: 100,
    border: 'solid var(--secondary) 2px'
  }
})

function Button (props: ButtonProps): JSX.Element {
  const styles = useStyles()
  const standard = props.variant ?? 'primary'
  const alternative = standard === 'primary' ? 'secondary' : 'primary'

  const [hover, setHover] = useState(false)

  const clickHandler = (): void => {
    if (!props.onClick) return
    props.onClick()
  }

  const overrideStyle: React.CSSProperties = {
    border: `solid ${hover ? colors[alternative] : colors[standard]} 2px`
  }

  return (
    <button
      onClick={clickHandler}
      className={styles.button}
      style={overrideStyle}
      onMouseEnter={(): void => setHover(true)}
      onMouseLeave={(): void => setHover(false)}
    >
      {props.label}
    </button>
  )
}

export default Button
