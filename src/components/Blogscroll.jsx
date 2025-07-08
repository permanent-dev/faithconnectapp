import React from 'react'
import { ArrowLeft, ArrowRight, Circle } from 'lucide-react'
import { Link } from 'react-router-dom'





function Blogscroll() {

    return (
        <>
            <div className='bg-gray-300 my-4 p-3 rounded-lg'>
                <div className='flex gap-2 md:gap-23 justify-center items-center'>
                    <Link><ArrowLeft className='border-[2px]' /></Link>
                    <p className='font-bold md:text-[2.4rem]'>
                        "These stories has changed my perspective on life and faith.
                        They remind me that redemption is possile for everyone"
                    </p>
                    <Link><ArrowRight className='border-[2px]' /></Link>
                </div>
                <div>
                    <p className='flex justify-center items-center gap-3'>
                        <Circle strokeWidth={2} size={18} color='gray' className='bg-gray-500 rounded-[3rem]' />
                        <Circle strokeWidth={2} size={18} className='bg-[#000000] rounded-[3rem]' />
                    </p>
                </div>

            </div>






        </>
    );


}

export default Blogscroll