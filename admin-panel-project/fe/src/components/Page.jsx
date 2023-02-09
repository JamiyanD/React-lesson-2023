import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { Link as RouterLink, useLocation } from "react-router-dom";
export const breadcrumbNameMap = {
  "/": "User",
  "/userList": "User List",
  "/new": "New User",
  "/editUser": "Edit User",
  "/product": "Product",
  "/productList": "Product List",
  "/newProducts": "New Products",
  "/editProduct": "Edit Product",
};
function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

export default function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Container
      sx={{
        backgroundColor: "white",
        paddingY: "15px",
        marginY: "10px",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <LinkRouter underline="hover" color="inherit" to="/">
          Home
        </LinkRouter>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <Typography color="text.primary" key={to}>
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <LinkRouter underline="hover" color="inherit" to={to} key={to}>
              {breadcrumbNameMap[to]}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    </Container>
  );
}
