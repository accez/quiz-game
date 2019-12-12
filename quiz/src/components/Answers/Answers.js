import React from 'react'
import Answer from '../Answer/Answer'
import { shuffleData } from '../../helper/shuffle'
import './answers-styles.scss'


const Answers = (props) => {

  let answers = [...props.answer.answers]
  shuffleData(answers)

  const listAnswers = answers.map((answer, index) =>
    <Answer
      key={index}
      answer={answer}
      correctScoreAndNextQuestion={props.correctScoreAndNextQuestion}
    />
  )

  return (
    <div className="answer-container">
      {listAnswers}
    </div>
  )
}

export default Answers