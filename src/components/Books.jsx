import React from 'react'
import { Link } from 'react-router-dom'

function Books() {
    return (
        <div className='items-center justify-center mx-auto my-8'>
            <div className='flex gap-12 justify-center items-center'>
                <div className='items-center flex flex-col justify-center'>
                    <Link to><img className='hover:scale-108' src="/booksimg1.png" alt="" /></Link>
                    <p className='capitalize font-[700] p-4 text-[1.4rem]' >francine riversres</p>
                </div>


                <div className='items-center flex flex-col justify-center'>
                    <Link to><img className='hover:scale-108' src="/booksimg2.png" alt="" /></Link>
                    <p className='capitalize font-[700] p-4 text-[1.4rem]' >pastor e. a. adeboye</p>
                </div>


                <div className='items-center flex flex-col justify-center'>
                    <Link to><img className='hover:scale-108' src="/booksimg3.png" alt="" /></Link>
                    <p className='capitalize font-[700] p-4 text-[1.4rem]' >john bunyan</p>
                </div>

            </div>
            <div className='flex gap-12 justify-center items-center'>
                <div className='items-center flex flex-col justify-center'>
                    <Link to><img className='hover:scale-108' src="/booksimg4.png" alt="" /></Link>
                    <p className='capitalize font-[700] p-4 text-[1.4rem]' >kenneth e. hagin</p>
                </div>

                <div className='items-center flex flex-col justify-center'>
                    <Link to><img className='hover:scale-108' src="/booksimg2.png" alt="" /></Link>
                    <p className='capitalize font-[700] p-4 text-[1.4rem]' >pastor e. a. adeboye</p>
                </div>

                <div className='items-center flex flex-col justify-center'>
                    <Link to><img className='hover:scale-108' src="/booksimg3.png" alt="" /></Link>
                    <p className='capitalize font-[700] p-4 text-[1.4rem]' >john bunyan</p>
                </div>
            </div>

        </div>
    )
}

export default Books