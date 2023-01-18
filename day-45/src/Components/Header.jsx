import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1>Header</h1>
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link
          to="/login"
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => {
            setActiveIndex(3);
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => {
            setActiveIndex(1);
          }}
        >
          Register
        </Link>
        <Link
          to="/Accordion"
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => {
            setActiveIndex(2);
          }}
        >
          Accordion
        </Link>
      </nav>
    </div>
  );
}
