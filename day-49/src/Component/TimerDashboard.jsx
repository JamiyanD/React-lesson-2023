import timerData from "../data/data";
import Timer from "./Timer";
import { useState } from "react";
import { useEffect } from "react";
import TimerForm from "./TimerForm";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { newTimer } from "./Helpers";
export default function TimerDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 1000);
  }, []);

  function handleEditFormSubmit(timer) {
    updateTimer(timer);
    console.log("fsf");
  }

  function updateTimer(attributes) {
    setTimers({
      timers: timers.timers.map((timer) => {
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
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }
  function startTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        console.log(timer.runningSince);
        if (timer.id === timerId) {
          timer.runningSince = now;

          return timer;
        } else {
          return timer;
        }
      }),
    });
    console.log(now);
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function deleteTimer(timerId) {
    setTimers({ timers: timers.timers.filter((t) => (t.id = !timerId)) });
  }

  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }
  function createTimer(timer) {
    const t = newTimer(timer);
    setTimers({
      timers: timers.timers.concat(t),
    });
  }

  return (
    <div>
      <h1>Timers</h1>
      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
            onFormSubmit={handleEditFormSubmit}
          />
          {/* <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} /> */}
        </div>
      )}
    </div>
  );
}
