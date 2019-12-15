import React from 'react'

const Lifeline = (props) => {
  return (
    <button className="lifeline-container" text={props.text} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Lifeline