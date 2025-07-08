import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Locate, CopyrightIcon } from 'lucide-react'

const Footersection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);



  return (
    <>
      {/* <div className='grid grid-col-1 items-center justify-center'> */}
      <div className=' md:flex justify-around p-4 bg-gray-300 rounded-t-[2rem]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='capitalize font-bold text-[2.5rem]'>
            quick links
          </h1>
          <ul className="flex flex-col p-6 gap-9 capitalize text-[1.5rem]">
            <li className='text-[1.5rem]'><Link to="/podcast" onClick={toggleMenu}>podcast</Link></li>
            <li className='text-[1.5rem]'><Link to="/events" onClick={toggleMenu}>events</Link></li>
            <li className='text-[1.5rem]'><Link to="/blog" onClick={toggleMenu}>blog</Link></li>
            <li className='text-[1.5rem]'><Link to="/aboutus" onClick={toggleMenu}>about us</Link></li>
          </ul>
        </div>
        <div className='flex flex-col justify-center capitalize items-center'>
          <img src="/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" />
          <ul className='space-y-4 text-[1.4rem]'>
            <li className='flex gap-5'><Phone />
              <span>+234 67 455 43</span>
            </li>
            <li className='flex gap-5'>
              <Locate />
              <span>redemption city of god, <br /> mowe, ogun state.</span>
            </li>
          </ul>
        </div>

      </div>
      <p className='capitalize mt-5 flex items-center justify-center'>
        <CopyrightIcon />
        2025 faith connect app
      </p>
      {/* </div> */}
    </>
  )
}

export default Footersection