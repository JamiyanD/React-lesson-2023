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
export default function EditProduct() {
  const url = "http://localhost:8080/product";
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentProducts, setCurrentProducts] = useState({
    imgURL: "",
    title: "",
    subtitle: "",
    price: "",
    discount: "",
    description1: "",
    description2: "",
    code: "",
    hashtag: "",
    technology: "",
    rating: 0,
  });
  useEffect(() => {
    fetchProduct();
  }, []);
  async function fetchProduct() {
    const AXIOS_DATA = await axios.put(url, { productId: id });
    console.log(AXIOS_DATA);
    if (AXIOS_DATA.data.status === "success") {
      setCurrentProducts(AXIOS_DATA.data.data);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      ProductId: id,
      id: currentProducts.id,
      imgURL: currentProducts.imgURL,
      title: currentProducts.title,
      subtitle: currentProducts.subtitle,
      price: currentProducts.price,
      discount: currentProducts.discount,
      description1: currentProducts.description1,
      description2: currentProducts.description2,
      code: currentProducts.code,
      hashtag: currentProducts.hashtag,
      technology: currentProducts.technology,
      rating: currentProducts.rating,
      isEdit: true,
    };
    const AXIOS_DATA = await axios.post(url, putData);
    if (AXIOS_DATA.data.status === "success") {
      navigate("/productsList");
    }
  }
  function handleTitle(e) {
    setCurrentProducts({
      ...currentProducts,
      title: e.target.value,
    });
  }
  function handleSubtitle(e) {
    setCurrentProducts({
      ...currentProducts,
      subtitle: e.target.value,
    });
  }
  function Price(e) {
    setCurrentProducts({
      ...currentProducts,
      price: e.target.value,
    });
  }
  function handleDiscount(e) {
    setCurrentProducts({
      ...currentProducts,
      discount: e.target.value,
    });
  }
  function handleDescription1(e) {
    setCurrentProducts({
      ...currentProducts,
      description1: e.target.value,
    });
  }
  function handleDiscription2(e) {
    setCurrentProducts({
      ...currentProducts,
      description2: e.target.value,
    });
  }
  function handleCode(e) {
    setCurrentProducts({
      ...currentProducts,
      code: e.target.value,
    });
  }
  function handleHashtag(e) {
    setCurrentProducts({
      ...currentProducts,
      hashtag: e.target.value,
    });
  }
  function handleTechnology(e) {
    setCurrentProducts({
      ...currentProducts,
      technology: e.target.value,
    });
  }
  function handleRating(e) {
    setCurrentProducts({
      ...currentProducts,
      rating: e.target.value,
    });
    console.log(e.target.value);
  }

  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
              Edit Product
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
                Image
              </Typography>
              <Button variant="outlined" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography
                variant="h6"
                gutterBottom
                sx={{ width: "200px", marginRight: 5 }}
              >
                Title
              </Typography>
              <TextField
                value={currentProducts.title}
                name="title"
                label="Title"
                onChange={handleTitle}
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
                Subtitle
              </Typography>
              <TextField
                label="Subtitle"
                value={currentProducts.subtitle}
                name="subtitle"
                onChange={handleSubtitle}
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
                Price
              </Typography>
              <TextField
                label="Price"
                value={currentProducts.price}
                name="price"
                onChange={Price}
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
                Discount
              </Typography>
              <TextField
                value={currentProducts.discount}
                name="discount"
                label="Discount"
                onChange={handleDiscount}
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
                Description 1
              </Typography>
              <TextField
                value={currentProducts.description1}
                name="description1"
                onChange={handleDescription1}
                label="Description 1"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
                Description 2
              </Typography>
              <TextField
                value={currentProducts.discription2}
                name="description2"
                onChange={handleDiscription2}
                label="Description 2"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
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
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
                Hashtag
              </Typography>
              <TextField
                value={currentProducts.hashtag}
                name="hashtag"
                onChange={handleHashtag}
                label="Hashtag"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 5 }}>
                Technology
              </Typography>
              <TextField
                value={currentProducts.technology}
                name="technology"
                onChange={handleTechnology}
                label="Technology"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ width: "200px", marginRight: 0 }}>
                Rating
              </Typography>
              <Rating
                value={Number(currentProducts.rating)}
                name="customized-10"
                onChange={handleRating}
                max={10}
                precision={0.5}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" type="submit">
                UPDATE
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
