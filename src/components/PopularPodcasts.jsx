import React from 'react';

const podcasts = [
    {
        title: "What God joined tog",
        subtitle: "Stepping in Faith",
        image: "/booksimg1.png",
    },
    {
        title: "Hope In The Storm",
        subtitle: "Kevin Wilson",
        image: "/booksimg3.png",
    },
    {
        title: "How did the new test",
        subtitle: "Bible Project",
        image: "/booksimg2.png",
    },
    {
        title: "Enjoying Everyday Life",
        subtitle: "Joyce Meyer",
        image: "/booksimg4.png",
    },
    {
        title: "Praise As a Weapon",
        subtitle: "E.A Adeboye",
        image: "/booksimg2.png",
    },
    {
        title: "The wind,The earth",
        subtitle: "Emmanuel Iren",
        image: "/booksimg3.png",
    },
];

const PodcastCard = ({ title, subtitle, image }) => (
    <div className="flex items-center gap-4 rounded-lg bg-white hover:scale-106 shadow-md w-full">
        <img src={image} alt={title} className="w-14 h-14 rounded-l-lg object-cover" />
        <div className="flex-1">
            <p className="font-semibold text-sm">{title}</p>
            <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <div className="w-6 h-6 flex items-center justify-center bg-[#000000] p-3 text-[#010101] rounded-full">
            ▶
        </div>
    </div>
);

const PopularPodcasts = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">MOST POPULAR</h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
                {podcasts.map((podcast, index) => (
                    <PodcastCard key={index} {...podcast} />
                ))}
            </div>
        </div>
    );
};

export default PopularPodcasts;
