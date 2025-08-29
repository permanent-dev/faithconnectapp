import React from 'react'
import Navlinks from '../components/Navlinks'
import Navbar from '../components/Navbar'
import Navbutton from '../components/Navbutton'
import { Link } from 'react-router-dom'
import Believersection from '../components/Believersection'
import Versesection from '../components/versesection'
import Podcastsection from '../components/Podcastsection'
import Footersection from '../components/Footersection'
import Booksection from '../components/booksection'
import Aboutus from '../components/Aboutus'

function Onboarding() {
    return (

        <div>
            <header className='mx-auto z-[4] fixed top-0 w-screen bg-[white] shadow-md flex justify-around gap-15'>
                <Link to="/"><img className=' mt-2' src="/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" /></Link>
                <Navbar />
            </header>
            <section>
                <Believersection />
            </section>
            <section className='mt-12'>
                <Versesection />
            </section>
            <section className='my-[8rem]'>
                <Podcastsection />
            </section>
            <section>
                <Booksection />
            </section>
            <section>
                <Aboutus />

            </section>
            <section className='mt-8 rounded-[2rem]'>
                <Footersection />
            </section>
        </div>







    );
}

export default Onboarding