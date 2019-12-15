import React from 'react'
import './lifeline-styles.scss'

const Lifeline = (props) => {
  return (
    <button className="lifeline" text={props.text} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Lifeline