import React, { useState, useEffect } from 'react'

const Timer = (props) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(props.seconds)
  const [currentQuestion, setCurrentQuestion] = useState(props.currentQuestion)
  const [usedLifeline, setUsedLifeline] = useState(false)

  //adds 10 seconds and changes state of setUsedLifeline
  if (props.addTenLifeline === false && !usedLifeline) {
    setTimeLeft(timeLeft + 10)
    setUsedLifeline(true)
  }
  useEffect(() => {

    // when timesleft reaches 0 if will go to next question and incrament 
    // also add 15 seconds to
    if (timeLeft === 0) {
      props.setCurrentQuestion(props.currentQuestion + 1)
      props.unansweredIncrament()
      setTimeLeft(15)
    }
    //No time left and all question answered go to summery
    if (timeLeft === 0 && currentQuestion + 1 >= 10) {
      props.setSummery(true)
    }
    //reseting time and keeping up with right question
    if (currentQuestion !== props.currentQuestion) {
      setTimeLeft(15)
      setCurrentQuestion(props.currentQuestion)
    }
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft, props, currentQuestion]);

  return (
    <div>
      <p>{timeLeft}</p>
    </div>
  );
};

export default Timer