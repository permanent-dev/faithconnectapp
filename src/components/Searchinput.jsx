import React, { useState } from 'react';

const Searchinput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
        // You can add custom search logic here
    };

    return (

        <form
            onSubmit={handleSubmit}
            className=" "
        >
            <div className='shadow-md border-[6px] border-gray-500 md:relative right-0 md:right-120 w-[22rem] bg-gray-300 mx-auto shadow-gray-400 rounded-full flex justify-center items-center gap-15'>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-3 outline-none rounded-full"
                />
                <button
                    type="submit"
                    className="px-6 py-6 bg-blue-300 rounded-tr-full rounded-br-full text-white hover:bg-blue-400"
                >
                    Go
                </button>
            </div>
        </form>

    );
};

export default Searchinput;
