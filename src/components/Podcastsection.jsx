import React from 'react'
import { StarIcon } from "lucide-react";

const Podcastsection = () => {
  return (
    <>
      <div className='grid grid-cols-1 justify-center items-center md:flex mb-50  '>
        <div className='p-1 md:p-6 relative'>
          <span className='md:text-[2rem]'>
            <p>
              Stay <span className='font-extrabold'> connected </span>to
            </p>

            <p className='font-bold text-[4rem]  md:w-[37rem] leading-15'>
              Podcasts that inspire you to grow
            </p>


          </span>
          <p className='text-[24px] md:w-[45rem] leading-9'>
            We have the best podcast about spiritual talks and daily devotionals that u can always listen to on the go
          </p>
          <StarIcon className='rounded-full absolute top-5 md:top-9 left-35 md:right-186 ' strokeWidth={4} color="black" />
          <StarIcon className='rounded-full absolute top-39 md:top-58 left-45 md:left-115 p-[6px] bg-[orange]' strokeWidth={3} size={45} color="black" />

        </div>
        <div className='relative mt-25 md:mt-0 grid grid-col-1 justify-center items-center'>
          <img className='flex flex-col-1 opaque justify-center' src="/podcast.png" alt="" />
          <img className='absolute left-32 top-20 md:left-65 z-[-1]' src="/Rectangle 67.png" alt="" />
          <img className='absolute bg-gray-400 rounded-[6rem] h-70 top-69 md:right-57 z-[-1]' src="/image-removebg-preview (35) 2.png" alt="" />
          <img className='absolute top-70 left-54 md:left-70' src="/image-removebg-preview (36) 2.png" alt="" />
          <img className='absolute bottom-70 z-[-1] right-45 md:right-65' src="/bg2.png" alt="" />
          <p className='absolute bottom-111 right-68 md:right-85 text-[2rem] font-bold' >podcast</p>

        </div>

      </div>
      <div className='grid grid-col-1 items-center justify-center relative'>
        <img src="/image.png" alt="podcast banner" />
        <p className='capitalize absolute top-2 md:top-18 left-5 md:left-155 text-[2rem] md:text-[4rem] font-bold text-center'>join our 24hrs podcast</p>
      </div>
    </>
  );
}

export default Podcastsection