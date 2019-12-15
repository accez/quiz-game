import React from 'react'
import Button from '../Button/Button'

const Summery = (props) => {


  return (
    <div className="container">
      <h1>Summery</h1>
      <h2>Your scored: {props.score} out of {props.total}</h2>
      <h2>You missed out on {(10 - props.unanswered - props.score)} points.</h2>
      <h2>You had {props.unanswered} unanswered questions</h2>
      <Button text="Restart game" onClick={props.restartQuiz} />
    </div>
  )
}

export default Summery