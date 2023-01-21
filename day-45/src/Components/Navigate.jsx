import { Navigate } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Header from "./Header";
export default function Register() {
  const [toDashboard, setToDashboard] = useState(false);
  if (toDashboard === true) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <Header />
      <h1>Register</h1>
      <Form afterSubmit={() => toDashboard(true)} />
    </div>
  );
}
