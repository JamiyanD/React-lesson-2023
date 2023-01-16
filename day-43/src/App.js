
import { Routes, Route,Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Test from './components/Test'
import Usukhuu from './components/About/Usukhuu';
import Khangai from './components/About/Khangai';
import NotFound from './components/NotFound';
import FeedbackForm from './components/FeedbackForm';


function App() {

  return (
    <div >
      <h1 >Day 43</h1>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/about/test'}>About Test</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/feedback'}>Feedback</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} >
          <Route path="usukhuu" element={<Usukhuu />} />
          <Route path="khangai" element={<Khangai />} />

        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedbackForm/>} /> 
        <Route path="*" element={<NotFound />} />  
           {/*busad page ruu usruulne  */}
      </Routes>


    </div>
  );
}

export default App;
