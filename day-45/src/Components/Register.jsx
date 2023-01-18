import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
export default function Register() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }

  const handleSubmit = function (event) {
    event.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <div>
      <Header />
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" />
        <br />
        <button>Register</button>
      </form>
      <Link to={"/"}>Home</Link>
    </div>
  );
}
