import React from 'react'
import Answer from '../Answer/Answer'
import './answers-styles.scss'


const Answers = (props) => {
  const data = props.answer
  const listAnswers = data.answers.map((answer, id) =>
    <Answer key={id} answer={answer} />
  )

  return (
    <div className="answer-container">
      {listAnswers}
    </div>
  )
}

export default Answers