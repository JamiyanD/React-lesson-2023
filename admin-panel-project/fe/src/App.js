import "./App.css";
import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import NewUser from "./pages/NewUser";
import { useState } from "react";
import Box from "@mui/material/Box";
import Home from "./pages/Navbar";
import NewProduct from "./pages/NewProduct";
import Container from "@mui/material/Container";
import Page from "./components/Page";
import EditUser from "./pages/EditUser";
import EditProduct from "./pages/EditProduct";
import Navbar from "./pages/Navbar";
import ProductsList from "./pages/ProductsList";
import UsersList from "./pages/UsersList";
import Products from "./pages/Products";
function App() {
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
    <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
      <Navbar />
      <Box sx={{ display: "flex", marginTop: 8 }}>
        <Aside
          setCurrentProducts={setCurrentProducts}
          setCurrentUser={setCurrentUser}
        />
        <Container>
          <Page />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/usersList"
              element={
                <UsersList
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path="/newUser"
              element={
                <NewUser
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path="/editUser"
              element={
                <EditUser
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path="/productsList"
              element={
                <ProductsList
                  currentProducts={currentProducts}
                  setCurrentProducts={setCurrentProducts}
                />
              }
            />
            <Route
              path="/newProduct"
              element={
                <NewProduct
                  currentProducts={currentProducts}
                  setCurrentProducts={setCurrentProducts}
                />
              }
            />
            <Route
              path="/editProduct"
              element={
                <EditProduct
                  currentProducts={currentProducts}
                  setCurrentProducts={setCurrentProducts}
                />
              }
            />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Container>
      </Box>
    </div>
  );
}

export default App;
