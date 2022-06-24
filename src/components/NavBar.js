import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <nav className="bg-white ">
        <div className="container p-6 mx-auto">
          <div className="flex flex-wrap items-center justify-center mt-2 text-gray-600 capitalize">
              <NavLink to="/"
              className=" sm:mx-10 border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-1.5"
            >
              Home
              </NavLink>

            <NavLink to="/teams"
              className=" sm:mx-10 border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-1.5"
            >
              Team
            </NavLink>

            <NavLink to="/products"
              className=" sm:mx-10 border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-1.5"
            >
              Products
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
