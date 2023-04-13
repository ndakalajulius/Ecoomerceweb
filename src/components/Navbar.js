import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <h1> Portfolio</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
