import TextField from "@mui/material/TextField";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const url = "http://localhost:8080/user";

  useEffect(() => {
    fetchProduct();
  }, []);
  async function fetchProduct() {
    const AXIOS_DATA = await axios.put(url, { userId: id });
    if (AXIOS_DATA.data.status === "success") {
      setCurrentUser(AXIOS_DATA.data.data);
    }
  }
  const [currentUser, setCurrentUser] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    password: "",
    checkbox: false,
    role: "",
    imgURL: "",
  });
  const [roles, setRoles] = useState([]);
  const ROLE_URL = "http://localhost:8080/userRoles";
  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setRoles(FETCHED_JSON);
  }
  useEffect(() => {
    fetchRoles();
  }, []);
  console.log(currentUser.role);
  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      userId: id,
      id: currentUser.id,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      phoneNumber: currentUser.phoneNumber,
      email: currentUser.email,
      password: currentUser.password,
      checkbox: currentUser.checkbox,
      role: currentUser.role,
      imgURL: currentUser.imgURL,
      isEdit: true,
    };
    const AXIOS_DATA = await axios.post(url, putData);
    console.log(AXIOS_DATA);
    if (AXIOS_DATA.data.status === "success") {
      navigate("/usersList");
    }
  }

  function handleFirstName(e) {
    setCurrentUser({
      ...currentUser,
      firstname: e.target.value,
    });
  }

  function handleLastName(e) {
    setCurrentUser({
      ...currentUser,
      lastname: e.target.value,
    });
  }
  function handlePhoneNumber(e) {
    setCurrentUser({
      ...currentUser,
      phoneNumber: e.target.value,
    });
  }
  function handleEmail(e) {
    setCurrentUser({
      ...currentUser,
      email: e.target.value,
    });
  }
  function handlePassword(e) {
    setCurrentUser({
      ...currentUser,
      password: e.target.value,
    });
  }
  function handleCheckbox(e) {
    setCurrentUser({
      ...currentUser,
      checkbox: e.target.checked,
    });
  }
  function handleRadio(e) {
    console.log(e.target.value);
    if (e.target.value) {
      setCurrentUser({
        ...currentUser,
        role: e.target.value,
      });
    }
  }
  function handleUpload(e) {
    setCurrentUser({
      ...currentUser,
      imgURL: e.target.value,
    });
  }
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{}}>
            <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
              Edit User
            </Typography>
            <TextField
              value={currentUser.firstname}
              name="firstname"
              onChange={handleFirstName}
              label="First Name"
            />
            <TextField
              value={currentUser.lastname}
              name="lastname"
              label="Last Name"
              onChange={handleLastName}
            />
            <TextField
              label="Phone Number"
              value={currentUser.phoneNumber}
              name="phoneNumber"
              onChange={handlePhoneNumber}
            />
            <TextField
              label="Email"
              value={currentUser.email}
              name="email"
              onChange={handleEmail}
            />
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Role
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                row
                // value={currentUser.role.id}
                onChange={handleRadio}
              >
                {roles &&
                  roles.map((role, khuslen) => {
                    return (
                      <FormControlLabel
                        key={khuslen}
                        value={role.role_id}
                        control={<Radio />}
                        label={role.role_name}
                      />
                    );
                  })}
              </RadioGroup>
            </FormControl>
            <div>
              <Typography sx={{ color: "#9e9e9e" }}>Disabled</Typography>
              <Checkbox onChange={handleCheckbox} />
            </div>
            <Typography sx={{ color: "#9e9e9e" }}>Avatar</Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
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
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </Stack>
            <TextField
              value={currentUser.password}
              name="password"
              label="Password"
              onChange={handlePassword}
            />
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
