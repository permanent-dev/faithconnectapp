import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import axios from 'axios'

function Recentpods() {
    useGSAP(() => {
        gsap.from('#card img',
            {
                ease: 'power1.inOut',
                duration: 1,
                yPercent: 10,
                scrub: true,

            })

    }, [])

    const podget = async () => {
        const [Results, setResults] = useState([]);
        const { data } = await axios('https://faith-connect-backend.onrender.com/api/podcasts/?page=20&page_size=10&category=podcast');
        console.log(data);


    }


    return (
        <div>
            <div className='p-2'>
                <h1 className='uppercase font-bold text-[1.4rem]'>
                    recently played
                </h1>
                <div className='flex items-center mt-4 gap-2 md:gap-10'>
                    <div> <MoveLeftIcon />    </div>
                    <div id='card' className='card flex gap-8'>
                        <img src="/booksimg1.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg3.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg4.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />
                        <img src="/booksimg2.png" alt="" className="size-17 md:size-30 rounded-[8px] hover:scale-108" />



                    </div>
                    <div> <MoveRightIcon />    </div>
                </div>
            </div>
        </div>
    )
}

export default Recentpods