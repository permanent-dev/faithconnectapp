import React from 'react'

function Inspiration() {
    return (
        <div>
            <div
                className="bg-[#ffffff] border-[12px] p-1 shadow-[2px_2px_0.2rem_#000000] border-transparent mt-[9px] hover:scale-101 rounded-[1.2rem]">
                <div className="flex gap-1">
                    <span> <img src="/Vector.png" alt="" /> </span>
                    <span className='md:w-85'>
                        <p className="capitalize font-bold text-[22px] ">daily
                            inspiration
                        </p>
                        <div className="border-[2px] border-[#000000]"></div>
                        <p className="capitalize text-[18px] ">psalm 118:24</p>
                    </span>
                </div>
                <div>
                    <p className="w-[16rem] md:w-[25rem] text-[1.4rem]">
                        “This is the day that
                        the Lord has made; Let
                        us rejoice and be glad
                        in it”
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Inspiration