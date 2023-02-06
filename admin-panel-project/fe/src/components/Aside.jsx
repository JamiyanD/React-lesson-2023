import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";

const breadcrumbNameMap = {
  "/users": "Users",
  "/new": "New User",
  "/products": "Products",
  "/newProducts": "New Products",
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

export default function RouterBreadcrumbs() {
  return (
    <Box initialentries={["/users"]} initialindex={0} sx={{}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 200,
          height: "90vh",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <List>
            <ListItemLink to="/users" />
            <ListItemLink to="/new" />
            <ListItemLink to="/products" />
            <ListItemLink to="/newProducts" />
          </List>
        </Box>
      </Box>
    </Box>
  );
}
