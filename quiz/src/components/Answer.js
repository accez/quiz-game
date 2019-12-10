import React from 'react'

const Answer = (props) => {
  return (
    <button value={props.number}>
      <p>{props.answer}</p>
    </button>
  )
}

export default Answer