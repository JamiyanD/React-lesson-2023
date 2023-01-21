import { Link } from "react-router-dom";
import React from "react";

export default function Index() {
  const aboutPageData = {
    from: "Index",
    message: "Welcome to About Page",
    timestamp: Date.now(),
  };
  const HomePageData = {
    from: "Index",
    message: "Welcome to Home Page",
    timestamp: Date.now(),
  };

  return (
    <div>
      <h1>Day-44 -Dynamic Routing</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to={"/about"} state={aboutPageData}>
          About Page
        </Link>
        <Link to={"/home"} state={HomePageData}>
          Home Page
        </Link>

        <Link to={"/movies"}>Movies Page</Link>
        <Link to={"/gallery"}>Image Gallery Page</Link>
        <Link to={"/toast"}>Toaster Page</Link>
      </div>
    </div>
  );
}
