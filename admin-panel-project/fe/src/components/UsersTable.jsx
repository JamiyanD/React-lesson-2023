import * as React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { useState } from "react";
export default function UsersTable({
  currentUser,
  setCurrentUser,
  users,
  setUsers,
  handleEdit,
}) {
  const URL = "http://localhost:8080/user";
  async function handleDelete(userId) {
    const data = {
      userId: userId,
    };
    const FETCHED_DATA = await axios.delete(URL, {
      data,
    });
    setUsers(FETCHED_DATA.data.data);
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

  const [openElem, setOpenElem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

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
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Disabled</TableCell>
              <TableCell>Actions</TableCell>
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
                    <MenuItem
                      onClick={() => handleEdit(parametr.id)}
                      component={Link}
                      to={"/editUser"}
                    >
                      Edit
                    </MenuItem>

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
