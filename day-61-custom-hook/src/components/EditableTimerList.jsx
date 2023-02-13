import EditableTimer from "./EditableTimer.jsx";
import { useContext, useEffect, useState } from "react";
import { TimerContext } from "../context/TimerContext.js";
export default function EditableTimerList() {
  const { timers, setTimers } = useContext(TimerContext);
  const timerList = timers.timers.map((timer, index) => (
    <EditableTimer
      key={index}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
    />
  ));

  return <div>{timerList}</div>;
}
