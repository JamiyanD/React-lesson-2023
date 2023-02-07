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

import Stack from "@mui/joy/Stack";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function UsersTable({
  setIsUpdate,
  currentUser,
  setCurrentUser,
  users,
  setUsers,

  handleEdit,
}) {
  const URL = "http://localhost:8080/new";
  async function handleDelete(userId) {
    console.log(userId);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleEdit(userId) {
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
  }
  const [openElem, setOpenElem] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (parametr) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenElem(parametr);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenElem(null);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: 0 }}>
                <Checkbox />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Phone Number</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Disabled</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((parametr, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ padding: 0 }}>
                  <Checkbox />
                </TableCell>
                <TableCell component="th" scope="row">
                  {parametr.firstname}
                </TableCell>
                <TableCell>{parametr.lastname}</TableCell>
                <TableCell>{parametr.phoneNumber}</TableCell>
                <TableCell>{parametr.email}</TableCell>
                <TableCell>{parametr.radio}</TableCell>
                <TableCell>{parametr.checkbox ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {" "}
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-haspopup="true"
                    onClick={handleClick(parametr.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu "
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={openElem === parametr.id}
                    onClose={handleClose}
                    PaperProps={{}}
                  >
                    <Link
                      to={"/editUser"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem onClick={() => handleEdit(parametr.id)}>
                        Edit
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        handleDelete(parametr.id);
                        handleClose();
                      }}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
