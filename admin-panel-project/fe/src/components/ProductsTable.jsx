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
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import TablePagination from "@mui/material/TablePagination";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductsTableHead from "./ProductsTableHead";
export default function UsersTable({
    currentProducts,
    setCurrentProducts,
    users,
    setUsers,
    handleEdit,
}) {
    const url = "http://localhost:8080/newProducts";
    async function handleDelete(userId) {
        console.log(userId);
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

    function EnhancedTableToolbar(props) {
        const { numSelected } = props;
        const [age, setAge] = useState("");
        const handleChange = async (select) => {
            const FETCHED_DATA = await axios.get(url);
            setUsers(FETCHED_DATA.data.data);
            if (select.target.value == 10) {
                const sortedData = [...FETCHED_DATA.data.data].sort(
                    (a, b) => a.price - b.price
                );
                setUsers(sortedData);
            } else if (select.target.value == 20) {
                const sortedData = [...FETCHED_DATA.data.data].sort(
                    (a, b) => b.price - a.price
                );
                setUsers(sortedData);
            }
            setAge(select.target.value);
        };
        return (
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    ...(numSelected > 0 && {
                        bgcolor: (theme) =>
                            alpha(
                                theme.palette.primary.main,
                                theme.palette.action.activatedOpacity
                            ),
                    }),
                }}
            >
                {numSelected > 0 ? (
                    <Typography
                        sx={{ flex: "1 1 100%" }}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                    >
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography
                        sx={{ flex: "1 1 100%" }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                    >
                        Products
                    </Typography>
                )}

                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <DeleteIcon
                            onClick={() => {
                                console.log(selected);
                                handleDelete(selected[0]);
                            }}
                        />
                    </Tooltip>
                ) : (
                    <FormControl sx={{ minWidth: 120 }} size="small">
                        <InputLabel id="demo-simple-select-label">Select </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Price: Low to High</MenuItem>
                            <MenuItem value={20}>Price: High to Low</MenuItem>
                        </Select>
                    </FormControl>
                )}
            </Toolbar>
        );
    }

    // EnhancedTableToolbar.propTypes = {
    //     numSelected: PropTypes.number.isRequired,
    // };

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
        <div>
            <EnhancedTableToolbar numSelected={selected.length} />
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
    );
}
