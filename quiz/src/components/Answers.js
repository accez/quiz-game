import React from 'react'
import Answer from './Answer'

const Answers = (props) => {
  const data = props.answer
  const listAnswers = data.answers.map((answer, id) =>
    <Answer key={id} answer={answer} />
  )

  return (
    <div>
      {listAnswers}
    </div>
  )
}

export default Answers