import { useEffect } from "react";
import { useState } from "react";
export default function Anime() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("My anime Component");
  }); // infinite loop ig boliuldag

  function handleClick(e) {
    console.log(e);
  }
  console.log(count);
  return (
    <div>
      <h1>day-48</h1>
      <button
        onClick={(e) => {
          handleClick(e);
          setCount(count + 1);
        }}
      >
        Anime Click
      </button>
    </div>
  );
}
