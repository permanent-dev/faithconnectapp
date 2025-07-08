import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Blogpages = () => {
    return (
        <div className='w-screen mx-auto'>
            <div className='grid grid-col-1 sm:grid sm:grid-cols-2 md:flex gap-3 justify-center items-center'>
                <div className='grid grid-col-1 p-2 justify-center items-center text-start'>
                    <div className=' border-[3px] border-[#101010] rounded-[1.3rem]'>
                        <img src="/Mask group (3).png" alt="" />
                        <div className='relative flex flex-col justify-center p-2 bottom-46'>
                            <div className='flex gap-40'>
                                <p className='border-[1px] border-[#101010] px-4 text-bold'>faith</p>
                                <p>5 min read</p>
                            </div>
                            <p className='capitalize font-bold text-[1.4rem]'>from darkness to light</p>
                            <p className='capitalize text-[0.9rem]'>a powerful journey faith in christ</p>
                            <Link>
                                <p className='flex gap-1'>Read more <span><ArrowRight /></span></p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='grid grid-col-1 p-2 justify-center items-center text-start'>
                    <div className=' border-[3px] border-[#101010] rounded-[1.3rem]'>
                        <img src="/Mask group (4).png" alt="" />
                        <div className='relative flex flex-col justify-center p-2 bottom-46'>
                            <div className='flex gap-40'>
                                <p className='border-[1px] border-[#101010] px-4 text-bold'>faith</p>
                                <p>5 min read</p>
                            </div>
                            <p className='capitalize font-bold text-[1.4rem]'>a new beginning</p>
                            <p className='capitalize text-[0.9rem]'>Witness how faith can transform lives</p>
                            <Link>
                                <p className='flex gap-1'>Read more <span><ArrowRight /></span></p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='grid grid-col-1 p-2 justify-center items-center text-start'>
                    <div className=' border-[3px] border-[#101010] rounded-[1.3rem]'>
                        <img src="/Mask group (5).png" alt="" />
                        <div className='relative flex flex-col justify-center p-2 bottom-46'>
                            <div className='flex gap-40'>
                                <p className='border-[1px] border-[#101010] px-4 text-bold'>faith</p>
                                <p>5 min read</p>
                            </div>
                            <p className='capitalize font-bold text-[1.4rem]'>finding freedom in faith</p>
                            <p className='capitalize text-[0.9rem]'>explore stories of redemption</p>
                            <Link>
                                <p className='flex gap-1'>Read more <span><ArrowRight /></span></p>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
            <div className='mx-auto my-5 p-10 relatve '>
                <Link>
                    <button className='border-[2px] p-1 px-3 right-[3rem] md:right-[25rem] absolute rounded-md hover:scale-108'>
                        View all
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Blogpages