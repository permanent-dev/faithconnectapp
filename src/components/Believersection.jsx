import React from 'react'

const Believersection = () => {
    return (
        <>
            <div className='bg-gray-100 rounded-lg grid mt-40 grid-cols-1 mx-auto w-[100vw] md:grid-cols-2 mx-auto justify-center items-center'>
                <div className='relative mx-auto '>
                    <img className='' src="/bg1_.png" alt="crowd logo" />

                    <p className='font-bold text-[3rem] md:text-[7rem] absolute bottom-[1rem] md:top-[4rem] p-10 capitalize'>connecting belivers strengthening faith</p>

                </div>
                <div className='gap-3 flex md:gap-105'>
                    <div className='flex flex-col gap-60 md:gap-20' >
                        <img className='h-95 rounded-[10rem] w-45 hover:scale-108' src="img3.png" alt="" />
                        <img className='h-95 rounded-[10rem] w-45 hover:scale-108' src="img3.png" alt="" /></div>
                    <div className='flex flex-col rotate-90 top-210 left-30 md:rotate-0 md:gap-35 absolute left-23 md:top-0 md:left-340 z-[1]' >
                        <img className='h-95 rounded-[10rem] w-45 hover:scale-108' src="img5.png" alt="" />
                        <img className='h-95 hidden md:block rounded-[10rem] w-45 hover:scale-108'
                            src="img5.png" alt="" /></div>
                    <div className='flex flex-col gap-60 md:gap-20' >
                        <img className='h-95 rounded-[10rem] w-45 hover:scale-108' src="img4.png" alt="" />
                        <img className='h-95 rounded-[10rem] w-45 hover:scale-108' src="img4.png" alt="" />
                    </div>
                </div>
                <div className='hidden md:flex md:flex-col'>
                    <span className='bg-[#ffa500] z-[-1] p-4 rounded-full absolute top-160 left-105'></span>
                    <span className='bg-[#ffa500] z-[-1] p-4 rounded-full absolute top-50 left-325'></span>
                    <span className='bg-[#ffa500] z-[-1] p-4 rounded-full absolute top-150 left-275'></span>
                    <span className='bg-[#ffa500] z-[-1] p-4 rounded-full absolute top-30 left-455'></span>
                </div>

            </div>

        </>
    )
}

export default Believersection