import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Booksection from '../components/booksection'
import Author from '../components/Author'
import Footersection from '../components/Footersection'
import Books from '../components/Books'

function Book() {
    return (
        <div>
            <header className='mx-auto z-[4] bg-[white] fixed top-0 w-screen shadow-md flex justify-around gap-15'>
                <Link to="/"><img className=' mt-2' src="public/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" /></Link>
                <Navbar />
                <div className='bg-yellow-300 hidden md:block absolute right-229 z-[-1] w-30 text-transparent rounded-b-[2rem] p-[3px]'>w</div>
            </header>
            <section className='md:mt-20 mt-39'>
                <Booksection />
            </section>
            <section>
                <Author />
            </section>
            <section>
                <Books />
            </section>
            <section className='mt-16'>
                <Footersection />
            </section>
        </div>
    )
}

export default Book