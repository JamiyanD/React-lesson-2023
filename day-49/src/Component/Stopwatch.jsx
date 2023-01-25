import React, { useState, useRef } from "react";
import { useEffect } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(3595);
  const countRef = useRef(null);
  const [now, setNow] = useState(true);
  const [ex, setEx] = useState(0);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
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
    // countRef.current = setInterval(() => {
    //   setTimer((timer) => timer + 1);
    // }, 1000);
  };
  useEffect(() => {
    console.log("gadna");
    if (!now) {
      console.log("dotor");
      setEx(ex + 1);
      console.log(ex);
    }
  }, [now]);

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
          <button
            onClick={() => {
              handleStart();
              setNow(false);
            }}
          >
            Start
          </button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleResume}>Resume</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
