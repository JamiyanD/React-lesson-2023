import "./App.css";
import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import NewUser from "./pages/NewUser";
import { useState } from "react";
import Box from "@mui/material/Box";
import Home from "./components/Navbar";
import NewProduct from "./pages/NewProduct";
import Container from "@mui/material/Container";
import Page from "./components/Page";
import EditUser from "./pages/EditUser";
import EditProduct from "./pages/EditProduct";
import Navbar from "./components/Navbar";
import ProductsList from "./pages/ProductsList";
import UsersList from "./pages/UsersList";
import Login from "./pages/Login";

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Page />
      <Routes>
        <Route path="/user-management" element={<Home />} />
        <Route path="/usersList" element={<UsersList />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/productsList" element={<ProductsList />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/eCommerce" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
