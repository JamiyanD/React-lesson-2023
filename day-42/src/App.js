import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
 

  const[users, setUsers] = useState([])
  console.log('first',users)
  function handleRegister(e){
    e.preventDefault()
    console.log(e.target.firstname.value)

    const user = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value
    }

  
    setUsers([...users, user])
   
   
  }

  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <label>Firstname</label>
        <input  name='firstname'></input>
        <label>Lastname</label>
        <input name='lastname'></input>
        <label>Password</label>
        <input name='password'></input>
        <label>Confirm Password</label>
        <input name='confirm'></input>
        <label>Register</label>
        <button >Click</button>
      </form>

      <h1>User Preview</h1>
      {users.map(element => {
        return(
          <div>
            <div>{element.firstname}</div>
            <div>{element.lastname}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
