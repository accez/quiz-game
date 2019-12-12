import React from 'react'

const Summery = (props) => {


  return (
    <div className="container">
      <h1>Summery</h1>
      <h2>Your scored: {props.score} out of {props.total}</h2>
      <h2>You missed out on {(10 - props.score)} points.</h2>
    </div>
  )
}

export default Summery