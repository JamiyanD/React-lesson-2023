import logo from './logo.svg';
import './App.css';
import Accordion from './Components/Accordion';
import {Route, Routes} from 'react-router-dom'
import Login from './Components/Login';
import Home from './Components/Home'
import Register from './Components/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/accordion' element={<Accordion />}/>
      </Routes>
    </div>
  );
}

export default App;
