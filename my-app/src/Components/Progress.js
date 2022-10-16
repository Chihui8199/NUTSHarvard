import React, { memo, useEffect } from "react";
import { useCountDown } from "../Hooks/useCountDown";

function Progress({
  timeInMilliSeconds,
  stopTimer,
  countDownStarted,
  countDownTime,
}) {
  console.log("Progress", timeInMilliSeconds, countDownStarted, countDownTime);
  const [seconds, minutes] = useCountDown({
    timeInMilliSeconds,
    countDownStarted,
    countDownTime,
  });

  const cMin = minutes < 10 ? `0` + minutes : seconds;
  const cSecs = seconds < 10 ? `0` + seconds : seconds;

  // Clear Intervals and rest time
  useEffect(() => {
    if (minutes + seconds <= 0) {
      stopTimer();
      return;
    }
  }, [minutes, seconds, stopTimer]);

  return (
    <div className="pg-container">
      {cMin} : {cSecs}
    </div>
  );
}

export default (Progress);
