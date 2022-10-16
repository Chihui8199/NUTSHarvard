import React from 'react'

function Actions({toggleForm, onToggle, timeInput, handleChange, countDownStarted, startTimer, stopTimer}) {
  return (
    <div className="ac-container">
      <div className="btn-container">
        {!countDownStarted ?
          <button onClick={() => startTimer()}> Start </button>:
          <button onClick={() => stopTimer()}>Stop </button>
        }
        <button onClick={onToggle}> Set Time </button>
      </div>

      {toggleForm ? (
        <div className="input-form">
          <input
            type="number"
            placeholder="enter time"
            onChange={handleChange}
            defaultValue={timeInput}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Actions