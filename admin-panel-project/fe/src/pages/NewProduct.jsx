import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import axios from "axios";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox } from "@mui/material";
export default function NewUser() {
  const URL = "http://localhost:8080/products";

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [currentProducts, setCurrentProducts] = useState({
    // imgURL: "",
    name: "",
    // subtitle: "",
    // price: "",
    // discount: "",
    // description1: "",
    category: 1,
    // code: "",
    // hashtag: "",
    // technology: "",
    // rating: "",
    isEdit: false,
  });
  const [defaultSelect, setDefaultSelect] = useState(1);
  const CATEGORIES_URL = "http://localhost:8080/product-categories";
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setCategories(FETCHED_JSON);
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.email.value);
    console.log(currentProducts);
    const AXIOS_DATA = await axios.post(URL, currentProducts);
    if (AXIOS_DATA.status == 200) {
      navigate("/productsList");
    }
  }
  function handleUpload(e) {
    // setImage(URL.createObjectURL(e.target.files[0]));
    // console.log(URL.createObjectURL(e.target.files[0]));
    // setCurrentProducts({
    //   ...currentProducts,
    //   imgURL: "Not Yet",
    // });
  }

  function handleName(e) {
    setCurrentProducts({
      ...currentProducts,
      name: e,
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

  function handleChange(select) {
    setDefaultSelect(select.target.value);
    console.log(select.target.value);
    setCurrentProducts({
      ...currentProducts,
      category: select.target.value,
    });
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);
  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const [sliderValue, setSliderValue] = useState(0);
  const handleSlider = (newValue) => {
    setSliderValue(newValue.target.value);
  };

  const [showTax, setShowTax] = useState(true);
  const [radioValue, setRadioValue] = useState(2);
  function handleRadio(e) {
    setRadioValue(e.target.value);
    if (e.target.value == 1 || e.target.value == 3) {
      setShowTax(false);
    } else {
      setShowTax(true);
    }
  }

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5 p-3"
    >
      <Box sx={{ flexGrow: 1, p: 2 }} className="p-0">
        <form onSubmit={handleSubmit}>
          <div className="border border-2 rounded-5 p-3 border-light mb-3">
            <Typography variant="h6" sx={{ width: "300px" }}>
              Thumbnail
            </Typography>

            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              className=""
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleUpload}
              />
              <EditIcon className="text-secondary text-opacity-50" />
            </IconButton>

            <p className="form-text mx-auto">
              Set the product thumbnail image. Only *.png, *.jpg and *.jpeg
              image files are accepted
            </p>
          </div>
          <Stack className="border border-2 rounded-5 p-3 border-light mb-3">
            <Typography variant="h6" gutterBottom>
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
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleTabs}
                aria-label="basic tabs example"
              >
                <Tab label="General" {...a11yProps(0)} />
                <Tab label="Advanced" {...a11yProps(1)} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0} className="p-0">
              <div class="my-4 border border-2 border-light rounded-5 p-3">
                <Typography variant="h6" gutterBottom className="m-3">
                  General
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Product Name
                </Typography>
                <input
                  type=""
                  name="name"
                  class="form-control "
                  placeholder="Product name"
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleName(e.target.value);
                  }}
                  value={currentProducts.name}
                />

                <FormHelperText className="mb-4">
                  A product name is required and recommended to be unique.
                </FormHelperText>
                <Typography variant="subtitle2" gutterBottom>
                  Description
                </Typography>
                <textarea
                  class="form-control rounded-3"
                  placeholder="Type your text here..."
                  style={{ height: "200px" }}
                ></textarea>
                <FormHelperText>
                  Set a description to the product for better visibility.
                </FormHelperText>
              </div>
              <div class="mb-4 border border-2 border-light rounded-5 p-3">
                <Typography variant="h6" gutterBottom className="my-3">
                  Pricing
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Base Price
                </Typography>
                <input
                  type=""
                  name=""
                  class="form-control rounded-3"
                  placeholder="Product price"
                  onChange={handlePrice}
                  value={currentProducts.price}
                />
                <FormHelperText className="mb-4">
                  Set the product price.
                </FormHelperText>
                <Typography variant="subtitle2" gutterBottom>
                  Discount Type
                </Typography>
                <RadioGroup
                  row
                  className="hstack gap-3 mb-4"
                  onChange={handleRadio}
                  value={radioValue}
                >
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    label="No Discount"
                    value={1}
                    className="new-product-radio"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Percentage %"
                    value={2}
                    className="new-product-radio"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Fixed Price"
                    value={3}
                    className="new-product-radio"
                  />
                </RadioGroup>
                {showTax && (
                  <>
                    <Typography variant="h4" className="text-center">
                      {sliderValue}%
                    </Typography>
                    <Slider
                      aria-label="Volume"
                      value={sliderValue}
                      onChange={handleSlider}
                    />
                    <FormHelperText className="mb-4">
                      Set a percentage discount to be applied on this product.
                    </FormHelperText>
                  </>
                )}
                <Stack direction="row">
                  <FormControl className="w-50" size="small">
                    <Typography variant="subtitle2" gutterBottom>
                      Tax Class
                    </Typography>
                    <Select
                      value=""
                      onChange={""}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      className=" rounded-3 text-muted"
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
                      IconComponent={(props) => (
                        <ExpandMoreIcon
                          className="m-2 text-black-50"
                          {...props}
                        />
                      )}
                    >
                      <MenuItem disabled value="">
                        Select an option
                      </MenuItem>
                      <MenuItem k value="1">
                        Tax Free
                      </MenuItem>
                      <MenuItem k value="2">
                        Taxable Goods
                      </MenuItem>
                      <MenuItem k value="3">
                        Downloadable Product
                      </MenuItem>
                    </Select>
                    <FormHelperText>Set the product tax class.</FormHelperText>
                  </FormControl>
                  <div className="w-50 ms-2">
                    <Typography variant="subtitle2" gutterBottom>
                      VAT Amount(%)
                    </Typography>
                    <input type="" name="" class="form-control rounded-3" />
                    <FormHelperText className="mb-4">
                      Set the product VAT about.
                    </FormHelperText>
                  </div>
                </Stack>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div class="my-4 border border-2 border-light rounded-5 p-3">
                <Typography variant="h6" gutterBottom className="m-3">
                  Inventory
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  SKU
                </Typography>
                <input
                  type=""
                  name="code"
                  class="form-control rounded-3"
                  placeholder="SKU Number"
                  onChange={handleCode}
                  value={currentProducts.code}
                />
                <FormHelperText className="mb-4">
                  Enter the product SKU.
                </FormHelperText>
                <Typography variant="subtitle2" gutterBottom>
                  Barcode
                </Typography>
                <input
                  type=""
                  name="code"
                  class="form-control rounded-3"
                  placeholder="Barcode Number"
                />
                <FormHelperText className="mb-4">
                  Enter the product barcode number.
                </FormHelperText>
                <Typography variant="subtitle2" gutterBottom>
                  Quantity
                </Typography>
                <Stack direction="row">
                  <input
                    type="number"
                    name="quantity"
                    className="form-control rounded-3 "
                    placeholder="On shelf"
                    onChange={handleQuantity}
                    value={currentProducts.quantity}
                  />
                  <input
                    type="number"
                    name="warehouse"
                    className="form-control rounded-3 ms-2"
                    placeholder="In warehouse"
                  />
                </Stack>
                <FormHelperText className="mb-4">
                  Enter the product quantity.
                </FormHelperText>
                <Typography variant="subtitle2" gutterBottom>
                  Allow Backorders
                </Typography>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Yes"
                  className="text-muted"
                />
                <FormHelperText className="mb-4">
                  Allow customers to purchase products that are out of stock.
                </FormHelperText>
              </div>
            </TabPanel>
          </Box>

          <Stack direction="row" spacing={2} justifyContent="end">
            <Button
              variant="contained"
              className="bg-light text-muted rounded-3"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="color-blue rounded-3"
            >
              Save Changes
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
