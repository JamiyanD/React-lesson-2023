import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "@mui/joy/Stack";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MenuIcon from "@mui/icons-material/Menu";
function OffcanvasNavbar() {
  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="p-0">
        <Container fluid>
          <Stack direction="row" alignItems="center">
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-lg`}
              className="m-2 border-0 navbar-toggle"
            >
              <MenuIcon variant="blue"></MenuIcon>
            </Navbar.Toggle>
            <Navbar.Brand href="/">
              <img
                src="https://preview.keenthemes.com/metronic8/demo30/assets/media/logos/demo30.svg"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg}`}
              placement="start"
            >
              <Offcanvas.Header>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown
                    title="User Management"
                    id={`offcanvasNavbarDropdown-expand-lg}`}
                  >
                    <NavDropdown.Item href="/newUser">
                      New User
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/usersList">
                      Users List
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="eCommerce"
                    id={`offcanvasNavbarDropdown-expand-lg}`}
                  >
                    <NavDropdown.Item href="/newProduct">
                      Add Product
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/productsList">
                      Products List
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Stack>
          <Stack direction="row" alignItems="center">
            <div class="dropdown d-lg-none">
              <button
                class=" dropdown-toggle p-2 m-2 border-0 text-black-50 bg-light"
                data-bs-toggle="dropdown"
              >
                <SearchIcon />
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="#">
                    <form style={{ width: "200px" }}>
                      <TextField
                        name="search"
                        label="Search"
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                type="submit"
                                aria-label="search"
                                sx={{ padding: 0 }}
                              >
                                <SearchIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </form>
                  </a>
                </li>
              </ul>
            </div>
            <form
              style={{ marginRight: 10, width: "200px" }}
              className="searchbox d-sm-none d-lg-block p-2"
            >
              <TextField
                name="search"
                label="Search"
                variant="outlined"
                placeholder="Search..."
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        type="submit"
                        aria-label="search"
                        sx={{ padding: 0 }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <div class="dropdown ">
              <Avatar
                alt="Remy Sharp"
                src=""
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My Profile
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="/login">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </Stack>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasNavbar;
