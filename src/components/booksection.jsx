import React from 'react'
import { Circle, Dot } from 'lucide-react'

const Booksection = () => {
  return (
    <div className='grid grid-cols-1 z-[-1] md:flex p-1 justify-center rounded-b-[38rem] rounded-t-[2.5rem] bg-gray-100 items-center space-y-50 md:space-y-0 relative'>
      <div className=''>
        <p className='font-bold text-[3rem]'>
          Read Books that <br /> can change your
          <span className="bg-gray-500 font-bold text-[4rem] text-transparent bg-clip-text"> life</span>
        </p>
        <img className='relative md:left-95 md:top-8 top-45 left-15' src="life.png" alt="" />
        <img className='relative md:top-10 top-45 h-65' src="/curly-arrow.png" alt="" />

      </div>
      <div className=''>
        <div className='justify-center items-center '>
          <img className="z-[4]" src="african-woman.png" alt="" />
          <img className=" relative bottom-32 md:bottom-78 md:left-55 z-[8] rotate-8" src="maskbook.png" alt="" />
          <p className='bg-[#800080] text-center w-[15rem] relative bottom-125 left-30 md:bottom-195 md:left-95 z-[-1] rotate-18 p-25 md:p-42 rounded-4xl text-transparent '>d</p>
          <Dot className='items-center relative bottom-175 md:bottom-255 md:left-78 left-9 ' size={205} color='yellow' />

        </div>
      </div>

    </div>
  )
}

export default Booksection