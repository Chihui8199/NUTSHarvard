import { useEffect, useState } from "react";

const useCountDown = ({
  timeInMilliSeconds,
  countDownStarted,
  countDownTime,
}) => {
  const [countDownInMilliSeconds, setCountDown] = useState(
    countDownTime - new Date().getTime()
  );

  useEffect(() => {
    let interval;
    console.log("is timein ms >0", timeInMilliSeconds > 0);
    if (timeInMilliSeconds > 0) {
        interval = setInterval(() => {
            setCountDown(countDownTime - new Date().getTime())

        }, 1000)
    } else if (!countDownStarted) {
      clearInterval(interval);
      setCountDown(0)
    }
    return () => clearInterval(interval);
  }, [countDownTime, timeInMilliSeconds, countDownStarted]);

  // reset countDownInMilliSeconds to zero
  // if countdown stopped
  useEffect(() => {
    if (!countDownStarted) {
      setCountDown(0);
      return;
    }
  }, [countDownStarted]);

  return getReturnValues(countDownInMilliSeconds);
};

const getReturnValues = (countdown) => {
    // calculate the time life
    const minutes = Math.floor(countdown / (60 * 1000));
    const seconds = parseInt(((countdown % (60 * 1000)) / 1000).toFixed(0));
    return [seconds, minutes];
}
export {useCountDown};