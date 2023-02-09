import Button from "@mui/material/Button";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/joy/Stack";
import UsersTable from "../components/UsersTable";
import axios from "axios";
export default function UserList({ currentUser, setCurrentUser }) {
  const URL = "http://localhost:8080/new";
  const [users, setUsers] = useState([]);

  async function fetchScreen() {
    const FETCHED_DATA = await axios.get(URL);
    setUsers(FETCHED_DATA.data.data);
    return FETCHED_DATA;
  }

  useEffect(() => {
    fetchScreen();
  }, []);

  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            href="/new"
            variant="contained"
            sx={{ margin: "10px" }}
            onClick={() => {
              setCurrentUser("");
            }}
          >
            New
          </Button>
          <Button variant="contained">ADD FILTER</Button>
        </Stack>

        <UsersTable
          users={users}
          setUsers={setUsers}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </Box>
    </Box>
  );
}
