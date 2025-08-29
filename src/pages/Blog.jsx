import React from 'react'
import Navbar from '../components/Navbar'
import Heroblog from '../components/Heroblog'
import Blogheading from '../components/Blogheading'
import Blogpages from '../components/Blogpages'
import Footersection from '../components/Footersection'
import Blogscroll from '../components/Blogscroll'
import { Link } from 'react-router-dom'

export const Blog = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: "url('/bg_womanblog.png')",
                    backgroundSize: "cover",
                    minHeight: "120vh",
                    backgroundPosition: "center",
                    position: "relative"
                }}
                >
                <header className='mx-auto z-[4] bg-[white] fixed top-0 w-screen shadow-md flex justify-around gap-15'>
                    <Link to="/"><img className=' mt-2' src="/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" /></Link>
                    <Navbar />
                    <div className='bg-yellow-300 hidden md:block absolute right-173 z-[-1] w-30 text-transparent rounded-b-[2rem] p-[3px]'>w</div>
                </header>
                <div className='absolute top-90'>
                    <Heroblog />
                </div>
            </div>
            <section>
                <Blogheading />
            </section>
            <section>
                <Blogpages />
            </section>
            <section>
                <Blogscroll />
            </section>
            <section>
                <Footersection />
            </section>
        </div>
    )
}
