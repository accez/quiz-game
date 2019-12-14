import React, { useState, useEffect } from 'react';
import './App.scss';
import Progress from './components/Progress/Progress'
import Question from './components/Question/Question'
import Answers from './components/Answers/Answers'
import Summery from './components/Summery/Summery'
import StartScreen from './components/StartScreen/StartScreen'
import Timer from './components/Timer/Timer'
import questionData from './questionData'
import { shuffleData } from './helper/shuffle'


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [unanswered, setUnanswered] = useState(0)
  const [summery, setSummery] = useState(false)
  const [questionsData, setQuestionsData] = useState([])
  const [startScreen, setStartScreen] = useState(false)
  let data = questionsData[currentQuestion]
  /**
   * Using helper function shuffleData to suffle the data
  i get from my JSON file.
  **/
  useEffect(() => {
    shuffleData(questionData.results)
    let spreadQuestionsData = [...questionData.results]
    spreadQuestionsData.splice(10, 50)
    setQuestionsData(spreadQuestionsData)
  }, [])


  const unansweredIncrament = () => {
    setUnanswered(unanswered + 1)
  }

  const correctScoreAndNextQuestion = e => {
    /** if target value equals correct answer increment score */
    if (e.target.value === data.correct_answer) {
      setScore(score + 1)
    }
    /**currentQuestion is less then array data then we increment currentQuestion to get a new question.
     * If not we want our SummeryPage to load.
     */
    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1)
      return
    }
    setSummery(true)
  }

  if (startScreen === false) {
    return (
      <StartScreen setStartScreen={setStartScreen} />
    )
  }
  else if (summery) {
    return (
      <Summery
        score={score}
        unanswered={unanswered}
        total={questionsData.length} />
    )
  } else {
    return (
      <div className="container">
        <header>
          <h1>Movie Quiz</h1>
          <Timer seconds={15}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setSummery={setSummery}
            unansweredIncrament={unansweredIncrament} />
        </header>
        <main>
          <Progress
            total={questionsData.length}
            current={currentQuestion + 1} />
          <Question question={data.question} />
          <Answers
            answer={data}
            correctScoreAndNextQuestion={correctScoreAndNextQuestion}
          />
        </main>
      </div>
    );
  }
}

export default App;
