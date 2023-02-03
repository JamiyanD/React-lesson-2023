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
    <Box sx={{ display: "flex" }}>
      <Home />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
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
                  <TableCell sx={{ padding: 0 }}>
                    <Stack direction="row">
                      <Link to={"/new"} style={{ textDecoration: "none" }}>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleEdit(parametr.id)}
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(parametr.id)}
                        sx={{ marginX: 1 }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
