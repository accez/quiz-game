import React, { useState, useEffect } from 'react'
import Answer from '../Answer/Answer'
import { shuffleData } from '../../helper/shuffle'
import './answers-styles.scss'


const Answers = (props) => {
  const [unClickAnsw, setUnClickAnsw] = useState([])

  let answers = [...props.answer.answers]
  shuffleData(answers)

  useEffect(() => {
    /**
     * Removing the correct answer from the answer array
     * then choosing a random item from the incorrect answers and removing it aswell
     * Then ill save the two remaining incorrect annswers in unclickableAnswers
     * Then ill set the setUnClickAnsw if lifeline is true
     */

    const fiftyFifty = () => {
      let unclickableAnswers = []
      let getIndexOfWrongAnswerString
      let spreadLifelineAnswers = [...answers]
      let indexOfCorrectAnswer = spreadLifelineAnswers.indexOf(props.answer.correct_answer)
      spreadLifelineAnswers.splice(indexOfCorrectAnswer, 1)
      var randomWrongAnswerIndex = Math.floor(Math.random() * spreadLifelineAnswers.length);
      spreadLifelineAnswers.filter((wrongAnswerOfArray, index) => {
        if (randomWrongAnswerIndex === index) {
          getIndexOfWrongAnswerString = wrongAnswerOfArray
        }
        return true
      })
      let getIndexOfWrongAnswer = spreadLifelineAnswers.indexOf(getIndexOfWrongAnswerString)
      spreadLifelineAnswers.splice(getIndexOfWrongAnswer, 1)
      unclickableAnswers = [...spreadLifelineAnswers]
      if (props.fifyFifyLifeline) {
        setUnClickAnsw(unclickableAnswers)
      }
    }
    fiftyFifty()
    // eslint-disable-next-line
  }, [props.answer])


  const listAnswers = answers.map((answer, index) => {
    if (!props.fifyFifyLifeline && unClickAnsw.includes(answer)) {
      return (
        < Answer
          lifeline={true}
          key={index}
          answer={answer}
          correctScoreAndNextQuestion={props.correctScoreAndNextQuestion}
        />)
    } else if (props.fifyFifyLifeline === false) {
      return (
        < Answer
          key={index}
          answer={answer}
          correctScoreAndNextQuestion={props.correctScoreAndNextQuestion}
        />)
    } else {
      return (
        < Answer
          key={index}
          answer={answer}
          correctScoreAndNextQuestion={props.correctScoreAndNextQuestion}
        />)
    }
  })


  return (
    <div className="answer-container">
      {listAnswers}
    </div>
  )
}

export default Answers