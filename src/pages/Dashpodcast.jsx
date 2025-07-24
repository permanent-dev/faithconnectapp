import React from 'react'
import Dashnav from '../components/Dashnav'
import Dashheader2 from '../components/Dashheader2'
import Podads from '../components/Podads'
import Podsearch from '../components/Podsearch'
import Recentpods from '../components/Recentpods'
import PopularPodcasts from '../components/PopularPodcasts'
import TopPodcasters from '../components/TopPodcasters'

export default function Dashpodcast() {
    return (
        <div >
            <div className=' flex bg-gray-100 min-h-screen min-w-screen rounded-[1.8rem]'>
                <aside>
                    <Dashnav />
                </aside>
                <div className='w-screen'>
                    <header>
                        <Dashheader2 />
                    </header>
                    <div >
                        <div>
                            <Podads />
                        </div>
                        <div className="flex mt-5 justify-around p-2">
                            <div>
                                <Podsearch />
                                <Recentpods />
                                <PopularPodcasts />


                            </div>

                            <div>
                                <TopPodcasters />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
