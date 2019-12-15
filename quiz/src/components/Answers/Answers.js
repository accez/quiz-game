import React, { useState, useEffect } from 'react'
import Answer from '../Answer/Answer'
import { shuffleData } from '../../helper/shuffle'
import './answers-styles.scss'


const Answers = (props) => {
  const [rightAndWrong, setRightAndWrong] = useState([])
  const [unClickAnsw, setUnClickAnsw] = useState([])
  const [usedFiftyFiftyLifeline, setUsedFifyFiftyLifeline] = useState(false)

  let answers = [...props.answer.answers]
  shuffleData(answers)
  console.log(unClickAnsw, 'unclick')
  useEffect(() => {
    const fiftyFifty = () => {
      let arr = []
      let wrongAnswer = []
      let unclickableAnswers = []
      let getIndexOfWrongAnswerString
      let spreadLifelineAnswers = [...answers]
      let filteredCorrectAnswer = spreadLifelineAnswers.filter(correctAnswer => correctAnswer === props.answer.correct_answer)
      let indexOfCorrectAnswer = spreadLifelineAnswers.indexOf(props.answer.correct_answer)
      spreadLifelineAnswers.splice(indexOfCorrectAnswer, 1)
      var randomWrongAnswerIndex = Math.floor(Math.random() * spreadLifelineAnswers.length);
      spreadLifelineAnswers.filter((wrongAnswerOfArray, index) => {
        if (randomWrongAnswerIndex === index) {
          wrongAnswer.push(wrongAnswerOfArray)
          getIndexOfWrongAnswerString = wrongAnswerOfArray
        }
        return true
      })
      let getIndexOfWrongAnswer = spreadLifelineAnswers.indexOf(getIndexOfWrongAnswerString)
      spreadLifelineAnswers.splice(getIndexOfWrongAnswer, 1)

      unclickableAnswers = [...spreadLifelineAnswers]
      arr = [...filteredCorrectAnswer, ...wrongAnswer]
      setRightAndWrong(arr)
      setUnClickAnsw(unclickableAnswers)
    }
    fiftyFifty()
  }, [])

  console.log(answers)
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