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
  const URL = "http://localhost:8080/user";
  const [users, setUsers] = useState([]);

  async function fetchScreen() {
    const FETCHED_DATA = await axios.get(URL);
    setUsers(FETCHED_DATA.data.data);
    return FETCHED_DATA;
  }

  useEffect(() => {
    fetchScreen();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    const FETCHED_DATA = await axios.get(URL);
    const filteredUser = FETCHED_DATA.data.data.filter((user) =>
      user.firstname.toLowerCase().includes(e.target.search.value.toLowerCase())
    );
    console.log(filteredUser);
    setUsers(filteredUser);
  }

  const [age, setAge] = React.useState("");
  const handleChange = async (select) => {
    const FETCHED_DATA = await axios.get(URL);
    setUsers(FETCHED_DATA.data.data);
    if (select.target.value) {
      const filteredUser = FETCHED_DATA.data.data.filter(
        (user) => user.radio == select.target.value
      );
      setUsers(filteredUser);
    }
    setAge(select.target.value);
  };

  return (
    <Container sx={{ display: "flex", backgroundColor: "white" }}>
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
              value={age}
              label="Select"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"User"}>User</MenuItem>
              <MenuItem value={"Admin"}>Admin</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <UsersTable users={users} setUsers={setUsers} />
      </Box>
    </Container>
  );
}
