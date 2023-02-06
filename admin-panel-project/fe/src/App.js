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
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import {
  Link as RouterLink,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

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

  const breadcrumbNameMap = {
    "/users": "Users",
    "/new": "New User",
    "/products": "Products",
    "/newProducts": "New Products",
  };
  function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />;
  }

  function Page() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
      <Container
        sx={{
          backgroundColor: "white",
          paddingY: "15px",
          marginY: "10px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <LinkRouter underline="hover" color="inherit" to="/">
            Home
          </LinkRouter>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return last ? (
              <Typography color="text.primary" key={to}>
                {breadcrumbNameMap[to]}
              </Typography>
            ) : (
              <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                {breadcrumbNameMap[to]}
              </LinkRouter>
            );
          })}
        </Breadcrumbs>
      </Container>
    );
  }

  return (
    <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
      <Home />

      <Box sx={{ display: "flex", marginTop: 8 }}>
        <Aside />
        <Container>
          <Routes>
            <Route path="*" element={<Page />} />
          </Routes>
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
        </Container>
      </Box>
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/x-data-grid
// npm install @mui/icons-material
