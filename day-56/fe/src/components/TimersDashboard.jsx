import { useEffect, useState } from "react";
import { newTimer } from "../components/Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import projects from "../data/data.js";
import axios from "axios";

export default function TimersDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  const URL = "http://localhost:8080/timers";

  async function fetchTimersData() {
    const FETCHED_DATA = await axios.get(URL);
    // const FETCHED_JSON = await FETCHED_DATA.json();
    setTimers({ timers: FETCHED_DATA.data.data });
  }

  useEffect(() => {
    fetchTimersData();
  }, []);

  // useEffect(() => {
  //   setInterval(() => setTimers({ timers: projects }), 1000);
  // }, []);

  async function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }

  async function handleEditFormSubmit(timer) {
    // updateTimer(attrs);
    updateTimer(timer);
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }

  async function createTimer(timer) {
    const postData = {
      title: timer.title,
      project: timer.project,
    };

    const FETCHED_DATA = await axios.post(URL, {
      postData,
    });
    setTimers({ timers: FETCHED_DATA.data.data });
    // const t = newTimer(timer);
    // setTimers({ timers: timers.timers.concat(t) });
  }

  function startTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          console.log(timer);
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
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

  async function updateTimer(timer) {
    const putData = {
      id: timer.id,
      title: timer.title,
      project: timer.project,
    };
    const FETCHED_DATA = await axios.put(URL, putData);
    setTimers({ timers: FETCHED_DATA.data.data });
    // setTimers({
    //   timers: timers.timers.map((timer) => {
    //     if (timer.id === attrs.id) {
    //       timer.title = attrs.title;
    //       timer.project = attrs.project;
    //     }
    //     return timer;
    //   }),
    // });
  }

  async function deleteTimer(userId) {
    console.log(userId);
    const data = {
      userId: userId,
    };
    const FETCHED_DATA = await axios.delete(URL, {
      data,
    });

    // const options = {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     userId: userId,
    //   }),
    // };
    // const FETCHED_DATA = await fetch(URL, options);
    // const FETCHED_JSON = await FETCHED_DATA.json();
    setTimers({ timers: FETCHED_DATA.data.data });

    // setTimers({
    //   timers: timers.timers.filter((t) => t.id !== timerId),
    // });
  }

  return (
    <div>
      <h1>Timers</h1>
      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onFormSubmit={handleEditFormSubmit}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}
