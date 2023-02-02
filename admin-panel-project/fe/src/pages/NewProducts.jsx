import TextField from "@mui/material/TextField";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Home from "./Home";
export default function NewUser({
  currentProducts,
  setCurrentProducts,
  productUpdate,
  setProductUpdate,
}) {
  const url = "http://localhost:8080/newProducts";
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!productUpdate) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentProducts),
      };
      const FETCHED_DATA = await fetch(url, options); // hervee options bhq bol default oor get method yvuuldag
      const FETCHED_JSON = await FETCHED_DATA.json();
      console.log(currentProducts);
    } else {
      const putData = {
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
      };
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putData),
      };
      const FETCHED_DATA = await fetch(url, options); // hervee options bhq bol default oor get method yvuuldag
      const FETCHED_JSON = await FETCHED_DATA.json();
      console.log(FETCHED_JSON.data);
      setProductUpdate(false);
    }
  }
  const [file, setFiles] = useState(null);
  const inputRef = useRef();
  function handleUpload(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));

    setCurrentProducts({
      ...currentProducts,
      imgURL: "Not Yet",
    });
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
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Home />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <form onSubmit={handleSubmit} style={{ marginTop: "70px" }}>
          <Stack spacing={2} sx={{ width: "800px" }}>
            <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
              New Product
            </Typography>
            <Stack direction="row" alignItems="center" spacing={7.5}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Image
              </Typography>
              <img src={image} alt="" style={{ width: 100 }} />
              <Button variant="contained" component="label">
                Upload
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleUpload}
                />
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Title
              </Typography>
              <TextField
                value={currentProducts.title}
                name="title"
                label="Title"
                onChange={handleTitle}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Subtitle
              </Typography>
              <TextField
                label="Subtitle"
                value={currentProducts.subtitle}
                name="subtitle"
                onChange={handleSubtitle}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Price
              </Typography>
              <TextField
                label="Price"
                value={currentProducts.price}
                name="price"
                onChange={Price}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Discount
              </Typography>
              <TextField
                value={currentProducts.discount}
                name="discount"
                label="Discount"
                onChange={handleDiscount}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Description 1
              </Typography>
              <TextField
                value={currentProducts.description1}
                name="description1"
                onChange={handleDescription1}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Description 2
              </Typography>
              <TextField
                value={currentProducts.discription2}
                name="description2"
                onChange={handleDiscription2}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Code
              </Typography>
              <TextField
                value={currentProducts.code}
                name="code"
                onChange={handleCode}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Hashtag
              </Typography>
              <TextField
                value={currentProducts.hashtag}
                name="hashtag"
                onChange={handleHashtag}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Technology
              </Typography>
              <TextField
                value={currentProducts.technology}
                name="technology"
                onChange={handleTechnology}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={15}>
              <Typography variant="h6" gutterBottom sx={{ width: "190px" }}>
                Rating
              </Typography>
              <TextField
                value={currentProducts.rating}
                name="rating"
                onChange={handleRating}
                id="fullWidth"
                fullWidth
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              {productUpdate ? (
                <Button variant="contained" type="submit">
                  UPDATE
                </Button>
              ) : (
                <Button variant="contained" type="submit">
                  SAVE
                </Button>
              )}

              <Button variant="outlined">RESET</Button>
              <Button variant="outlined">CANCEL</Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
