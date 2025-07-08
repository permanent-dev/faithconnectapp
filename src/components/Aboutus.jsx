import React from 'react'
import { Music, Book, } from 'lucide-react'

const Aboutus = () => {
    return (
        <div className='flex-col p-4 justify-center items-center '>
            <div className='grid grid-col-1 md:flex md:gap-80 gap-5 justify-center items-center mx-auto'>
                <div>
                    <h1 className='text-[3rem] capitalize font-bold'>about us</h1>
                    <p className='text-[1.3rem]'>At Faith Connect you grow and connect <br /> with fellow believers</p>
                    <button className="capitalize bg-[#a0522a] hover:scale-110 text-[1.2rem] font-bold relative md:left-60 p-2 rounded-t-xl rounded-bl-xl"> read more </button>
                </div>
                <div>
                    <img className='size-80' src="/ABOUTUS.png" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3 justify-center text-center items-center mt-15 p-4'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Music strokeWidth={3} size={45} />
                    <p>
                        Build Meaningful relationships <br /> with other believers
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Book strokeWidth={3} size={45} />
                    <p>
                        Real life changing books <br /> that will strengthening your relationship with God
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Book strokeWidth={3} size={45} />
                    <p>
                        Attend events focused <br /> on prayer and spiritual growth
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus