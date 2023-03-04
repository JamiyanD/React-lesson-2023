import Button from "@mui/material/Button";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/joy/Stack";
import UsersTable from "../components/UsersTable";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import toast, { Toaster } from "react-hot-toast";
import Container from "@mui/material/Container";
export default function UsersList() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);
  const [selectValue, setSelectValue] = React.useState("");

  async function axiosScreen() {
    const AXIOS_DATA = await axios.get(URL);
    setUsers(AXIOS_DATA.data);
    return AXIOS_DATA;
  }

  useEffect(() => {
    axiosScreen();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;
    const SEARCH_URL = `http://localhost:8080/search-user?value=${searchInput}`;
    const AXIOS_DATA = await axios.get(SEARCH_URL);
    if (AXIOS_DATA.status == 200) {
      setUsers(AXIOS_DATA.data);
    }
  }

  const handleChange = async (select) => {
    const AXIOS_DATA = await axios.get(URL);
    setUsers(AXIOS_DATA.data);
    console.log(select.target.value);
    if (select.target.value) {
      const filteredUser = AXIOS_DATA.data.filter(
        (user) => user.role == select.target.value
      );
      setUsers(filteredUser);
    }
    setSelectValue(select.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "white",
      }}
      className="rounded-5"
    >
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button href="/newUser" variant="contained" sx={{ margin: "10px" }}>
            New User
          </Button>
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
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Select </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={selectValue}
              label="Select"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={2}>User</MenuItem>
              <MenuItem value={1}>Admin</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <UsersTable users={users} setUsers={setUsers} />
      </Box>
    </Box>
  );
}
