import React from 'react'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Podcast, House, LibraryBigIcon, Logs, CopyrightIcon, AlertCircleIcon } from "lucide-react"; // or any icons you like
import Footersection from './Footersection';


function Dashnav() {
    const [isOpen, setisOpen] = useState(false);
    const navlinks = [
        { id: 1, name: "dashboard", icon: <House size={45} />, link: '/dashboard/home' },
        { id: 2, name: "podcast", icon: <Podcast size={45} />, link: '/dashboard/podcast' },
        { id: 3, name: "books", icon: <LibraryBigIcon size={45} />, link: '/dashboard/book' },
        { id: 4, name: "blogs", icon: <Logs size={45} />, link: '/dashboard/blog' }
    ];







    return (
        <div>
            <div className={`flex flex-col bg-[white] min-h-screen rounded-l-[1.8rem] 
                ${isOpen ? 'w-77 space-y-23 ' : 'space-y-31 w-24 mr-53'}`}
            >
                <div className={`${isOpen ? '' : 'bg-[#ee9922] px-6 py-2 w-24 mr-53 '} rounded-tl-[1.8rem] flex gap-13`}>
                    <img src="/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt=""
                        className={`h-29 mt-9 ${isOpen ? 'block' : 'hidden'}`} />
                    <button onClick={() => setisOpen(!isOpen)}>
                        {isOpen ? <Menu size={45} /> : <Menu size={45} className='mt-[1.8rem]' />}
                    </button>
                </div>
                <ul className='flex flex-col gap-12'>

                    {navlinks.map(nav => (
                        <li key={nav.id} className=' capitalize font-bold text-[1.7rem]' >

                            <NavLink to={nav.link} className={({ isActive }) => `flex gap-4 px-3 py-2 rounded-r-full transition-colors duration-300 mr-2 ${isActive ? "bg-[#ffa500] text-white" : "hover:bg-orange-300"}`
                            }>



                                {nav.icon}
                                {isOpen && <span>{nav.name}</span>}



                            </NavLink>
                        </li>
                    ))}

                </ul>


                <div>


                </div>
                <div>
                    <Link to="/aboutus">
                        <p className='flex gap-3 capitalize text-[2rem] px-4 mb-2'>
                            <AlertCircleIcon size={40} />
                            {isOpen && 'about'}
                        </p>
                    </Link>
                    <p className='capitalize mt-5  '>

                        {isOpen &&
                            <span className='flex gap-1 items-center justify-center'>
                                <CopyrightIcon size={20} />
                                2025 Faithconnect App

                            </span>}
                    </p>
                </div>

            </div >

        </div >
    )
}

export default Dashnav