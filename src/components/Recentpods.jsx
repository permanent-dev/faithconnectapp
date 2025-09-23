import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import axios from 'axios'
import { useRef } from 'react'











function Recentpods() {

    const [Results, setResults] = useState(null);
    const [loadData, setloadData] = useState(false);
    let [nextPage, setnextPage] = useState("");
    let [prevPage, setprevPage] = useState("");



    const podget = async () => {
        setloadData(true);
        try {
            console.log(loadData);
            const { data } = await axios('https://faith-connect-backend.onrender.com/api/podcasts/');
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
    useEffect(() => {
        podget();


    }, []);
    useEffect(() => {
        console.log('updated results: ', Results);
        console.log(nextPage);
        console.log(prevPage);
    }, [Results])










    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#card",
                scrub: true,
                start: "top 50%",

            }



        })


        tl.to('#pod', {
            translateX: -800,
            ease: 'expo.out',
            scale: '4',



        }, '-=0.5')

        gsap.from('#card img',
            {
                ease: 'power1.inOut',
                duration: 1,
                yPercent: 10,

                delay: 0.8,

            })

    }, [])


    const [currentlyPlaying, setCurrentlyPlaying] = useState(null); // Add this state
    // ...existing state declarations...

    const audioRef = useRef(null); // Add this ref

    const handlePlay = (podId, audioUrl) => {
        if (currentlyPlaying === podId) {
            // If clicking the same audio, toggle play/pause
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        } else {
            // If clicking a different audio, update source and play
            setCurrentlyPlaying(podId);
            audioRef.current.src = audioUrl;
            audioRef.current.play();
        }
    };

    // Add these event listeners in a useEffect
    useEffect(() => {
        const audio = audioRef.current;

        const handleError = (e) => {
            console.error('Audio error:', e);
            setError('Error playing audio');
            setIsPlaying(false);
        };

        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('error', handleError);
        };
    }, []);






    return (
        <div>
            {/* Add a single audio element that will be reused */}
            <audio ref={audioRef} />
            <div className='p-2'>
                <h1 className='uppercase font-bold text-[1.4rem]'>
                    recently played
                </h1>
                <div className='flex items-center mt-4 gap-2 md:gap-10'>
                    <div>
                        <MoveLeftIcon />
                    </div>


                    <div id='card' className='card flex gap-2 overflow-hidden'>
                        {Array.isArray(Results) && Results.length > 0 ? (
                            Results.map((pod) => (
                                <div key={pod.id} id='pod' onClick={handlePlay(pod.id, pod.file_url)}>

                                    <img
                                        src={pod.cover_image_url || "/booksimg1.png"}
                                        alt={pod.title}
                                        className={`
        size-17 md:size-30 rounded-[8px] hover:scale-108
        ${currentlyPlaying === pod.id ? 'ring-2 ring-blue-500' : ''}
        ${isPlaying && currentlyPlaying === pod.id ? 'opacity-75' : ''}
    `}
                                    />
                                    <p>{pod.title}</p>
                                    <p> speaker: {" " + pod.speaker}</p>

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