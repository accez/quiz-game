import React, { useState } from 'react';
import './App.scss';
import Progress from './components/Progress/Progress'
import Question from './components/Question/Question'
import Answers from './components/Answers/Answers'
import questionData from './questionData'
import { shuffleData } from './helper/shuffle'


function App() {
  let [currentQuestion, setCurrentQuestion] = useState(0)
  //Using helper function shuffleData to suffle the data
  //i get from my JSON file.7
  shuffleData(questionData.results)
  let copyData = [...questionData.results]
  copyData.splice(10, 50)
  const data = copyData[currentQuestion]
  console.log(copyData)

  //Function that changes the state of currentQuestion
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className="container">
      <header>
        <h1 >Movie Quiz</h1>
      </header>
      <main>
        <Progress total={copyData.length} current={currentQuestion + 1} />
        <Question question={data.question} />
        <Answers
          answer={data}
          nextQuestion={nextQuestion} />
      </main>
    </div>
  );
}

export default App;
