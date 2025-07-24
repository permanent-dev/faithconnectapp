import React from 'react'
import { Link } from 'react-router-dom'
import Dashnav from '../components/Dashnav'
import Dashheader from '../components/Dashheader'
import Dashitems from '../components/Dashitems'
import Dashsearch from '../components/Dashsearch'
import Topusers from '../components/Topusers'
import Streak from '../components/Streak'
import Inspiration from '../components/Inspiration'
import Activities from '../components/Activities'

function Dashboard() {
    return (
        <div>
            <div className='min-h-screen flex bg-gray-100 min-w-screen rounded-[1.8rem] shadow-[2px_2px_5px_#040404]'>
                <aside>
                    <Dashnav />

                </aside>
                <div className='w-screen'>
                    <header>
                        <Dashheader />
                    </header>
                    <div className='flex justify-around ml-3'>
                        <div>
                            <div>
                                <Dashitems />
                            </div>

                            <div>
                                <Dashsearch />
                            </div>
                            <div className='flex ml-[3px] gap-[0.8rem] md:gap-[5rem]'>
                                <div>
                                    <Topusers />
                                </div>
                                <div className='space-y-5'>
                                    <div className='p-3'>
                                        <Streak />
                                    </div>
                                    <div className='p-3'>
                                        <Inspiration />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Activities />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard