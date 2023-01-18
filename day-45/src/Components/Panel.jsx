import React from "react";
import { useState } from "react";

export default function Panel({ children, title, onShow, activeIndex }) {
  return (
    <div>
      <h3>{title}</h3>
      {activeIndex ? <p>{children}</p> : <button onClick={onShow}>show</button>}
    </div>
  );
}
