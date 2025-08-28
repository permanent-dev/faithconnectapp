import React from 'react'
import Dashnav from '../components/Dashnav'
import Bookherosection from '../components/Bookherosection'
import { BellDotIcon } from 'lucide-react'
import Podsearch from '../components/Podsearch'
import BookCategoryGrid from '../components/BookCategoryGrid'

function Dashbooks() {

    const Users = [
        { id: 1, email: 'gbengajoyful@gmail.com', name: "gbenga joyful", color: "rgb(255,165,0)", radius: '50%', icon: <img src="/image 63.png" alt="" /> },

    ]






    return (
        <div className='min-h-screen flex bg-gray-100 max-w-screen rounded-[1.8rem] shadow-[2px_2px_5px_#040404]'>
            <aside>
                <Dashnav />
            </aside>
            <div className='md:w-screen'>
                <header>
                    <div className='flex justify-between mt-[31px] items-center'>
                        <div className='capitalize font-bold text-[3.4rem] font-bold p-1 items-center gap-1 '>
                            <p >
                                books!
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
                </header>
                <div>
                    <Bookherosection />
                </div>
                <div className='flex'>
                    <Podsearch />
                    <div></div>
                </div>
                <div>
                    <BookCategoryGrid />
                </div>

            </div>

        </div>
    )
}

export default Dashbooks