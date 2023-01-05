import { Button } from 'react-bootstrap';
import './App.css';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="App">
      <div className='menu-container'>
        <MainMenu />
      </div>
      <h1>React-bootstrap bootstrap</h1>
        <Button variant="primary">Hello bootstrap Button</Button>
    </div>
  );
}

export default App;
