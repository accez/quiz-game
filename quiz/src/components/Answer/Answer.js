import React from 'react'
import Button from '../Button/Button'

const Answer = (props) => {

  return (
    <Button value={props.answer} onClick={props.correctScoreAndNextQuestion} text={props.answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&')} />
  )
}

export default Answer