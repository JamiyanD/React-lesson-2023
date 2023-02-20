import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function SignIn() {
  const URL = "http://localhost:8080/login";
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    if (FETCHED_JSON.status === "success") {
      navigate("/usersList");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center  mt-5 ">
      <h4 className="text-dark fw-bolder mb-3">Sign in</h4>
      <p className="form-text ">Your Social Campaigns </p>
      <div className="col-5 hstack mx-auto">
        <button className="btn btn-outline-secondary me-1 w-50">
          <img
            src="https://preview.keenthemes.com/metronic8/demo30/assets/media/svg/brand-logos/google-icon.svg"
            alt=""
            style={{ width: "20px" }}
            className="me-2"
          />
          <span className="form-text text-black">Sign in with Google</span>
        </button>
        <button className="btn btn-outline-secondary w-50">
          <img
            src="https://preview.keenthemes.com/metronic8/demo30/assets/media/svg/brand-logos/apple-black.svg"
            alt=""
            style={{ width: "20px" }}
            className="me-2"
          />
          <span className="form-text text-black"> Sign in with Apple</span>
        </button>
      </div>
      <p className="form-text my-4">Or with email</p>

      <form className="col-5" onSubmit={handleSubmit}>
        <div class="mb-3">
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            name="password"
            class="form-control "
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="mb-3 form-check">
          <label class="form-text float-end" for="exampleCheck1">
            <a href="#">Forget password ?</a>
          </label>
        </div>
        <button type="submit" class="btn btn-primary color-blue  w-100">
          Sign In
        </button>
      </form>
      <p className="form-text my-4">
        Not a Member yet? <a href="/sign-up">Sign Up</a>
      </p>
    </div>
  );
}
