import "./App.css";
import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import NewUser from "./pages/NewUser";
import { useState } from "react";
import Box from "@mui/material/Box";
import Home from "./pages/Navbar";
import Products from "./pages/ProductList";
import NewProducts from "./pages/NewProducts";
import Container from "@mui/material/Container";
import Page from "./components/Page";
import EditUser from "./pages/EditUser";
import EditProduct from "./pages/EditProduct";
import Navbar from "./pages/Navbar";
import ProductList from "./pages/ProductList";
import UserList from "./pages/UserList";
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
        <Aside />
        <Container>
          <Page />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productList" element={<ProductList />} />
            <Route
              path="/userList"
              element={
                <UserList
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path="/new"
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
              path="/products"
              element={
                <Products
                  currentProducts={currentProducts}
                  setCurrentProducts={setCurrentProducts}
                />
              }
            />
            <Route
              path="/newProducts"
              element={
                <NewProducts
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
          </Routes>
        </Container>
      </Box>
    </div>
  );
}

export default App;
