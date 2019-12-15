import React from 'react'
import Answer from '../Answer/Answer'
import { shuffleData } from '../../helper/shuffle'
import './answers-styles.scss'


const Answers = (props) => {

  let answers = [...props.answer.answers]
  shuffleData(answers)


  const fityFifty = () => {
    let arr = []
    let wrongAnswer = []
    let spreadLifelineAnswers = [...answers]
    let filteredCorrectAnswer = spreadLifelineAnswers.filter(correctAnswer => correctAnswer === props.answer.correct_answer)
    let indexOfCorrectAnswer = answers.indexOf(props.answer.correct_answer)
    spreadLifelineAnswers.splice(indexOfCorrectAnswer, 1)
    var randomWrongAnswerIndex = Math.floor(Math.random() * spreadLifelineAnswers.length);
    spreadLifelineAnswers.filter((wrongAnswerOfArray, index) => {
      if (randomWrongAnswerIndex === index) {
        wrongAnswer.push(wrongAnswerOfArray)
      }
    })
    arr = [...filteredCorrectAnswer, ...wrongAnswer]
    console.log(arr)
  }
  fityFifty()

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