import React from 'react'
import Answer from '../Answer/Answer'
import './answers-styles.scss'


const Answers = (props) => {
  const listAnswers = props.answer.answers.map((answer, index) =>
    <Answer
      key={index}
      answer={answer}
      nextQuestion={props.nextQuestion} />
  )

  return (
    <div className="answer-container">
      {listAnswers}
    </div>
  )
}

export default Answers