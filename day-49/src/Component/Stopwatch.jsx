import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(3595);
  const countRef = useRef(null);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    console.log(getSeconds);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  //
  //
  //
  //
  //

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
  };

  const handleResume = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className="stopwatch-card">
        <p>{formatTime()}</p> {/* here we will show timer */}
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleResume}>Resume</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
