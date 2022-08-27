import {useState} from 'react'
import Image from 'next/image'
import mTutor from '../public/mTutor.svg'
import dateIcon from '../public/dateIcon.svg'
import pointIcon from '../public/pointIcon.svg'
import chartIcon from '../public/chartIcon.svg'
import SessionPage from '../components/SessionPage'
const PageMain = () => {
    const [nav, setNav] = useState('happening');
    return(
        <div className="w-200 h-200 justify-between shadow-2x1 flex h-screen">
            <Image src={mTutor} className="w-1/3" />
            <div className='w-2/3 pl-2 pt-2'>
                <div className="flex justify-between">
                    <p>Course Name</p>
                </div>
                <p className='text-gray-300 pb-1 text-xs'>Email</p>
                <p className='text-gray-300 pb-1 text-xs'>Phone</p>
                <div className="p-1 bg-secondary rounded-lg bg-opacity-20">
                    <div className="text-xs gap-1 flex items-center">
                        <span>
                            <Image src={dateIcon} width={20} height={20} />
                        </span>
                        Date
                    </div>
                    <div className="text-xs gap-1 flex items-center">
                        <span>
                            <Image src={pointIcon} width={20} height={20} />
                        </span>
                        Total Points: 10000
                    </div>
                    <div className="text-xs gap-1 flex items-center">
                        <span>
                            <Image src={chartIcon} width={20} height={20} />
                        </span>
                        Total session: Number
                    </div>
                </div>
            </div>
        </div>
    )
}
{/*
    <div className='flex items-center justify-center h-screen custom-img'>
            <SessionPage
                header={['upcoming', 'happening', 'happened']}
                handleNav={setNav}
                activeNav={nav}/>
        </div>
*/}
export default PageMain;