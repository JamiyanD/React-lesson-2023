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
import Collapse from "@mui/material/Collapse";
import { breadcrumbNameMap } from "./Page";

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

export default function RouterBreadcrumbs({
  setCurrentUser,
  setCurrentProducts,
}) {
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClick2 = () => {
    setOpen2((prevOpen2) => !prevOpen2);
  };
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
        <ListItemLink to="/" open={open} onClick={handleClick} />
        <Collapse component="li" in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemLink sx={{ pl: 4 }} to="/userList" />
            <ListItemLink sx={{ pl: 4 }} to="/new" />
            <ListItemLink sx={{ pl: 4 }} to="/editUser" />
          </List>
        </Collapse>
        <ListItemLink to="/product" open={open2} onClick={handleClick2} />
        <Collapse component="li" in={open2} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemLink to="/productList" />
            <ListItemLink
              to="/newProducts"
              onClick={() => setCurrentProducts("")}
            />
            <ListItemLink to="/editProduct" />
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
