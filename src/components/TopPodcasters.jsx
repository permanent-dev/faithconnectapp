import React, { useState } from 'react';

const podcasters = [
    {
        name: "Joyce Meyer",
        followers: "2,045",
        image: "/Mask group (3).png",
        following: false,
    },
    {
        name: "E.A Adeboye",
        followers: "2,455",
        image: "/adeboye.png",
        following: true,
    },
    {
        name: "Emmanuel Iren",
        followers: "1,250",
        image: "/iren.png",
        following: false,
    },
];

const TopPodcasters = () => {
    const [followState, setFollowState] = useState(podcasters);

    const toggleFollow = (index) => {
        const updated = [...followState];
        updated[index].following = !updated[index].following;
        setFollowState(updated);
    };

    return (
        <div className="p-5 bg-white rounded-2xl shadow-lg mx-auto w-78 md:w-125">
            <h2 className="text-lg font-bold mb-4">TOP PODCASTERS</h2>

            <div className="flex flex-col gap-4 mb-12">
                {followState.map((person, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-sm">{person.name}</p>
                                <p className="text-xs text-gray-500">{person.followers} followers</p>
                            </div>
                        </div>

                        <button
                            onClick={() => toggleFollow(index)}
                            className={`text-sm px-3 py-1 rounded-full font-medium transition-colors duration-300 ${person.following
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-blue-600'
                                }`}
                        >
                            {person.following ? 'Following' : 'Follow'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Bottom Audio Card */}
            <div className='relative mt-25 md:mt-0 grid grid-col-1 justify-center items-center mb-19'>
                <img className='flex flex-col-1 opaque justify-center z-[10] h-40' src="/podcast.png" alt="" />
                {/* <img className='absolute left-32 top-20 md:left-65 z-[1]' src="/Rectangle 67.png" alt="" /> */}
                <img className='absolute bg-[#fdfdfd] rounded-[3rem] h-34 w-45 top-29 md:right-37 z-[1] ' src="/image-removebg-preview (35) 2.png" alt="" />
                <img className='absolute top-25 left-40 md:left-63 z-[11] h-35' src="/image-removebg-preview (36) 2.png" alt="" />
                {/* <img className='absolute bottom-70 z-[1] right-45 md:right-65' src="/bg2.png" alt="" />
                <p className='absolute bottom-105 right-68 md:right-85 text-[2rem] font-bold' >podcast</p> */}

            </div>
        </div>
    );
};

export default TopPodcasters;
