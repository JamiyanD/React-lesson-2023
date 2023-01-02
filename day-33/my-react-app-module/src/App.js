import logo1 from './img/image-yellow.png';
import logo2 from './img/image-aqua.png';
import logo3 from './img/image-steel.png';
import logo4 from './img/image-rose.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          E\dit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Popular products</h1>
      </header>
      <hr></hr>
      <div id="container">
        <img id="image" src={logo1} alt="logo1"></img>
        <div id="text-container">
     
          <h1>55</h1>
          <p>Haught or Naught</p>
          <p>High-minded or absent-minded?You decide.</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt='profile'></img>
          </div>
        </div>
      </div>
      <div id="container">
        <img id="image" src={logo2} alt="logo2" ></img>
        <div id="text-container">
          <h1>55</h1>
          <p>Haught or Naught</p>
          <p>High-minded or absent-minded?You decide.</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt='profile'></img>
          </div>
        </div>
      </div>
      <div id="container">
        <img id="image" src={logo3} alt="logo3"></img>
        <div id="text-container">
          <h1>55</h1>
          <p>Haught or Naught</p>
          <p>High-minded or absent-minded?You decide.</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt='profile'></img>
          </div>
        </div>
      </div>
      <div id="container">
        <img id="image" src={logo4} alt="logo4"></img>
        <div id="text-container">
          <h1>55</h1>
          <p>Haught or Naught</p>
          <p>High-minded or absent-minded?You decide.</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt='profile'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
