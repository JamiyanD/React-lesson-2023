import { useEffect } from "react";
import { useState } from "react";

export default function Counter({ isFancy, label, setIsFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
  }
  function handleClick() {}
  if (score < 10) {
    setScore(score + 1);
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <div
        className={className}
        onPointerEnter={() => {
          setHover(true);
        }}
        onPointerLeave={() => {
          setHover(false);
        }}
      >
        <p> {score}</p>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Add one
        </button>
      </div>
    </div>
  );
}
