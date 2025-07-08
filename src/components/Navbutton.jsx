import React from 'react'
import { Link } from 'react-router-dom'

const Navbutton = () => {
    return (
        <div >
            <Link to="/register">
                <button className='bg-[#ffa500] hover:scale-110 p-4 underline font-extrabold text-[1.5rem] capitalize rounded-t-[2rem] rounded-bl-[2rem]'>sign up</button>
            </Link>
        </div>
    );
}

export default Navbutton