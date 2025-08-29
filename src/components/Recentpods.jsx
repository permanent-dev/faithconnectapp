import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import axios from 'axios'











function Recentpods() {

    const [Results, setResults] = useState([]);
    const [loadData, setloadData] = useState(false)


    const podget = async () => {

        try {
            const { data } = await axios('https://faith-connect-backend.onrender.com/api/podcasts/');
            console.log(data);
            let nextPage = data.next;
            let prevPage = data.previous;
            setResults(data.result);
            console.log(Results);
            console.log(setloadData(true));


        } catch (error) {
            console.error(error.message)
            console.log(loadData);

        }





    };
    useEffect(() => {
        podget();
    }, [])









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
                    <div id='card' className='card flex gap-8'>
                        {Results.length > 0 ? (
                            Results.map((pod,index)=>(
                                <img
                                 src={pod.image || "/booksimg1.png" } 
                                 alt={pod.title}
                                 className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                            ))

                        ):(
                            // fallback images
                            <>
                            <img src="/booksimg1.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg3.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg4.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />



                            </>
                        ) }



                        
                    </div>
                    <div> <MoveRightIcon />    </div>
                </div>
            </div>
        </div>
    )
}

export default Recentpods