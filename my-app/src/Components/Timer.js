import React from 'react'
import Actions from './Actions'
import Progress from './Progress'
import {useState, memo} from 'react'

function Timer() {
  const [toggleForm, setToggleForm] = useState(false)
  const [timeInput, setTimeInput] = useState(1) //store the input mins
  const [countDownStarted, setCountDownStarted] = useState(false) // toggle the start and stop
  const [timeInMilliSecond, setTimeInMilliSecond] = useState(0)

  const startTimer = () => {
    setCountDownStarted(true)
    // close the form that sets the time
    if (toggleForm){ setToggleForm(false);}

    // set new timer minutes(millisecs)
    setTimeInMilliSecond(timeInput * 60 * 1000);
    console.log("Timeinms", timeInMilliSecond)
  }

  const stopTimer = () => {
    setCountDownStarted(false);
    setTimeInMilliSecond(0)
  }

  /* Toggle Form */
  function onToggle() {
    setToggleForm((toggle) => (toggle = !toggle));
  }

  /* Get time from input and set time input */
  const handleChange  = (e) => {
    const inputData = parseInt(e.target.value)
    setTimeInput(inputData)
  }
  
  // get time ahead in milliseconds
  const countDownTime = new Date().getTime() + timeInMilliSecond;
  console.log('a', timeInMilliSecond, countDownStarted, countDownTime);
  console.log( 'b',
    toggleForm,
    timeInput,
    countDownStarted,
  );

  return (
    <div className="container">
      <div className="timer">
        <Progress
          {...{ timeInMilliSecond, stopTimer, countDownStarted, countDownTime }}
        />
        <Actions
          {...{
            toggleForm,
            onToggle,
            handleChange,
            timeInput,
            countDownStarted,
            startTimer,
            stopTimer,
          }}
        />
      </div>
    </div>
  );
}

export default Timer