import React, { useState } from 'react'
import { NavLink } from "react-router-dom"


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <nav className="flex items-center flex-row bg-teal-500 p-6">
                <NavLink className="text-white text-xl pr-4" to="/">Joe's Portfolio</NavLink>
                <button className="text-white pr-4">
                    <div onMouseEnter={() => { setIsOpen(true) }}
                        onMouseLeave={() => { setIsOpen(false) }}
                    >
                        Projects
                        {isOpen && (
                            <div className="absolute w-48 bg-white rounded-lg shadow-xl text-left">
                                <NavLink className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" to="/funstuff">Fun Stuff</NavLink>
                                <NavLink className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" to="/proper">Proper Projects</NavLink>
                                <NavLink className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" to="/exp">Working Experience</NavLink>
                            </div>
                        )}
                    </div>
                </button>
                <NavLink className="text-white pr-4" to="/aboutus">About Me</NavLink>
            </nav>
        </div>
    )
}
