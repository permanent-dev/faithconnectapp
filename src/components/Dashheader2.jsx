import React from 'react'
import { BellDotIcon } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

function Dashheader2() {
    const Users = [
        { id: 1, email: 'gbengajoyful@gmail.com', name: "gbenga joyful", color: "rgb(255,165,0)", radius: '50%', icon: <img src="/image 63.png" alt="" /> },

    ]

    useGSAP(() => {
        const para = new SplitText('#des', { type: 'chars, words' });
        gsap.from(para.chars,
            {
                ease: 'expo.out',
                stagger: '0.09',
                y: '25',
                duration: 1,
                scrub: true,

            })

    }, [])


    return (
        <div className='flex justify-between mt-[31px] items-center'>
            <div className='capitalize font-bold text-[3.4rem] font-bold p-1 items-center gap-1 '>
                <p id='des' >
                    podcasts!
                </p>


                {/* {Users.map(p => (
                    <p key={p.id}
                        style={{
                            color: p.color,
                            fontSize: "3rem",
                        }} >
                        {p.name}
                    </p>

                  ))} */}

            </div>
            <div className='flex gap-2 justify-center items-center'>
                <BellDotIcon strokeWidth={3} size={45} />
                <div className='flex bg-[#fefefe] rounded-l-[7rem] items-center'>
                    <p >
                        {Users.map(p => (
                            <span key={p.id} style={{
                                borderRadius: p.radius,
                                overflow: "hidden",
                                display: "inline-block",
                                height: "6.1rem"
                            }}>
                                {p.icon}
                            </span>
                        ))}

                    </p>
                    <p>
                        {Users.map(p => (
                            <span key={p.id} style={{
                                display: "block",
                                overflow: "hidden",
                                textTransform: "capitalize",
                                fontWeight: "bold",
                                textShadow: "2px 2px 7px #101010",
                                padding: "0 9px",

                            }}>
                                {p.name}
                                <br />
                                {p.email}
                            </span>
                        ))}
                    </p>
                </div>

            </div>


        </div>
    )
}


export default Dashheader2