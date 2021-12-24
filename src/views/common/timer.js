import React,{useRef} from "react";

function Timer() {
    const timerRef = useRef(null)
  function countdown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
      return n <= 9 ? "0" + n : n;
    }

    function updateTimer() {
      msLeft = endTime - +new Date();
      if (msLeft < 1000) {
        timerRef.current.innerHTML = "Time is up!";
      } else {
        time = new Date(msLeft);
        hours = time.getUTCHours();
        mins = time.getUTCMinutes();
        timerRef.current.innerHTML =
          (hours ? hours + ":" + twoDigits(mins) : mins) +
          ":" +
          twoDigits(time.getUTCSeconds());
        setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
      }
    }

    // element = document.getElementById(elementName);
    endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
  }

  countdown("ten-countdown", 10, 0);
  return <div ref={timerRef} id="ten-countdown"></div>;
}

export default Timer;
