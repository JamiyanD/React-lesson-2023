import { Link } from "react-router-dom";
import Header from "./Header";
export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      {/* <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/login" className="active">
          Login
        </Link>
        <Link to="/register">Register</Link>
        <Link to="/Accordion">Accordion</Link>
      </nav> */}
    </div>
  );
}
