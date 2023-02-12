import "./App.css";
import List from "./Components/List";
import { useContext } from "react";
import { ImageContext } from "./Context/ImageContext";
import Stopwatch from "./Components/Stopwatch";
import { InputFocus } from "./Components/InputFocus";
import VideoPlayer from "./Components/VideoPlayer";
function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);

  return (
    <div className="App">
      <Stopwatch />
      <InputFocus />
      <VideoPlayer />
      <input
        type="checkbox"
        value={isLarge}
        onChange={(e) => {
          setIsLarge(e.target.checked);
        }}
      />
      <label>Use large Images</label>
      <hr />

      <List />
    </div>
  );
}

export default App;
