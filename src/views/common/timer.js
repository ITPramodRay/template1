import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      {minutes === 0 && seconds === 0 ? null : (
        <p>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </>
  );
};

export default Timer;
