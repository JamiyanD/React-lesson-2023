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
import Typography from "@mui/material/Typography";
const productsData = [
  {
    id: 1,
    imgURL: "image",
    Title: "Boots",
    Subtitle: "Trainers in Blue",
    Price: "45",
    Rating: "4.6",
    Actions: "",
  },
];

export default function Products({
  currentProducts,
  setCurrentProducts,
  productUpdate,
  setProductUpdate,
}) {
  const URL = "http://localhost:8080/newProducts";
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
  console.log(users);
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
    setProductUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];
    console.log(filteredUser);
    if (filteredUser) {
      setCurrentProducts({
        ...currentProducts,
        image: filteredUser.image,
        title: filteredUser.title,
        subtitle: filteredUser.subtitle,
        price: filteredUser.price,
        discount: filteredUser.discount,
        description1: filteredUser.description1,
        description2: filteredUser.description2,
        code: filteredUser.code,
        hashtag: filteredUser.hashtag,
        technology: filteredUser.technology,
        rating: filteredUser.rating,
      });
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Home />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Products
        </Typography>
        <Link to={"/newProducts"}>
          <Button
            variant="contained"
            sx={{ margin: "10px" }}
            onClick={() => {}}
          >
            CREATE PRODUCT
          </Button>
        </Link>
        <Typography variant="h6" sx={{ margin: "10px" }}>
          Products
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <Checkbox />
                <TableCell>ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Subtitle</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Actions</TableCell>
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
                    {parametr.id}
                  </TableCell>
                  <TableCell>{parametr.image}</TableCell>
                  <TableCell>{parametr.title}</TableCell>
                  <TableCell>{parametr.subtitle}</TableCell>
                  <TableCell>{parametr.price}</TableCell>
                  <TableCell>{parametr.rating}</TableCell>

                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(parametr.id)}
                    color="primary"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Link to={"/newProducts"}>
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
      </Box>
    </Box>
  );
}
