
import './App.css';
import Button from './components/Button'
import ParentToolbar from './components/ParentToolbar';
import PlayButton from './components/PlayButton';
import SignUp from './components/SignUp';
import Toolbar from './components/Toolbar';
import ToolbarNext from './components/ToolbarNext';
function App() {
  return (
    <div className="App">
      <Button />
     <Toolbar />
     
     <ToolbarNext />
     <ParentToolbar />
     <SignUp />
    </div>
  );
}

export default App;
