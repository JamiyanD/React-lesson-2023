import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button, Grid, TextField } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
export default function LoginForm() {
  const URL = "http://localhost:8080/login";
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    if (FETCHED_JSON.status === "success") {
      toast("You are approved to Login");
      navigate("/users");
    }
  };

  return (
    <div>
      <h1>LoginForm</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              id="email"
              name="email"
              variant="filled"
              size="small"
              defaultValue=""
              label="User name"
            />
          </Grid>
          <Grid item xs={12}>
            <input
              id="password"
              name="password"
              variant="filled"
              size="small"
              defaultValue=""
              type="password"
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
