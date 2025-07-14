import React from 'react'

function Dashitems() {
    return (
        <div>
            <div className="mt-2 gap-8 ml-6 p-2 flex">
                <div className="bg-[#ffffff] shadow-[3px_3px_7px_#000000] rounded-[1.5rem] py-5 hover:scale-108">
                    <span className="font-bold text-[1.5rem] capitalize flex p-1">
                        <img src="images/Podcastlogo.png" alt="" />
                        podcast
                    </span>
                    <p className="capitalize">listened to this week</p>
                    <ul>
                        <li
                            className="text-right px-3 border-r-[4px] border-yellow-500 font-bold text-[23px]">
                            54
                        </li>
                    </ul>
                </div>

                <div className="bg-[#ffffff] shadow-[3px_3px_7px_#000000] rounded-[1.5rem] py-5 hover:scale-108">
                    <span className="font-bold text-[1.5rem] capitalize flex p-1"> <img
                        src="images/Podcastlogo.png" alt="" />
                        podcast
                    </span>
                    <p className="capitalize ">listened to this week</p>
                    <ul>
                        <li
                            className="text-right px-3 border-r-[4px] border-yellow-500 font-bold text-[23px]">
                            54
                        </li>
                    </ul>
                </div>

                <div className=" bg-full object-contain bg-repeat shadow-[3px_3px_7px_#000000] rounded-[1.5rem] hover:scale-108 py-4 px-1 grid grid-cols-2"
                    style={{ backgroundImage: "url('/Rectangle 61.png')", }}>

                    <span >
                        <p className="text-[#ffffff] text-[1.1rem]">...........</p>
                        <p className="text-[#ffffff] text-[1.1rem]">.......</p>
                        <p className="text-[#ffffff] text-[1.1rem]">....</p>
                        <p className="text-[#ffffff] text-[1.1rem]">..</p>
                        <p className="text-[#ffffff] text-[1.1rem]">.</p>
                    </span>
                    <span className="grid grid-cols-1 gap-1.5">
                        <p className="bg-[#e9a923] rounded-full font-extrabold text-[2rem] text-center">15
                        </p>
                        <p className="capitalize ">upcoming</p>
                        <p className="capitalize text-[1.5rem] font-bold">events</p>
                    </span>

                </div>


            </div>
        </div>
    )
}

export default Dashitems