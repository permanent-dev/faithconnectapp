import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // or any icons you like
import Navbutton from "./Navbutton.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="p-4 ">
            <div className="flex justify-between gap-20 items-center">
                {/* <h1 className="text-2xl font-bold">Brand</h1> */}

                {/* Hamburger Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={38} /> : <Menu size={38} />}
                </button>

                {/* Normal Horizontal Menu */}
                <ul className="hidden md:flex gap-30 text-lg">
                    <li><Link to="/podcast" className="capitalize text-[#000000] text-[2.5rem]">podcast</Link></li>
                    <li><Link to="/events" className="capitalize text-[#000000] text-[2.5rem]">events</Link></li>
                    <li><Link to="/blog" className="capitalize text-[#000000] text-[2.5rem]">blog</Link></li>
                    <li><Link to="/about us" className="capitalize text-[#000000] text-[2.5rem]">about us</Link></li>
                    <li><Navbutton /></li>

                </ul>


            </div>

            {/* Sidebar for small screens */}
            <div
                className={`md:hidden fixed capitalize top-0 left-0 h-full w-2/3 bg-gray-400 shadow-md z-[100] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <ul className="flex flex-col p-6 gap-16 text-[1.5rem]">
                    <li><Link to="/podcast" onClick={toggleMenu}>podcast</Link></li>
                    <li><Link to="/events" onClick={toggleMenu}>events</Link></li>
                    <li><Link to="/blog" onClick={toggleMenu}>blog</Link></li>
                    <li><Link to="/about us" onClick={toggleMenu}>about us</Link></li>
                </ul>
                <div className="p-6 mt-5 flex flex-col">
                    <Navbutton onClick={toggleMenu} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
