import Input from './Component/Input'
import Anime from './Component/Anime'
import './App.css';
import { useState } from "react";
import Button from './Component/Button';
import TopAnime from './Component/TopAnime';
import Exercises from './Component/Exercises';
import Pascal from './Component/Pascal';

function App() {
  const [inputText, setInputText] = useState("");
  function handleInput(e){
    setInputText(e.target.value)
  }
  return (
    <div className="App">
      {/* <Input label='first input' handleInput={handleInput} inputText={inputText} />
      <Input label='second input' handleInput={handleInput} inputText={inputText} /> */}
    {/* <Anime /> */}
    {/* <Button />
    <TopAnime /> */}
    {/* <Exercises /> */}
    <Pascal />
    </div>
  );
}

export default App;
