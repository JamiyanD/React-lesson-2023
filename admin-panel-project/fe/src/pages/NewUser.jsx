import TextField from "@mui/material/TextField";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import FormHelperText from "@mui/joy/FormHelperText";
export default function NewUser() {
  const [validation, setValidation] = useState("");
  const [currentUser, setCurrentUser] = useState({
    full_name: "",
    email: "",
    role: "",
    password: "",
    phone_number: "",
    isEdit: false,
  });
  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState("");
  const navigate = useNavigate();
  const URL = "http://localhost:8080/users";

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
    console.log(currentUser.role);
    if (
      currentUser.role == 1 ||
      currentUser.role == 2 ||
      currentUser.role == 3
    ) {
      const AXIOS_DATA = await axios.post(URL, currentUser);
      console.log(AXIOS_DATA.status);
      if (AXIOS_DATA.status == 200) {
        navigate("/usersList");
      }
    } else {
      setValidation("You must check radio please!");
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
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5"
    >
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{}}>
            <Typography variant="h5" sx={{ color: "#9e9e9e" }}>
              Add Users
            </Typography>
            <TextField
              value={currentUser.firstname}
              name="full_name"
              onChange={handleFullName}
              label="Full Name"
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
              value={currentUser.phoneNumber}
              name="phone_number"
              onChange={handlePhoneNumber}
            />

            <div>
              <Typography sx={{ color: "#9e9e9e" }}>Role</Typography>
              <RadioGroup row>
                {roles &&
                  roles.map((role, khuslen) => {
                    return (
                      <FormControlLabel
                        key={khuslen}
                        onChange={handleRadio}
                        value={role.role_id}
                        control={<Radio />}
                        label={role.role_name}
                      />
                    );
                  })}
              </RadioGroup>
              <FormHelperText
                id="component-helper-text"
                className="text-danger"
              >
                {validation}
              </FormHelperText>
            </div>

            {/* <Typography sx={{ color: "#9e9e9e" }}>Avatar</Typography> */}
            {/* <Stack direction="row" alignItems="center" spacing={2}>
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
