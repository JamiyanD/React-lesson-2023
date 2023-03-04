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
  const url = "http://localhost:8080/users";
  const [currentUser, setCurrentUser] = useState({
    full_name: "",
    email: "",
    password: "",
    role: "",
    phone_number: "",
  });
  useEffect(() => {
    axiosProduct();
  }, []);
  async function axiosProduct() {
    const AXIOS_DATA = await axios.put(url, { userId: id });
    if (AXIOS_DATA.status == 200) {
      setCurrentUser(AXIOS_DATA.data[0]);
    }
  }

  const [roles, setRoles] = useState([]);
  const ROLE_URL = "http://localhost:8080/userRoles";
  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON);
  }
  useEffect(() => {
    fetchRoles();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      userId: id,
      full_name: currentUser.full_name,
      phone_number: currentUser.phone_number,
      email: currentUser.email,
      password: currentUser.password,
      role: currentUser.role,
      isEdit: true,
    };
    console.log(putData);
    const AXIOS_DATA = await axios.post(url, putData);

    if (AXIOS_DATA.status == 200) {
      navigate("/usersList");
    }
  }

  function handleFullName(e) {
    setCurrentUser({
      ...currentUser,
      full_name: e.target.value,
    });
  }

  function handlePhoneNumber(e) {
    setCurrentUser({
      ...currentUser,
      phone_number: e.target.value,
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

  function handleRadio(e) {
    console.log(e.target.value);
    if (e.target.value) {
      setCurrentUser({
        ...currentUser,
        role: e.target.value,
      });
    }
  }
  // function handleUpload(e) {
  //   setCurrentUser({
  //     ...currentUser,
  //     imgURL: e.target.value,
  //   });
  // }
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{}}>
            <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
              Edit User
            </Typography>
            <TextField
              value={currentUser.full_name}
              name="full_name"
              onChange={handleFullName}
              label="First Name"
            />

            <TextField
              label="Email"
              value={currentUser.email}
              name="email"
              onChange={handleEmail}
            />
            <TextField
              value={currentUser.password}
              name="password"
              label="Password"
              onChange={handlePassword}
            />
            <TextField
              label="Phone Number"
              value={currentUser.phone_number}
              name="phone_number"
              onChange={handlePhoneNumber}
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

            {/* <Typography sx={{ color: "#9e9e9e" }}>Avatar</Typography>
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
            </Stack> */}

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
