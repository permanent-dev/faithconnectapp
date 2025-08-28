// Bookherosection.jsx
import React from 'react';


const Bookherosection = () => {
    return (
        <div className="w-full flex items-center justify-between mt-5 bg-cover bg-center bg-gradient-to-r from-[url('/bg_womanblog.png')] to-[white] rounded-lg p-6">
            {/* Quote Section */}
            <div className="text-black text-[32px] md:text-[3rem] font-serif max-w-[60%]">
                A Book Is A Gift You Can Open Again and Again.
            </div>

            {/* Book Image */}
            <img
                src="/booksimg2.png"
                alt="Stack of Books"
                className="h-50 object-contain"
            />
        </div>
    );
};

export default Bookherosection;
