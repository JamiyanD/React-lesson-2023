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
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    password: "",
    checkbox: false,
    role: "",
    imgURL: "",
    isEdit: false,
  });
  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState("");
  const navigate = useNavigate();
  const URL = "http://localhost:8080/user";

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

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(currentUser.role);
    if (
      currentUser.role == 1 ||
      currentUser.role == 2 ||
      currentUser.role == 3
    ) {
      const AXIOS_DATA = await axios.post(URL, currentUser);
      if (AXIOS_DATA.data.status === "success") {
        navigate("/usersList");
      }
    } else {
      setValidation("You must check radio please!");
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
