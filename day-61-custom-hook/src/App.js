import "./App.css";
import ChangeTheme from "./components/ChangeTheme";
import Header from "./components/Header";
import Body from "./components/Body";
import TimersDashboard from "./components/TimersDashboard";
import { TimerContextProvider } from "./context/TimerContext";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <h1>Day-61 Custom Hook</h1>
      <ChangeTheme />
      <Header />
      <Body />
      <Footer />
      {/* <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider> */}
    </div>
  );
}
