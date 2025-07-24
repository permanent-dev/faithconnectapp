// Bookherosection.jsx
import React from 'react';


const Bookherosection = () => {
    return (
        <div className="w-full flex items-center justify-between object-contain object-center bg-[url('/image.png')] rounded-lg p-6">
            {/* Quote Section */}
            <div className="text-black text-[4rem] font-serif max-w-[60%]">
                A Book Is A Gift You Can Open Again and Again.
            </div>

            {/* Book Image */}
            <img
                src="/booksimg2.png"
                alt="Stack of Books"
                className="h-40 md:h-52 object-contain"
            />
        </div>
    );
};

export default Bookherosection;
