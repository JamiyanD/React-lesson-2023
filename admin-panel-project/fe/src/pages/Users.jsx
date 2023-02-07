import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Home from "./Navbar";
import Stack from "@mui/joy/Stack";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UsersTable from "../components/UsersTable";
export default function Users({ setIsUpdate, currentUser, setCurrentUser }) {
  const URL = "http://localhost:8080/new";
  const [users, setUsers] = useState([]);
  async function fetchScreen() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();

    setUsers(FETCHED_JSON.data);
    return FETCHED_JSON;
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
          <Link to={"/new"} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ margin: "10px" }}
              onClick={() => {
                setCurrentUser("");
                setIsUpdate(false);
              }}
            >
              New
            </Button>
          </Link>
          <Button variant="contained">ADD FILTER</Button>
        </Stack>

        <UsersTable
          users={users}
          setUsers={setUsers}
          setIsUpdate={setIsUpdate}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </Box>
    </Box>
  );
}
