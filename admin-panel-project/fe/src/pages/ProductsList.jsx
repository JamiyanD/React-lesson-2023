import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Stack from "@mui/joy/Stack";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import ProductsTable from "../components/ProductsTableToolbar";
import EnhancedTableToolbar from "../components/ProductsTableToolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import ProductsTableHead from "../components/ProductsTableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import TablePagination from "@mui/material/TablePagination";
export default function ProductsList({ currentProducts, setCurrentProducts }) {
  const url = "http://localhost:8080/product";
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
    console.log(userId);
    const data = {
      userId: userId,
    };
    const FETCHED_DATA = await axios.delete(url, { data });
    setUsers(FETCHED_DATA.data.data);
  }

  // menu
  const [openElem, setOpenElem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (parametr) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenElem(parametr);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenElem(null);
  };

  const [selected, setSelected] = React.useState([]);

  const handleCheckbox = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;

  // pagination
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // order
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("subtitle");
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });

    return stabilizedThis.map((el) => el[0]);
  }
  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  function descendingComparator(a, b, orderBy) {
    if (Number(b[orderBy]) < Number(a[orderBy])) {
      return -1;
    }
    if (Number(b[orderBy]) > Number(a[orderBy])) {
      return 1;
    }

    return 0;
  }
  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5 p-3"
    >
      <Box sx={{ flexGrow: 1, p: 2 }} className="border border-1 rounded-5">
        <div>
          <EnhancedTableToolbar
            numSelected={selected.length}
            handleDelete={handleDelete}
            selected={selected}
            setUsers={setUsers}
          />
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <ProductsTableHead
                setSelected={setSelected}
                users={users}
                selected={selected}
                order={order}
                setOrder={setOrder}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
              />
              <TableBody>
                {stableSort(users, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((parametr, index) => (
                    <TableRow
                      hover
                      onClick={(event) => handleCheckbox(event, parametr.id)}
                      role="checkbox"
                      aria-checked={isSelected(parametr.id)}
                      tabIndex={-1}
                      key={index}
                      selected={isSelected(parametr.id)}
                    >
                      <TableCell sx={{ padding: 0 }}>
                        <Checkbox
                          color="primary"
                          checked={isSelected(parametr.id)}
                        />
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
                              style={{
                                width: 16,
                                height: 20,
                                marginLeft: "4px",
                              }}
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
                          onClick={handleMenuClick(parametr.id)}
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
                            to={`/product/edit/${parametr.id}`}
                            // onClick={() => {
                            //     handleEdit(parametr.id);
                            // }}
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
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </Box>
    </Box>
  );
}
