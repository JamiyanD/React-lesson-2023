import { createContext } from "react";
import { useState, useEffect } from "react";

const TimerContext = createContext(null);

const TimerContextProvider = ({ children }) => {
  const [sda, setSda] = useState("kaya");

  return (
    <TimerContext.Provider value={[sda, setSda]}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
