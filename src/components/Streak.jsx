import React from 'react'

function Streak() {
    return (
        <div>
            <div
                className="bg-[#ffffff] border-[12px] hover:scale-101 shadow-[2px_2px_0.3rem_#000000] border-transparent rounded-[1.2rem]">
                <span className="flex gap-26 justify-around md:gap-[3rem]">
                    <p className="text-[19px] font-bold">weekly streak
                        <i className="fa-solid fa-circle-exclamation"></i>
                    </p>
                    <p
                        className="rounded-[4rem] bg-gray-200 border-gray-400 border-[2px] text-[9px] px-[4px]">
                        <i className="fa-solid fa-calender"></i>
                        june 2020
                        <i className="fa-solid fa-arrow"></i>
                    </p>
                </span>
                <div className="border-gray-600 border-[1px]  m-[4px]"></div>
                <div className="flex gap-46 justify-around md:gap-[9rem]">
                    <p className="font-bold text-[17px]">4/4 weeks</p>
                    <span className="">
                        <i className="fa-solid fa-backward"></i>
                        <i className="fa-solid fa-forward"></i>
                    </span>
                </div>
                <div className="flex justify-around gap-2 ">
                    <div className="bg-[#e9a923] p-2 rounded-[18px]">
                        <p className="capitalize ">may</p>
                        <p className="capitalize font-bold text-[25px] ">29</p>
                        <p className="capitalize ">thu</p>
                    </div>

                    <div className="bg-[#e9a923] p-2 rounded-[18px]">
                        <p className="capitalize ">may</p>
                        <p className="capitalize font-bold text-[25px] ">30</p>
                        <p className="capitalize ">fri</p>
                    </div>

                    <div className="bg-[#e9a923] p-2 rounded-[18px]">
                        <p className="capitalize ">may</p>
                        <p className="capitalize font-bold text-[25px] ">30</p>
                        <p className="capitalize ">sat</p>
                    </div>

                    <div
                        className="bg-[#ffffff] border-gray-200 border-[2px] p-2 rounded-[18px]">
                        <p className="capitalize ">jun</p>
                        <p className="capitalize font-bold text-[25px] ">01</p>
                        <p className="capitalize ">sun</p>
                    </div>

                    <div
                        className="bg-[#ffffff] border-gray-200 border-[2px] p-2 rounded-[18px]">
                        <p className="capitalize ">jun</p>
                        <p className="capitalize font-bold text-[25px] ">02</p>
                        <p className="capitalize ">mon</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Streak