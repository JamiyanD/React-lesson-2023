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
import IconButton from "@mui/material/IconButton";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Stack from "@mui/joy/Stack";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";

export default function ProductList({ currentProducts, setCurrentProducts }) {
  const url = "http://localhost:8080/newProducts";
  const [users, setUsers] = useState([]);

  async function fetchScreen() {
    const FETCHED_DATA = await axios.get(url);
    setUsers(FETCHED_DATA.data.data);
    return FETCHED_DATA;
  }

  useEffect(() => {
    fetchScreen();
  }, []);

  async function handleDelete(userId) {
    const data = {
      userId: userId,
    };
    const FETCHED_DATA = await axios.delete(url, { data });
    setUsers(FETCHED_DATA.data.data);
  }

  async function handleEdit(userId) {
    const filteredUser = users.filter((user) => user.id === userId)[0];
    if (filteredUser) {
      setCurrentProducts({
        ...currentProducts,
        id: filteredUser.id,
        imgURL: filteredUser.imgURL,
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

  function handleSearch(e) {
    e.preventDefault();
    const filteredUser = users.filter(
      (user) => user.title === e.target.search.value
    );
    setUsers(filteredUser);
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
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography
              variant="h6"
              sx={{ margin: "5px", display: "inline-block" }}
            >
              Products
            </Typography>

            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#9e9e9e" }}
            >
              {users.length} total
            </Typography>
          </Box>
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
        </Stack>
        <Button
          href="/newProducts"
          variant="contained"
          sx={{ margin: "10px" }}
          onClick={() => {
            setCurrentProducts("");
          }}
        >
          CREATE PRODUCT
        </Button>
        <Typography variant="h6" sx={{ margin: "15px" }}>
          Products
        </Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: 0 }}>
                  <Checkbox />
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Subtitle</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={0.5}>
                    Price
                    <ArrowUpwardIcon></ArrowUpwardIcon>
                  </Stack>
                </TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((parametr, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell sx={{ padding: 0 }}>
                    <Checkbox />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {parametr.id % 100}
                  </TableCell>
                  <TableCell>Not Yet</TableCell>
                  <TableCell>{parametr.title}</TableCell>
                  <TableCell>{parametr.subtitle}</TableCell>
                  <TableCell>
                    {parametr.price && `$${parametr.price}`}
                  </TableCell>
                  <TableCell>
                    {parametr.rating && (
                      <Stack direction="row">
                        <Typography>{parametr.rating}</Typography>
                        <img
                          src="https://freesvg.org/img/1289679474.png"
                          alt=""
                          style={{ width: 16, height: 20, marginLeft: "4px" }}
                        />
                      </Stack>
                    )}
                  </TableCell>
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
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={openElem === parametr.id}
                      onClose={handleClose}
                      PaperProps={{}}
                    >
                      <MenuItem
                        component={Link}
                        to={"/editProduct"}
                        onClick={() => {
                          handleEdit(parametr.id);
                        }}
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
      </Box>
    </Box>
  );
}
