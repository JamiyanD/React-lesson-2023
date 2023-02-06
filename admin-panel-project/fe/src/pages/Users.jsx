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
import Home from "./Home";
import Stack from "@mui/joy/Stack";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UsersMap from "../components/UsersMap";
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

  async function handleEdit(userId) {
    setIsUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];

    if (filteredUser) {
      setCurrentUser({
        ...currentUser,
        id: filteredUser.id,
        firstname: filteredUser.firstname,
        lastname: filteredUser.lastname,
        phoneNumber: filteredUser.phoneNumber,
        email: filteredUser.email,
        password: filteredUser.password,
        checkbox: filteredUser.checkbox,
        radio: filteredUser.radio,
        imgURL: filteredUser.imgURL,
      });
    }
    return () => {
      console.log(userId);
    };
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

        <UsersMap
          users={users}
          setUsers={setUsers}
          setIsUpdate={setIsUpdate}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          anchorEl={anchorEl}
          open={open}
          handleClick={handleClick}
          handleClose={handleClose}
          handleEdit={handleEdit}
        />
      </Box>
    </Box>
  );
}
