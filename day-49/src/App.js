import "./App.css";
import Timer from "./Component/Timer";
import TimerDashboard from "./Component/TimerDashboard";
import Stopwatch from "./Component/Stopwatch";
import Fancy from "./Component/Fancy";
function App() {
  return (
    <div className="App">
      <h1>Timer App</h1>
      <Stopwatch />
      <TimerDashboard />
      {/* <Fancy /> */}
    </div>
  );
}

export default App;
