import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import axios from 'axios'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);










function Recentpods() {

    const [Results, setResults] = useState(null);
    const [loadData, setloadData] = useState(false);
    let [nextPage, setnextPage] = useState("");
    let [prevPage, setprevPage] = useState("");




    useEffect(() => {
        const podget = async (next_url) => {
            setloadData(true);
            try {
                console.log(loadData);
                const { data } = await axios('https://faith-connect-backend.onrender.com/api/podcasts/' || next_url);
                // console.log(data);
                setResults(data.results);
                setnextPage(data.next); //api to the next paginated data
                setprevPage(data.previous);   //api to previous pagiated data
                // console.log(Results);



            } catch (error) {
                console.error(error.message)
                console.log(loadData);

            }





        };

        podget();


    }, []);

    useEffect(() => {
        console.log('updated results: ', Results);
        console.log(nextPage);
        console.log(prevPage);
    }, [Results])


    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

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
            const target = scroller.scrollLeft + scrollAmount * 10;
            // animate smoothly with gsap (or use scroller.scrollTo)
            gsap.to(scroller, { scrollLeft: target, duration: 0.01, ease: 'power1.out' });
        };

        scroller.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            scroller.removeEventListener('wheel', onWheel);
        };
    }, { scope: containerRef })


    const [currentlyPlaying, setCurrentlyPlaying] = useState(null); // Add this state
    // ...existing state declarations...

    const audioRef = useRef(null); // Add this ref
    const [Error, setError] = useState('');
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = (podId, audioUrl) => (e) => { // Added event parameter and closure
        e.preventDefault();

        if (currentlyPlaying === podId) {
            // Toggle play/pause for current audio
            if (audioRef.current.paused) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(err => setError(err.message));
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        } else {
            // Play new audio
            setCurrentlyPlaying(podId);
            audioRef.current.src = audioUrl;
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(err => setError(err.message));
        }
    };

    // Audio event listeners



    // Add these event listeners in a useEffect
    useEffect(() => {
        const audio = audioRef.current;
        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentlyPlaying(null);
        };

        const handleError = (e) => {
            console.error('Audio error:', e);
            setError('Error playing audio');
            setIsPlaying(false);
        };

        if (audio) {
            audio.addEventListener('ended', handleEnded);
            audio.addEventListener('error', handleError);
        }

        return () => {
            if (audio) {
                audio.addEventListener('ended', handleEnded);
                audio.removeEventListener('error', handleError);
            }
        };
    }, []);






    return (
        <div>
            {/* Add a single audio element that will be reused */}
            <audio ref={audioRef} />
            <div className='p-2'>
                <h1 className='uppercase font-bold text-[1.4rem] mb-4'>
                    recently played
                </h1>
                <div ref={containerRef} className='flex space-x-2 items-center relative mt-4 overflow-hidden'>
                    <div>
                        <MoveLeftIcon />
                    </div>

                    <div ref={scrollerRef}
                        className='flex space-x-5 items-center h-full'>
                        {Array.isArray(Results) && Results.length > 0 ? (
                            Results.map((pod) => (
                                <div key={pod.id}
                                    id='pod'
                                    onClick={handlePlay(pod.id, pod.file_url)}
                                    style={{
                                        flexShrink: 0,
                                    }}
                                    className={`scroll-item rounded-xl mb-2 px-2 shadow-md items-center flex flex-col max-w-[135px]
         ${currentlyPlaying === pod.id ? 'ring-2 ring-blue-500' : ''}
        ${isPlaying && currentlyPlaying === pod.id ? 'opacity-70 scale-108' : ''}
                                        `}
                                >
                                    <div className='relative aspect-square rounded-xl shadow-md mt-2 mb-2'>
                                        <img
                                            src={pod.cover_image_url || "/booksimg1.png"}
                                            alt={pod.title}
                                            className={`size-30 rounded-[8px] hover:scale-105`}
                                        />
                                        <span className='absolute top-13 left-11 text-red-600'>
                                            {currentlyPlaying === pod.id && isPlaying ? (<button>pause</button>) : (<button>play</button>)}
                                        </span>
                                    </div>
                                    <p className="">{pod.title}</p>
                                    <p className="text-gray-600"> speaker: {" " + pod.speaker}</p>

                                </div>



                            ))

                        ) : (
                            // fallback images
                            <>
                                <img src="/booksimg1.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                                <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                                <img src="/booksimg3.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                                <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                                <img src="/booksimg4.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                                <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />



                            </>
                        )}




                    </div>
                    <div> <MoveRightIcon />    </div>
                </div>
            </div>
        </div>
    )
}

export default Recentpods