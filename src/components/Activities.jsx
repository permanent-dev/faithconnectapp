import React from 'react'
import { Plus } from 'lucide-react'

function Activities() {
    const data = [10, 30, 50, 70, 90, 60, 40, 80, 100];


    return (
        <div>
            {/* <!--right side of big screen --> */}
            <div className="bg-[#ffffff] rounded-[2rem] mt-[1rem] p-2 shadow-[3px_3px_0.5rem_#000000]">
                <div className="flex gap-21 justify-between ">
                    <h3 className="mt-[0.5rem] capitalize text-[1.4rem] font-bold">
                        today's activities
                    </h3>
                    <span className="">
                        <img src="images/Dots Three.png" alt="" />
                    </span>
                </div>

                <div className="grid grid-cols-3 justify-around mt-[2.8rem]">
                    <span className="leading-7">
                        <span className="bg-[#e9a923] rounded-full p-2 font-extrabold text-[2rem] text-center">
                            22
                        </span>
                        <p className="capitalize ">offline</p>
                        <p className="capitalize text-[rem]">users</p>
                    </span>
                    <span className="leading-7">
                        <span className="bg-[#e9a923] rounded-full p-2 font-extrabold text-[2rem] text-center">
                            78
                        </span>
                        <p className="capitalize ">online</p>
                        <p className="capitalize text-[rem]">users</p>
                    </span>
                    <span className="leading-5">
                        <span className="flex gap-1 rounded-full p-2 font-extrabold text-[2rem] text-center">
                            <span>5,750</span>
                            <Plus size={18} className='bg-[orange] rounded-full ' />


                        </span>
                        <p className="capitalize ">total</p>
                        <p className="capitalize text-[rem]">users</p>
                    </span>

                </div>
                <div>


                    <div className="mt-24 mb-8 relative flex items-end gap-4 h-[25rem] px-6">
                        {/* Y-axis values */}
                        <div className="flex flex-col space-y-[18px] h-full mr-1 text-[1.2rem] leading-none">
                            {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map((val) => (
                                <p key={val}>{val}</p>
                            ))}
                        </div>

                        {/* Bar Graph */}
                        <div className="flex mt-[4rem] gap-2 items-end h-full">
                            {data.map((value, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {/* Bar */}
                                    <div
                                        // scale bar height
                                        className="bg-orange-500 w-5 text-transparent rounded-t-[2px]"
                                        style={{ height: `${(value / 100) * 20}rem` }}>
                                        {value.index}

                                    </div>
                                    {/* Label */}
                                    <p className="mt-2 text-sm font-semibold">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Activities