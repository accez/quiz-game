import React from 'react'

const Question = (props) => {
  return (
    <h2>{props.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&')}</h2>
  )
}

export default Question