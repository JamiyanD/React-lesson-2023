import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
export default function EditProduct() {
  const URL = "http://localhost:8080/products";
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [defaultSelect, setDefaultSelect] = useState(1);
  const [currentProducts, setCurrentProducts] = useState({
    name: "",
    category: 1,
    price: "",
    code: "",
    quantity: "",
  });

  const CATEGORIES_URL = "http://localhost:8080/product-categories";
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setCategories(FETCHED_JSON);
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    axiosProduct();
  }, []);
  async function axiosProduct() {
    const AXIOS_DATA = await axios.put(URL, { productId: id });
    if (AXIOS_DATA.status == 200) {
      setCurrentProducts(AXIOS_DATA.data[0]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      productId: id,
      name: currentProducts.name,
      code: currentProducts.code,
      price: currentProducts.price,
      quantity: currentProducts.quantity,
      category: currentProducts.category,
      rating: currentProducts.rating,
      isEdit: true,
    };
    const AXIOS_DATA = await axios.post(URL, putData);
    if (AXIOS_DATA.status == 200) {
      navigate("/productsList");
    }
  }
  function handleName(e) {
    setCurrentProducts({
      ...currentProducts,
      name: e.target.value,
    });
  }

  function handlePrice(e) {
    setCurrentProducts({
      ...currentProducts,
      price: e.target.value,
    });
  }

  function handleCode(e) {
    setCurrentProducts({
      ...currentProducts,
      code: e.target.value,
    });
  }
  function handleQuantity(e) {
    setCurrentProducts({
      ...currentProducts,
      quantity: e.target.value,
    });
  }
  function handleRating(e) {
    setCurrentProducts({
      ...currentProducts,
      rating: e.target.value,
    });
    console.log(e.target.value);
  }
  function handleChange(select) {
    setDefaultSelect(select.target.value);
    console.log(select.target.value);
    setCurrentProducts({
      ...currentProducts,
      category: select.target.value,
    });
  }

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5"
    >
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
              Edit Product
            </Typography>
            {/* <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "300px" }}>
                Image
              </Typography>
              <Button variant="outlined" component="label">
                Upload
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleUpload}
                />
              </Button>
            </Stack> */}
            <Stack>
              <Typography variant="h6" gutterBottom sx={{ width: "300px" }}>
                Status
              </Typography>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <Select
                  value={defaultSelect}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className=" rounded-3"
                  sx={{
                    boxShadow: "none",

                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "silver",
                      },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "lightgrey",
                      },
                  }}
                >
                  {categories &&
                    categories.map((category, index) => {
                      return (
                        <MenuItem key={index} value={category.id}>
                          {category.name}
                        </MenuItem>
                      );
                    })}
                </Select>
                <FormHelperText>Set the product status.</FormHelperText>
              </FormControl>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" gutterBottom sx={{ width: "300px" }}>
                Name
              </Typography>
              <TextField
                value={currentProducts.name}
                name="title"
                label="Title"
                onChange={handleName}
                fullWidth
              />
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "300px" }}>
                Price
              </Typography>
              <TextField
                label="Price"
                value={currentProducts.price}
                name="price"
                onChange={handlePrice}
                fullWidth
              />
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "300px" }}>
                Code
              </Typography>
              <TextField
                value={currentProducts.code}
                name="code"
                onChange={handleCode}
                label="Code"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "300px" }}>
                Quantity
              </Typography>
              <TextField
                value={currentProducts.quantity}
                name="quantity"
                onChange={handleQuantity}
                label="Quantity"
                fullWidth
              />
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "205px" }}>
                Rating
              </Typography>
              <Rating
                name="customized-10"
                onChange={handleRating}
                max={10}
                precision={0.5}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" type="submit">
                SAVE
              </Button>
              <Button variant="outlined">RESET</Button>
              <Button variant="outlined">CANCEL</Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
