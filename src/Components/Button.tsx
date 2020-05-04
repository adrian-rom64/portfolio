import React from 'react'

interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

function Button (props: ButtonProps): JSX.Element {
  const clickHandler = (): void => {
    if (!props.onClick) return
    props.onClick()
  }

  return (
    <button onClick={clickHandler} style={props.style} className="btn">{props.label}</button>
  )
}

export default Button
