import React from 'react'
import './button-styles.scss'

const Button = (props) => {
  return (
    <button text={props.text} onClick={props.onClick} value={props.value}>
      {props.text}
    </button>
  )
}

export default Button