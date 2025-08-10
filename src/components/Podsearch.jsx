import { useState } from "react";
import React from 'react'
import { Search } from 'lucide-react'
import Dashpodcast from "../pages/Dashpodcast";

function Podsearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value.trim());

        console.log('Searching for:', searchTerm);
        // You can add custom search logic here

    };




    return (
        <div>
            <div className="my-3 ml-3">
                <div className="bg-[#ffffff] rounded-[12rem] shadow-[3px_3px_6px_#778457] flex py-1 items-center  ">
                    <Search className="fa-solid fa-search ml-2" />
                    <input onChange={handleChange} id="true" type="search" className="px-[20px] w-125 py-2 rounded-full" placeholder="Search Podcasts" value={searchTerm} />
                </div>
                {/* <div>
                        <button
                        className="bg-[#e9a923] capitalize px-2 text-center rounded-[1rem] text-[1.5rem] font-bold"
                        type="follow">+
                        add</button> 
                </div> */}
            </div>
        </div>
    )
}

export default Podsearch