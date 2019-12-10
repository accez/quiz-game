import React from 'react'
import './answer-styles.scss'

const Answer = (props) => {
  return (
    <button value={props.number}>
      {props.answer}
    </button>
  )
}

export default Answer