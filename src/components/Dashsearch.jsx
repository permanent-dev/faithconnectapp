import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Dashboard from '../pages/Dashboard';

function Dashsearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
        // You can add custom search logic here
        return [searchTerm, [<Dashboard />]]
    };






    return (
        <div>
            <div className="flex gap-[10rem] my-5 ml-4">
                <div className="bg-[#ffffff] rounded-[12rem] flex items-center justify-center p-[3px] ">
                    <Search className="fa-solid fa-search" />
                    <input onChange={handleSubmit} type="search" className="p-2 rounded-full" placeholder="Search Home" value={searchTerm} />
                </div>
                <div>
                    <button
                        className="bg-[#e9a923] capitalize px-2 text-center rounded-[1rem] text-[1.5rem] font-bold"
                        type="follow">+
                        add</button>
                </div>
            </div>
        </div>
    )
}

export default Dashsearch
