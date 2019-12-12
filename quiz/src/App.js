import React, { useState, useEffect } from 'react';
import './App.scss';
import Progress from './components/Progress/Progress'
import Question from './components/Question/Question'
import Answers from './components/Answers/Answers'
import Summery from './components/Summery/Summery'
import questionData from './questionData'
import { shuffleData } from './helper/shuffle'


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [summery, setSummery] = useState(false)
  const [questionsData, setQuestionsData] = useState([])
  /**
   * Using helper function shuffleData to suffle the data
  i get from my JSON file.7 
  **/
  useEffect(() => {
    shuffleData(questionData.results)
    let spreadQuestionsData = [...questionData.results]
    spreadQuestionsData.splice(10, 50)
    setQuestionsData(spreadQuestionsData)
  }, [])

  let data = questionsData[currentQuestion]

  /**
   * If target equals to the correct answer increment score with one.
   * Then update the state to show a new question
   */

  const correctScoreAndNextQuestion = e => {
    if (e.target.value === data.correct_answer) {
      setScore(score + 1)
    }
    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1)
      return
    }
    setSummery(true)
  }

  //Fix a good loading screen for the quiz so state can load :) 
  // Remove this quick fix
  if (data === undefined) {
    return <div>Loading...</div>
  }
  else if (summery) {
    return (
      <Summery score={score} total={questionsData.length} />
    )
  } else {
    return (
      <div className="container">
        <header>
          <h1>Movie Quiz</h1>
        </header>
        <main>
          <Progress total={questionsData.length} current={currentQuestion + 1} />
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
