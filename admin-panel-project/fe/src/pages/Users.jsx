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

export default function UsersTable({
  setIsUpdate,
  currentUser,
  setCurrentUser,
}) {
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
    setIsUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];
    console.log(filteredUser);
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
      console.log(currentUser);
    }
  }

  return (
    <div style={{ height: "500px", width: "800px", marginTop: "70px" }}>
      <h2>Users</h2>
      <Link to={"/new"}>
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
      <Button variant="contained" sx={{ marginLeft: "590px" }}>
        ADD FILTER
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <Checkbox />
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Disabled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((parametr, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Checkbox />
                <TableCell component="th" scope="row">
                  {parametr.firstname}
                </TableCell>
                <TableCell align="right">{parametr.lastname}</TableCell>
                <TableCell align="right">{parametr.phoneNumber}</TableCell>
                <TableCell align="right">{parametr.email}</TableCell>
                <TableCell align="right">{parametr.radio}</TableCell>
                <TableCell align="right">
                  {parametr.checkbox ? "Yes" : "No"}
                </TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(parametr.id)}
                  color="primary"
                >
                  <DeleteIcon />
                </IconButton>
                <Link to={"/new"}>
                  <IconButton
                    aria-label="edit"
                    color="primary"
                    onClick={() => handleEdit(parametr.id)}
                  >
                    <EditIcon />
                  </IconButton>
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
