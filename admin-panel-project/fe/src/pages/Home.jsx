import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import Breadcrumbs from "@mui/material/Breadcrumbs";
const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" noWrap component="div">
              React Material Admin Full
            </Typography>
          </Link>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="" />
            <Typography sx={{ color: "white", marginLeft: 1 }}>
              Hi, Admin
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem key={"Users"} disablePadding>
              <ListItemButton to={"/users"}>
                <ListItemIcon>
                  <AccountCircleIcon color="action" />
                </ListItemIcon>

                <ListItemText primary={"Users"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Products"} disablePadding>
              <ListItemButton to={"/products"}>
                <ListItemIcon>
                  <LocalGroceryStoreIcon />
                </ListItemIcon>
                <ListItemText primary={"Products"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer> */}
    </Box>
  );
}
