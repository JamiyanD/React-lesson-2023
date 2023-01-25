import React, { useState, useRef } from "react";
import { useEffect } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [now, setNow] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  useEffect(() => {
    console.log("gadna");
    if (now) {
      const id = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
  }, [now]);

  const handleReset = () => {
    clearInterval(intervalId);
    setTimer(0);
  };

  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className="stopwatch-card">
        <p>{formatTime()}</p>
        <div className="buttons">
          <button
            onClick={() => {
              setNow(true);
            }}
          >
            Start
          </button>
          <button
            onClick={() => {
              setNow(false);
            }}
          >
            Pause
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
