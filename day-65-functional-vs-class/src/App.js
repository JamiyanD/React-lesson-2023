import "./App.css";
import { ClassCounter } from "./components/ClassCounter";
import { FunctionalCounter } from "./components/FunctionalCounter";

import { TimersDashboard } from "./components/TimersDashboard";

export default function App() {
  return (
    <div>
      <h1>Day-65 Class Component - Timer App</h1>
      {/* <FunctionalCounter />
      <ClassCounter /> */}
      <TimersDashboard />
    </div>
  );
}
