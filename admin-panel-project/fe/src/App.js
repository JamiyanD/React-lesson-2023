import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import NewUser from "./pages/NewUser";
import { useState } from "react";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NewProducts from "./pages/NewProducts";
function App() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [productUpdate, setProductUpdate] = useState(false);
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
  const [currentProducts, setCurrentProducts] = useState({
    imgURL: "",
    title: "",
    subtitle: "",
    price: "",
    discount: "",
    description1: "",
    description2: "",
    code: "",
    hashtag: "",
    technology: "",
    rating: "",
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/products"
          element={
            <Products
              currentProducts={currentProducts}
              setCurrentProducts={setCurrentProducts}
              productUpdate={productUpdate}
              setProductUpdate={setProductUpdate}
            />
          }
        />
        <Route
          path="/newProducts"
          element={
            <NewProducts
              currentProducts={currentProducts}
              setCurrentProducts={setCurrentProducts}
              productUpdate={productUpdate}
              setProductUpdate={setProductUpdate}
            />
          }
        />
      </Routes>
      {/* </Box> */}
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/x-data-grid
// npm install @mui/icons-material
