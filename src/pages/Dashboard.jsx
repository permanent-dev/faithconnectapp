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
            <div className='w-[85rem] mx-auto my-14 flex bg-gray-100 rounded-[1.8rem] shadow-[4px_4px_1rem_#674538]'>
                <aside>
                    <Dashnav />

                </aside>
                <div>
                    <header>
                        <Dashheader />
                    </header>
                    <div className='flex gap-9 ml-4'>
                        <div>
                            <div>
                                <Dashitems />
                            </div>

                            <div>
                                <Dashsearch />
                            </div>
                            <div className='flex ml-[1rem] gap-[0.8rem]'>
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