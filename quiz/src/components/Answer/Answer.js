import React from 'react'
import './answer-styles.scss'

const Answer = (props) => {

  return (
    <button value={props.answer} onClick={props.correctScoreAndNextQuestion}>
      {props.answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&')}
    </button>
  )
}

export default Answer