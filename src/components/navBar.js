// this component hold the navigation of the apllciation
import React from "react";
import { NavLink } from "react-router-dom";
const NavForm = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink exact to="/">
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/computer">Boats</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavForm;
