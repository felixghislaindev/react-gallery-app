import React from "react";
import { NavLink } from "react-router-dom";
const NavForm = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/computer">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavForm;
