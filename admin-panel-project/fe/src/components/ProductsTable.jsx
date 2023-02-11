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
export default function UsersTable({
    currentProducts,
    setCurrentProducts,
    users,
    setUsers,
    handleEdit,
}) {
    const url = "http://localhost:8080/newProducts";
    async function handleDelete(userId) {
        console.log(userId)
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

    function EnhancedTableToolbar(props) {
        const { numSelected } = props;

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
                            )
                    })
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
                        Nutrition
                    </Typography>
                )}

                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon onClick={() => {
                                console.log(selected)
                                handleDelete(selected)
                            }} />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
        );
    }

    EnhancedTableToolbar.propTypes = {
        numSelected: PropTypes.number.isRequired
    };

    const [selected, setSelected] = React.useState([]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = users.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

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

    return (
        <div>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ padding: 0 }}>
                                <Checkbox color="primary"
                                    indeterminate={selected.length > 0 && selected.length < users.length}
                                    checked={users.length > 0 && selected.length === users.length}
                                    onChange={handleSelectAllClick}
                                    inputProps={{
                                        "aria-label": "select all desserts"
                                    }} />
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

                                hover
                                onClick={(event) => handleCheckbox(event, parametr.id)}
                                role="checkbox"
                                aria-checked={isSelected(parametr.id)}
                                tabIndex={-1}
                                key={index}
                                selected={isSelected(parametr.id)}
                            >
                                <TableCell sx={{ padding: 0 }}>
                                    <Checkbox color="primary"
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
        </div>
    );
}
