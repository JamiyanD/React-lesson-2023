import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import NewUser from "./pages/NewUser";
import { useState } from "react";
function App() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    password: "",
    checkbox: false,
    radio: "",
    imgURL: "",
  });

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", border: "2px solid black" }}>
        <Aside />
        <Routes>
          <Route
            path="/users"
            element={
              <Users
                isUpdate={isUpdate}
                setIsUpdate={setIsUpdate}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/new"
            element={
              <NewUser
                isUpdate={isUpdate}
                setIsUpdate={setIsUpdate}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/x-data-grid
// npm install @mui/icons-material
