import { useState } from "react";

export default function Counter() {
  const [show, setShow] = useState(0);
  const [color, setColor] = useState(false);
  let style = "counter";
  if (color) {
    style = "counter hover";
  }
  return (
    <div
      // {color ?  className="counter hover" : className="counter"}
      className={style}
      onPointerEnter={() => {
        setColor(true);
      }}
      onPointerLeave={() => {
        setColor(false);
      }}
    >
      <p>{show}</p>
      <button
        onClick={() => {
          setShow(show + 1);
        }}
      >
        Add One
      </button>
    </div>
  );
}
