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
export default function EditUser({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const URL = "http://localhost:8080/user";

  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      id: currentUser.id,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      phoneNumber: currentUser.phoneNumber,
      email: currentUser.email,
      password: currentUser.password,
      checkbox: currentUser.checkbox,
      radio: currentUser.radio,
      imgURL: currentUser.imgURL,
    };
    const FETCHED_DATA = await axios.put(URL, putData);
    navigate("/usersList");
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
  function handleRadioAdmin(e) {
    if (e.target.checked) {
      setCurrentUser({
        ...currentUser,
        radio: e.target.value,
      });
    }
  }
  function handleRadioUser(e) {
    if (e.target.checked) {
      setCurrentUser({
        ...currentUser,
        radio: e.target.value,
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
            <div>
              <Typography sx={{ color: "#9e9e9e" }}>Role</Typography>
              <RadioGroup row>
                <FormControlLabel
                  onChange={handleRadioAdmin}
                  value="Admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  onChange={handleRadioUser}
                  value="User"
                  control={<Radio />}
                  label="User"
                />
              </RadioGroup>
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
