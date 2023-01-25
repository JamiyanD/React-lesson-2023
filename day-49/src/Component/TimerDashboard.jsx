import timerData from "../data/data";
import Timer from "./Timer";
import { useState } from "react";
import { useEffect } from "react";
import TimerForm from "./TimerForm";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { newTimer } from "./Helpers";
export default function TimerDashboard() {
  const [timers, setTimers] = useState({ ob: [] });

  useEffect(() => {
    setInterval(() => setTimers({ ob: timerData }), 1000);
  }, []);
  // console.log(timers.ob);
  function handleEditFormSubmit(timer) {
    updateTimer(timer);
  }

  function updateTimer(attributes) {
    setTimers({
      timers: timers.ob.map((timer) => {
        if (timer.id === attributes.id) {
          timer.title = attributes.title;
          timer.project = attributes.project;
        }
        return timer;
      }),
    });
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }

  function stopTimer(timerId) {
    const now = Date.now();
    setTimers({
      ob: timers.ob.map((par) => {
        console.log(par.elapsed);
        if (par.id === timerId) {
          const lastElapsed = now - par.runningSince;
          par.elapsed = par.elapsed + lastElapsed;
          par.runningSince = null;
        }
        return par;
      }),
    });
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }
  function startTimer(timerId) {
    const now = Date.now();
    setTimers({
      ob: timers.ob.map((par) => {
        console.log(par.elapsed);
        if (par.id === timerId) {
          par.runningSince = now;
          return par;
        } else {
          return par;
        }
      }),
    });
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function deleteTimer(timerId) {
    setTimers({ ob: timers.ob.filter((par) => (par.id = !timerId)) });
  }

  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }
  function createTimer(timer) {
    const t = newTimer(timer);
    setTimers({
      timers: timers.ob.concat(t),
    });
  }

  return (
    <div>
      <h1>Timers</h1>
      {timers.ob && (
        <div>
          <EditableTimerList
            timers={timers.ob}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
            onFormSubmit={handleEditFormSubmit}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}
