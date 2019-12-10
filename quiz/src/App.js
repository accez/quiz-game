import React from 'react';
import './App.css';
import Progress from './components/Progress'
import Question from './components/Question'
import Answers from './components/Answers'
import questionData from './questionData'


function App() {

  const data = questionData.results[0]
  return (
    <div className="App">
      <Progress total="10" current="1" />
      <Question question={data.question} />
      <Answers answer={data} />
    </div>
  );
}

export default App;
