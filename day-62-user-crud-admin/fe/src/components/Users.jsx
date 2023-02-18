import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function Users() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users list</h1>
      <a href="/register">register</a>
      <a href="/login">login</a>
      <p></p>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>

                      <td>{user.role.name}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </div>
  );
}
