import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Stack from "@mui/joy/Stack";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

import ProductsTable from "../components/ProductsTable"
export default function ProductsList({ currentProducts, setCurrentProducts, }) {
  const url = "http://localhost:8080/newProducts";
  const [users, setUsers] = useState([]);

  async function fetchScreen() {
    const FETCHED_DATA = await axios.get(url);
    setUsers(FETCHED_DATA.data.data);
    return FETCHED_DATA;
  }

  useEffect(() => {
    fetchScreen();
  }, []);


  async function handleSearch(e) {
    e.preventDefault();
    const FETCHED_DATA = await axios.get(url);
    const filteredUser = FETCHED_DATA.data.data.filter((user) =>
      user.title.toLowerCase().includes(e.target.search.value.toLowerCase())
    );
    setUsers(filteredUser);
  }






  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography
              variant="h6"
              sx={{ margin: "5px", display: "inline-block" }}
            >
              Products
            </Typography>

            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#9e9e9e" }}
            >
              {users.length} total
            </Typography>
          </Box>
          <form onSubmit={handleSearch}>
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <TextField
              name="search"
              className="text"
              label="Search"
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
          </form>

        </Stack>
        <Button
          href="/newProduct"
          variant="contained"
          sx={{ margin: "10px" }}
          onClick={() => {
            setCurrentProducts("");
          }}
        >
          CREATE PRODUCT
        </Button>
        <ProductsTable users={users}
          setUsers={setUsers}
          currentProducts={currentProducts} setCurrentProducts={setCurrentProducts} />
      </Box>
    </Box>
  );
}
