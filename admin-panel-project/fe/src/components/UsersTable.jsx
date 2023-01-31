import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 130,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 130,
  },
  {
    field: "role",
    headerName: "Role",
    width: 130,
  },
  {
    field: "disabled",
    headerName: "Disabled",
    width: 130,
  },
];
const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    phoneNumber: 99119999,
    email: "black@gmail.com",
    role: "user",
    disabled: "yes",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    phoneNumber: 9911998,
    email: "black@gmail.com",
    role: "user",
    disabled: "yes",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    phoneNumber: 88119999,
    email: "black@gmail.com",
    role: "user",
    disabled: "yes",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    phoneNumber: 88119998,
    email: "black@gmail.com",
    role: "user",
    disabled: "yes",
  },
];
export default function UsersTable() {
  return (
    <div style={{ height: "500px", width: "800px", marginTop: "70px" }}>
      <h2>Users</h2>
      <Link to={"/new"}>
        <Button variant="contained" sx={{ margin: "10px" }}>
          New
        </Button>
      </Link>
      <Button variant="contained" sx={{ marginLeft: "590px" }}>
        ADD FILTER
      </Button>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{}}
      />
    </div>
  );
}
