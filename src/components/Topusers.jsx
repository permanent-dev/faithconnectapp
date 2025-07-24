import React from 'react'

function Topusers() {

    const top_users = [
        { id: 1, name: "Stephen Wilson", email: "stephenwilson@gmail.com", usage: "55%", icon: <img src="/bg2.png" alt="user's img" /> },
        { id: 2, name: "Stephen Wilson", email: "stephenwilson@gmail.com", usage: "55%", icon: <img src="/bg2.png" alt="user's img" /> }

    ]



    return (
        <div className='ml-1 my-2'>
            <h1 className='capitalize text-[1.6rem] font-bold text-shadow-[2px_2px_6px_#343434]'>
                top users
            </h1>
            <div className='bg-[white] md:w-85 p-2 mt-1 space-y-3 rounded-[1.6rem] hover:scale-102 shadow-[2px_2px_0.3rem_#000000]'>
                <div className='flex space-x-3 items-center bg-gray-300 p-2 rounded-[32px] '>
                    <img src="/bg2.png" alt="" className='size-19 rounded-[50%]' />
                    <div>
                        <p className='capitalize text-[1.2rem]'>stephen wilson</p>
                        <p className='text-[0.6rem] text-[orange]'> stephenwilson@gmail.com</p>
                        <p className=''>
                            65%
                        </p>
                    </div>



                </div>

                <div className='flex space-x-3 items-center bg-gray-300 p-2 rounded-[32px] '>
                    <img src="/bg2.png" alt="" className='size-19 rounded-[50%]' />
                    <div>
                        <p className='capitalize text-[1.2rem]'>gbenga joyful</p>
                        <p className='text-[0.6rem] text-[orange]'> gbengajoyful@gmail.com</p>
                        <p className=''>
                            60%
                        </p>
                    </div>



                </div>


                <div className='flex space-x-3 items-center bg-gray-300 p-2 rounded-[32px] '>
                    <img src="/bg2.png" alt="" className='size-19 rounded-[50%]' />
                    <div>
                        <p className='capitalize text-[1.2rem]'>maurice stone</p>
                        <p className='text-[0.6rem] text-[orange]'> stoonemaur25@gmail.com</p>
                        <p className=''>
                            45%
                        </p>
                    </div>



                </div>


                <div className='flex space-x-3 items-center bg-gray-300 p-2 rounded-[32px] '>
                    <img src="/bg2.png" alt="" className='size-19 rounded-[50%]' />
                    <div>
                        <p className='capitalize text-[1.2rem]'>curl blitz</p>
                        <p className='text-[0.6rem] text-[orange]'> blitznc@gmail.com</p>
                        <p className=''>
                            39%
                        </p>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Topusers