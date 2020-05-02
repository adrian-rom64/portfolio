import React from 'react'

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

function Button (props: ButtonProps): JSX.Element {

  const clickHandler = (): void => {
    if (!props.onClick) return
    props.onClick()
  }

  return (
    <button onClick={clickHandler} className="btn">{props.label}</button>
  )
}

export default Button
