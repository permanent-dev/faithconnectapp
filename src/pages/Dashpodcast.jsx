import React from 'react'
import Dashnav from '../components/Dashnav'
import Dashheader2 from '../components/Dashheader2'

export default function Dashpodcast() {
    return (
        <div>
            <div className='w-[85rem] mx-auto my-13 flex bg-gray-100 rounded-[1.8rem] shadow-[4px_4px_1rem_#674538]'>
                <aside>
                    <Dashnav />
                </aside>
                <div>
                    <header>
                        <Dashheader2 />
                    </header>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
