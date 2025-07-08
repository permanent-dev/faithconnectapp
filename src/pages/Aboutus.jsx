import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footersection from '../components/Footersection'

const Aboutus = () => {
    return (
        <>
            <header className='relative'>
                <header className='mx-auto z-[4] bg-[white] fixed top-0 w-screen shadow-md flex justify-around gap-15'>
                    <Link to="/"><img className=' mt-2' src="public/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" /></Link>
                    <Navbar />

                </header>
                <div className='bg-yellow-300 hidden md:block absolute right-113 z-[-1] w-30 text-transparent rounded-b-[2rem] p-[3px]'>w</div>
            </header>

            <section className='mt-41'>
                <h1 className='capitalize rounded-[1.4rem] font-bold text-center p-4 text-[3rem] bg-gray-300'>about us</h1>
            </section>
            <section>
                <div className='flex flex-col p-4 md:grid md:grid-cols-2 justify-center items-center gap-5 mx-auto'>
                    <p className=' text-[2.7rem] mx-auto'>At Faith Connect, our heart's desire is to weave a tapestry of love, support, and spiritual growth, uniting believers from all walks of life in a vibrant community. We envision a platform where Christians can come together, deepen their faith, and uplift one another on their journey with God. Through meaningful connections, inspiring resources, and heartfelt community, we strive to strengthen the body of Christ, one relationship at a time</p>
                    <span className='items-center relative'>
                        <img src="/aboutus1.png" alt="" />
                        <p className='absolute top-0 left-48 md:left-65 z-[-10] bg-yellow-700 px-25 py-70 text-center'>pp</p>
                    </span>

                </div>
            </section>
            <section className='my-12'>
                <Footersection />
            </section>
        </>
    )
}

export default Aboutus