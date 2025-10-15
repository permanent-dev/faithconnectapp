import axios from 'axios';
import { ColumnsSettings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const BookCategoryGrid = () => {
    const categories = [
        { image: "/booksimg1.png", name: 'Faith Building Stories' },
        { image: "/booksimg3.png", name: 'Fictional Books' },
        { image: "/booksimg2.png", name: 'Non-Fictional Books' },
        { image: "/booksimg4.png", name: 'Children Stories' },
    ];

    const [isList, setisList] = useState(null);
    const [prev, setPrev] = useState('');
    const [next, setNext] = useState('')


    useEffect(() => {
        const Apiget = async () => {

            const { data } = await axios('https://faith-connect-backend.onrender.com/api/books/');

            setisList(data.results);
            setPrev(data.previous);
            setNext(data.next);

            // console.log(b);

        };

        Apiget();


    }, []);

    useEffect(() => {
        console.log('updated info from fetch', isList)
        console.log(prev)
        console.log(next)
        if (isList) {
            console.log('First book in list:', isList[0]);
            console.log('Total books:', isList.length);
        }
    }, [isList])

    const containerRef = useRef(null);
    const scrollerRef = useRef(null)


    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        // Ensure the scroller is laid out horizontally
        scroller.style.display = 'flex';
        scroller.style.overflowX = 'auto';
        scroller.style.overflowY = 'hidden';
        scroller.style.scrollBehavior = 'smooth';
        scroller.style.WebkitOverflowScrolling = 'touch';
        scroller.querySelectorAll && scroller.querySelectorAll('.scroll-item').forEach(i => {
            i.style.flexShrink = '0';
        });

        const onWheel = (e) => {
            // only act when the pointer is over the scroller
            e.preventDefault(); // requires passive:false when adding listener
            const delta = e.deltaY || e.wheelDelta;
            // tune multiplier for speed
            const scrollAmount = delta * 59;
            const target = scroller.scrollLeft + scrollAmount;
            // animate smoothly with gsap (or use scroller.scrollTo)
            gsap.to(scroller, { scrollLeft: target, duration: 0.01, ease: 'power1.out' });
        };

        scroller.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            scroller.removeEventListener('wheel', onWheel);
        };
    }, [isList]); // rebind when items change








    return (
        <div ref={containerRef} className="w-full relative ">
            {/* Whole Image */}


            {/* Labels under each category */}
            <div className="w-full flex items-center overflow-hidden">

                {isList ? (
                    <div ref={scrollerRef}
                        className="px-2 flex overflow-hidden w-full items-center space-x-10 mt-2 text-center text-black font-medium text-sm sm:text-base">
                        {isList.map((book, index) => (
                            <div key={index}
                                style={{
                                    flexShrink: 0,
                                }}
                                className='scroll-item max-w-[250px]' >
                                <div className={`mb-2 relative aspect-square rounded-xl mb-2 ${index % 2 === 0 ? 'bg-[white]' : 'bg-[#ffa590]'}`}
                                    onClick={async () => { await axios.get(book.file_url) }}>
                                    <img
                                        loading='lazy'
                                        className=" aspect-square relative rounded-xl mb-2
                                        relative rounded-[22px] size-65 left-4 top-2 px-2"
                                        src={book.cover_image_url}
                                        alt={book.title}
                                    />
                                </div>
                                <p >{book.title}</p>
                                <p>by {book.author}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-4 items-stretch justify-around space-y-15 gap-0 md:gap-25 mt-2 text-center text-gray-700 font-medium text-sm sm:text-base">
                        {categories.map((cat, index) => (
                            <div key={index} className={`mb-2 ${index % 2 === 0 ? 'bg-[white]' : 'bg-[#ffa590]'} rounded-[22px]`}>
                                <div className='mb-2'>
                                    <img src={cat.image} alt={cat.name}
                                        className="w-55 relative rounded-[22px] h-40 left-4 top-2 px-2" />
                                </div>
                                <p>{cat.name}</p>
                            </div>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
};

export default BookCategoryGrid
