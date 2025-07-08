import React, { useState } from 'react'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Podcastbrief = () => {
    return (
        <div className='flex-col justify-center items-center gap-4'>
            <div className='grid grid-col-1 md:flex gap-5 p-3 mx-auto justify-center items-center'>
                <div className='bg-[purple] rounded-[1rem] hover:scale-105'> <Link to><img src="/book1.png" alt="" /></Link></div>
                <div className='flex-col gap-'>
                    <p className='capitalize font-bold text-[1.5rem] flex items-center gap-5'>stepping in faith        <span> <Star strokeWidth={4} color='black' className='' /> </span>   </p>
                    <p className='capitalize font-bold'>Description</p>
                    <p className=' md:w-[30rem]'>
                        Join us each week to deepen your walk with Jesus as we dive into the heart of faith, love, and relationships from a Christian perspective. Whether you're married, single, or navigating the challenges of life, our episodes focus on building intimate relationships with Jesus Christ, strengthening marriages, providing guidance for singles, and fostering healthy, God-centered connections.
                    </p>
                </div>
            </div>
            <div className='grid grid-col-1 md:flex gap-5 p-3 mx-auto justify-center items-center'>
                <div className='bg-[purple] rounded-[1rem] hover:scale-105'> <Link to><img src="/book2.png" alt="" /></Link></div>
                <div className='flex-col gap-'>
                    <p className='capitalize font-bold text-[1.5rem] flex items-center gap-5'>a christian podcast <br /> with kevin wilston <span> <Star strokeWidth={4} color='black' className='' /> </span>   </p>
                    <p className='capitalize font-bold'>Description</p>
                    <p className=' md:w-[30rem]'>
                        Join Kevin Wilson as he brings faith and real-life topics together. With a mix of studio recordings and live Podcast in the Park sessions, this podcast offers a unique and dynamic listening experience. Tap in as Kevin and his guests dive into relevant issues and share their personal faith journeys. Whether you're looking for inspiration, education, or just a good time, A Christian Podcast has what you need.
                    </p>
                </div>
            </div>
            <div className='grid grid-col-1 md:flex gap-5 p-3 mx-auto justify-center items-center'>
                <div className='bg-blue-100 rounded-[1rem] hover:scale-105'> <Link><img src="/boook3.png" alt="" /></Link></div>
                <div className='flex-col gap-'>
                    <p className='capitalize font-bold text-[1.5rem] flex items-center gap-5'>bible project       <span> <Star strokeWidth={4} color='black' className='' /> </span>   </p>
                    <p className='capitalize font-bold'>Description</p>
                    <p className=' md:w-[30rem]'>
                        The creators of BibleProject have in-depth conversations about the Bible and theology. A companion podcast to BibleProject videos found at bibleproject.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Podcastbrief