import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6">React Material Admin Full</Typography>
          </Link>
          <IconButton>
            <Avatar alt="Remy Sharp" src="" />
            <Typography sx={{ color: "white", marginLeft: 1 }}>
              Hi, Admin
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
