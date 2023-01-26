import "./App.css";
import Timer from "./Component/Timer";
import TimerDashboard from "./Component/TimerDashboard";
import Stopwatch from "./Component/Stopwatch";
function App() {
  return (
    <div className="App">
      <h1>Timer App</h1>
      {/* <Stopwatch /> */}
      <TimerDashboard />
    </div>
  );
}

export default App;
