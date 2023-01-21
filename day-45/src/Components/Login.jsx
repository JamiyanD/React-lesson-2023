import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "khangaikhuu@gmail.com",
    password: "123456",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("permitted");
      navigate(-1, { state: { bookName: "Fake Title" } });
    } else {
      toast("not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    }
  };

  return (
    <div>
      <Header />
      <h1>Login page</h1>

      <Link to={"/"}>Home</Link>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Login Name:</label>
        <input name="username" type="email" /> <br />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" /> <br />
        <button>Sign In</button>
      </form>
      <ToastContainer />
    </div>
  );
}
