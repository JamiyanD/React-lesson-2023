import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link as RouterLink } from "react-router-dom";

const breadcrumbNameMap = {
  "/users": "Users",
  "/new": "New User",
  "/editUser": "Edit User",
  "/products": "Products",
  "/newProducts": "New Products",
  "/editProduct": "Edit Product",
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <AccountCircleIcon color="action" sx={{ marginRight: 2 }} />
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default function RouterBreadcrumbs({ setCurrentUser }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 250,
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <List>
        <ListItemLink to="/users" />
        <ListItemLink to="/new" />
        <ListItemLink to="/editUser" />
        <ListItemLink to="/products" />
        <ListItemLink to="/newProducts" />
        <ListItemLink to="/editProduct" />
      </List>
    </Box>
  );
}
