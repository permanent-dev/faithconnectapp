import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Podcastsection from '../components/Podcastsection'
import Footersection from '../components/Footersection'
import Searchinput from '../components/Searchinput'
import Podcastbrief from '../components/Podcastbrief'


const Podcast = () => {
    return (
        <div>
            <header className='mx-auto z-[4] bg-[white] mb-20 fixed top-0 w-screen shadow-md flex justify-around gap-15'>
                <Link to="/"><img className=' mt-2' src="/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" /></Link>
                <Navbar />
            </header>
            <section className=" mt-[12rem] md:mt-[20rem]">
                <Podcastsection />
            </section>
            <section className="mt-[2rem]">
                <Searchinput />
            </section>
            <section className='mt-[2rem]'>
                <Podcastbrief />
            </section>
            <footer className='my-10'>
                <Footersection />
            </footer>





        </div>
    )
}

export default Podcast