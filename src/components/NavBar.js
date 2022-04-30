import React from "react";

export const NavBar = () => {
  return (
    <div classNameName="flex flex-wrap justify-evenly">
      <nav className="bg-white ">
        <div className="container p-6 mx-auto">
          <div className="flex flex-wrap items-center justify-center mt-2 text-gray-600 capitalize">
            <a
              href="/"
              className="text-gray-800  border-b-2 border-blue-500 mx-1.5 sm:mx-6"
            >
              home
            </a>

            <a
              href="/home"
              className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Team
            </a>

            <a
              href="/products"
              className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Products
            </a>

            <a
              href="/home"
              className="border-b-2 border-transparent hover:text-gray-800  hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Research
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
