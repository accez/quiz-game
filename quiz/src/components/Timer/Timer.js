import React, { useState, useEffect } from 'react'

const Timer = (props) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(props.seconds)

  useEffect(() => {
    // exit early when we reach 0
    if (timeLeft === 0) {
      props.setCurrentQuestion(props.currentQuestion + 1)
      props.unansweredIncrament()
      setTimeLeft(15)
    }
    if (timeLeft === 0 && props.currentQuestion + 1 >= 10) {
      props.setSummery(true)
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
  }, [timeLeft, props]);

  return (
    <div>
      <p>{timeLeft}</p>
    </div>
  );
};

export default Timer