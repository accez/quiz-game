import React from 'react'

const Question = (props) => {
  return (
    <h2>{props.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</h2>
  )
}

export default Question