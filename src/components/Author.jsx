import React from 'react'

function Author() {
    return (
        <>
            <div className='flex gap-3 md:gap-54 justify-center items-center my-12'>
                <div>
                    <h1 className='capitalize text-[1.5rem] font-bold '>ebooks</h1>
                    <p className='capitalize text-[1.2rem]  '>book recommendation</p>
                </div>
                <div className='mt-17 flex gap-2 items-center justify-center'>

                    <img className='rounded-full size-19' src="/image 63.png" alt="" />

                    <div>
                        <h2 className='capitalize text-[1.2rem] font-[600] '>kenneth e. hagin</h2>
                        <p className='capitalize text-[1.2rem]  '>
                            author
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-col-1 justify-center items-center mx-auto p-3'>
                <p className='text-[1.9rem] w-[25rem] md:w-[58rem]'>
                    <span className='capitalize font-bold'>how to be lead by the spirit of god</span>
                    'tells the story of divine guidiance, revealing how believers can hear God's
                    voice ,make spirit-filled decisions, and live a purposeful, victorious christian life daily.'
                </p>
            </div>





        </>
    );
}

export default Author