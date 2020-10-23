import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    {
      to: "/funstuff",
      name: "Fun Stuff",
    },
    { to: "/proper", name: "Proper Projects" },
  ];

  return (
    <div>
      <nav className="absolute flex items-center flex-row bg-transparent p-6">
        <NavLink className="text-white text-2xl pr-4 z-50 " to="/">
          Joe's Portfolio
        </NavLink>
        <button className="text-white pr-4 z-50 text-lg">
          <div
            onMouseEnter={() => {
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              setIsOpen(false);
            }}
          >
            Projects
            {isOpen && (
              <div className="absolute z-50 w-48 bg-white rounded-lg shadow-xl text-left">
                {tabs.map((tab) => (
                  <NavLink
                    className="block px-4 py-2 text-base text-gray-800 hover:bg-indigo-500 hover:text-white"
                    to={tab.to}
                  >
                    {tab.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </button>
        <NavLink className="text-white pr-4 z-50 text-lg" to="/aboutus">
          About Me
        </NavLink>
      </nav>
    </div>
  );
}
