import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import UpdateArrays from './components/UpdateArrays';
import SpreadArray from './components/SpreadArray';
import List from './components/SpreadArray';
import UpdatingObjects from './components/UpdatingObjects';
import Exercises from './components/Exercises';
function App() {
  const [counter, setCounter] = useState(0)
  const [inputText, setInputText] = useState('hha')
  function handleInput(event){
    return(
    setInputText(event.target.value)
    )}
  return (
    <div className="App">
      {/* <p>{counter}</p>
      <button onClick={() => {
        setCounter(counter + 1)
      }} >hhe</button>
      
      <input className='' value={inputText}  onChange={(e) => {
        handleInput(e) // arrow function dotor deerh functionig duudaj baiga gsn ug
      }}></input>
      <p>{inputText}</p> */}
      {/* <Counter />
      <UpdateArrays />
      <List />
      <UpdatingObjects /> */}
      <Exercises />
    </div>
  );
}

export default App;
