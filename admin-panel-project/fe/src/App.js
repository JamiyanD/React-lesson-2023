import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
function App() {
  return (
    <div className="App">
      <Navbar sx={{ margin: "100px" }} />
      <div style={{ display: "flex", border: "2px solid black" }}>
        <Aside />
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/x-data-grid
// npm install @mui/icons-material
