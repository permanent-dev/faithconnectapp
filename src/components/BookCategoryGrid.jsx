import React from 'react';

const BookCategoryGrid = () => {
    const categories = [
        { image: "/booksimg1.png", name: 'Faith Building Stories' },
        { image: "/booksimg3.png", name: 'Fictional Books' },
        { image: "/booksimg2.png", name: 'Non-Fictional Books' },
        { image: "/booksimg4.png", name: 'Children Stories' },
    ];

    return (
        <div className="w-full flex flex-col items-center">
            {/* Whole Image */}


            {/* Labels under each category */}
            <div className="flex justify-around space-y-15 gap-0 md:gap-25 mt-2 text-center text-gray-700 font-medium text-sm sm:text-base">
                {categories.map((cat, index) => (
                    <div key={index} className="px-2">
                        <div className={`${index % 2 === 0 ? 'bg-[white]' : 'bg-[#ffa590]'} rounded-[22px]`}>
                            <img key={index} className="w-55 relative rounded-[22px] h-40 left-10 top-1 px-2" src={cat.image} alt={cat.name}
                            />
                        </div>
                        {cat.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCategoryGrid
