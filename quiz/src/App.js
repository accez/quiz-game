import React from 'react';
import './App.scss';
import Progress from './components/Progress/Progress'
import Question from './components/Question/Question'
import Answers from './components/Answers/Answers'
import questionData from './questionData'


function App() {

  const data = questionData.results[0]
  return (
    <div className="container">
      <header>
        <h1>Movie Quiz</h1>
      </header>
      <main>
        <Progress total="10" current="1" />
        <Question question={data.question} />
        <Answers answer={data} />
      </main>
    </div>
  );
}

export default App;
