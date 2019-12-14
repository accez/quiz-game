import React from 'react'
import Button from '../Button/Button'
import './start-screen-styles.scss'

const StartScreen = (props) => {
  return (
    <div className="container">
      <h1>Movie Quiz</h1>
      <div className="welcome-text">
        <h3>This is a movie quiz where you answer 10 film related questions.<br />
          You will have 15 seconds to answer each question.<br />
          You start with two life lines that you can use anytime in the game.
          50/50 that removes two of the incorrect answers, +10 that will add 10 seconds to your round.
          <br />
          <br />
          Good luck and have fun :)
         </h3>
      </div>
      <Button text="Start the game" onClick={() => props.setStartScreen(true)} />
    </div>
  )
}

export default StartScreen