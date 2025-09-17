import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import axios from 'axios'











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

        gsap.from('#card img',
            {
                ease: 'power1.inOut',
                duration: 1,
                yPercent: 10,

                delay: 0.8,

            })

    }, [])






    return (
        <div>
            <div className='p-2'>
                <h1 className='uppercase font-bold text-[1.4rem]'>
                    recently played
                </h1>
                <div className='flex items-center mt-4 gap-2 md:gap-10'>
                    <div> <MoveLeftIcon />    </div>
                    <div id='card' className='card w-50% flex gap-3'>
                        {Array.isArray(Results) && Results.length > 0 ? (
                            Results.map((pod, index) => (
                                <div key={pod.id} className='w-full overflow-hidden'>
                                    <img
                                        src={pod.cover_image_url || "/booksimg1.png"}
                                        alt={pod.title}
                                        className="size-17 md:size-30 rounded-[8px] hover:scale-108"
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