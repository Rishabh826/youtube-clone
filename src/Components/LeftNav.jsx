// src/Components/LeftNav.js
import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <nav className="w-60 bg-gray-800 text-white">
      <ul>
        <li>
          <NavLink to="/" className="block py-2 px-4 hover:bg-gray-700">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/trending" className="block py-2 px-4 hover:bg-gray-700">
            Trending
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
