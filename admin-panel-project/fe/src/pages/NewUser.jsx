import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState, useEffect } from "react";
import FormHelperText from "@mui/joy/FormHelperText";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { TimerContext } from "../context";
export default function NewUser() {
  const [currentUser, setCurrentUser] = useState({
    full_name: "",
    email: "",
    role: "",
    password: "",
    phone_number: "",
    isEdit: false,
    joined_date: new Date().toString().substr(3, 21),
  });
  const [roles, setRoles] = useState([]);
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
    const AXIOS_DATA = await axios.post(URL, currentUser);
    console.log(AXIOS_DATA.status);
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
  const [sda, setSda] = useContext(TimerContext);
  const handleOpen = () => {
    console.log(sda);
  };
  //   const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5"
    >
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        // open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="add-user-modal rounded-4 p-3">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add User Details
          </Typography>
          <Box sx={{ flexGrow: 1, p: 2 }} className="">
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" sx={{ width: "300px" }}>
                User Information
              </Typography>
              <FormHelperText className=" mt-3">Update Avatar</FormHelperText>
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
                  // onChange={handleUpload}
                />
                <EditIcon className="text-secondary text-opacity-50" />
              </IconButton>
              <Typography variant="subtitle2" className="mt-3">
                Name
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handleFullName}
                value={currentUser.full_name}
              />
              <Typography variant="subtitle2" className="mt-3">
                Email
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handleEmail}
                value={currentUser.email}
              />
              <Typography variant="subtitle2" className="mt-3">
                Password
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handlePassword}
                value={currentUser.password}
              />
              <Typography variant="subtitle2" className="mt-3">
                Phone Number
              </Typography>
              <input
                type=""
                name="name"
                className="form-control bg-light border-0 add-user-input"
                onChange={handlePhoneNumber}
                value={currentUser.phone_number}
              />

              <div>
                <Typography variant="subtitle2" className="my-3">
                  Role
                </Typography>
                <RadioGroup>
                  {roles &&
                    roles.map((role, khuslen) => {
                      return (
                        <>
                          <Stack
                            direction="row"
                            alignItems="center"
                            className="mb-3"
                          >
                            <input
                              key={khuslen}
                              onChange={handleRadio}
                              value={role.name}
                              className="form-check-input me-3"
                              type="radio"
                              size="medium"
                              name="radioNoLabel"
                              id="radioNoLabel1"
                            />
                            {/* <FormControlLabel
                              key={khuslen}
                              onChange={handleRadio}
                              value={role.id}
                              control={<Radio />}
                              className="m-0"
                            /> */}
                            <div>
                              <Typography variant="subtitle2" gutterBottom>
                                {role.name}
                              </Typography>
                              <FormHelperText className="">
                                A product name is required and recommended to be
                                unique.
                              </FormHelperText>
                            </div>
                          </Stack>
                        </>
                      );
                    })}
                </RadioGroup>
              </div>

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                className="mt-3"
              >
                <Button
                  variant="contained"
                  className="bg-light text-muted rounded-3"
                >
                  Discard
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className="color-blue rounded-3"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
