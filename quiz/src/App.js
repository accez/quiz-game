import React, { useState, useEffect } from 'react';
import './App.scss';
import Progress from './components/Progress/Progress'
import Question from './components/Question/Question'
import Answers from './components/Answers/Answers'
import Summery from './components/Summery/Summery'
import StartScreen from './components/StartScreen/StartScreen'
import Timer from './components/Timer/Timer'
import Lifeline from './components/Lifeline/LifeLine'
import questionData from './questionData'
import { shuffleData } from './helper/shuffle'


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [unanswered, setUnanswered] = useState(0)
  const [summery, setSummery] = useState(false)
  const [questionsData, setQuestionsData] = useState([])
  const [startScreen, setStartScreen] = useState(false)
  const [addTenLifeline, setAddTenLifeline] = useState(true)
  const [fifyFifyLifeline, setFiftyFiftyLifeline] = useState(true)
  const [numberOfGames, setNumberOfGames] = useState(1)

  let data = questionsData[currentQuestion]

  useEffect(() => {
    /**
  * Using helper function shuffleData to suffle the data
  i get from my JSON file.
  But i only wanna do it the first time the quiz renders
  **/
    shuffleData(questionData.results)
    let spreadQuestionsData = [...questionData.results]
    spreadQuestionsData.splice(10, 50)
    setQuestionsData(spreadQuestionsData)
  }, [numberOfGames])

  //Restarting the game
  const restartQuiz = () => {
    setScore(0)
    setCurrentQuestion(0)
    setUnanswered(0)
    setAddTenLifeline(true)
    setFiftyFiftyLifeline(true)
    setNumberOfGames(numberOfGames + 1)
    setSummery(false)
  }

  /* 
  incramenting unanswered by one if you did not answer in time.
  */
  const unansweredIncrament = () => {
    setUnanswered(unanswered + 1)
  }

  /* Lifeline sets to true so you cant use a lifeline twice */
  const removeTenLifeline = () => {
    setAddTenLifeline(false)
  }

  // same as removeTenLifeline function
  const removeFiftyFifty = () => {
    setFiftyFiftyLifeline(false)
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
        total={questionsData.length}
        restartQuiz={restartQuiz}
      />
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
            unansweredIncrament={unansweredIncrament}
            addTenLifeline={addTenLifeline}
          />
        </header>
        <main>
          <Progress
            total={questionsData.length}
            current={currentQuestion + 1} />
          <Question question={data.question} />
          <div className="lifeline-container">
            {addTenLifeline ? <Lifeline text="+10sec" onClick={removeTenLifeline} /> : <React.Fragment />}
            {fifyFifyLifeline ? <Lifeline text="50/50" onClick={removeFiftyFifty} /> : <React.Fragment />}
          </div>
          <Answers
            answer={data}
            correctScoreAndNextQuestion={correctScoreAndNextQuestion}
            fifyFifyLifeline={fifyFifyLifeline}
          />
        </main>
      </div>
    );
  }
}

export default App;
