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
import Container from "@mui/material/Container";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import ProductsTable from "../components/ProductsTable";
export default function ProductsList({ currentProducts, setCurrentProducts }) {
  const url = "http://localhost:8080/product";
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
    const searchInput = e.target.search.value;
    const SEARCH_URL = `http://localhost:8080/search?value=${searchInput}`;
    const AXIOS_DATA = await axios.get(SEARCH_URL);
    if (AXIOS_DATA.data.status === "success") {
      setUsers(AXIOS_DATA.data.data);
    }
  }

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5"
    >
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
        </Stack>
        <Button href="/newProduct" variant="contained" sx={{ margin: "10px" }}>
          CREATE PRODUCT
        </Button>
        <ProductsTable users={users} setUsers={setUsers} />
      </Box>
    </Box>
  );
}
