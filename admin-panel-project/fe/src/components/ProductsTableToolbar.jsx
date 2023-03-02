import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { alpha } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { useRef } from "react";
export default function EnhancedTableToolbar(props) {
  const url = "http://localhost:8080/product";
  const { numSelected, setUsers, handleDelete, selected } = props;
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

  async function handleSearch(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;
    const SEARCH_URL = `http://localhost:8080/search?value=${searchInput}`;
    const AXIOS_DATA = await axios.get(SEARCH_URL);
    if (AXIOS_DATA.data.status === "success") {
      setUsers(AXIOS_DATA.data.data);
    }
  }

  const [searchColor, setSearchColor] = useState(false);
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
        <form onSubmit={handleSearch}>
          <TextField
            name="search"
            placeholder="Search Product"
            className={
              searchColor
                ? "bg-body-secondary rounded-3 "
                : "bg-light rounded-3 "
            }
            variant="standard"
            onFocus={() => {
              setSearchColor(true);
            }}
            onBlur={() => {
              setSearchColor(false);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    type="submit"
                    disableRipple
                    sx={{
                      padding: 0,
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </form>
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
        <Stack direction="row" alignItems="center" className="ms-auto" gap={2}>
          <FormControl
            sx={{ minWidth: 120 }}
            size="small"
            className="bg-light rounded-3"
          >
            {/* <InputLabel id="demo-simple-select-label">Select </InputLabel> */}
            <Select
              value={age}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
              // label="Select"
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Price: Low to High</MenuItem>
              <MenuItem value={20}>Price: High to Low</MenuItem>
            </Select>
          </FormControl>
          <Button href="/newProduct" variant="contained">
            ADD PRODUCT
          </Button>
        </Stack>
      )}
    </Toolbar>
  );
}
