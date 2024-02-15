import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Jobs
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Home</NavLink>
        </li>
        <li>
          <NavLink to="/home">About</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact">Post Job</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};