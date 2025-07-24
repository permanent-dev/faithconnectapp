import React from 'react'
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'

function Recentpods() {
    return (
        <div>
            <div className='p-2'>
                <h1 className='uppercase font-bold text-[1.4rem]'>
                    recently played
                </h1>
                <div className='flex items-center mt-4 gap-2 md:gap-10'>
                    <div> <MoveLeftIcon />    </div>
                    <div className='flex gap-8'>
                        <img src="/booksimg1.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg3.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg4.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />



                    </div>
                    <div> <MoveRightIcon />    </div>
                </div>
            </div>
        </div>
    )
}

export default Recentpods