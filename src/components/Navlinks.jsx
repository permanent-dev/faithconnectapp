import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Navlinks() {
    return (
        <>

            <ul className='flex gap-20 '>
                <li className='capitalize text-[1.5rem] text-[#000000] '> <Link to='/podcast' >podcast </Link></li>
                <li className='capitalize text-[1.5rem] text-[#000000]'> <Link to='/events' >events</Link></li>
                <li className='capitalize text-[1.5rem] text-[#000000]'> <Link to='/blog' >blog </Link></li>
                <li className='capitalize text-[1.5rem] text-[#000000]'> <Link to='/about us' >about us </Link> </li>
            </ul>


        </>


    );
}

export default Navlinks