import { useRef, useState } from "react";
export default function Stopwatch() {
  const [now, setNow] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const timeRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(timeRef.current)
    timeRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);

  };
  const handleStop = () => {
    clearInterval(timeRef.current);
  };
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }
  // const timer = now - startTime < 0 ? 0 : (now - startTime) / 1000;
  return (
    <div>
      {/* <h1>{Math.floor(timer)}</h1> */}
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={() => handleStart()}>start</button>
      <button onClick={() => handleStop()}>stop</button>
    </div>
  );
}
