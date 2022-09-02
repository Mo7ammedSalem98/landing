import {useState} from 'react'
import Image from 'next/image'
import mTutor from '../public/mTutor.svg'
import dateIcon from '../public/dateIcon.svg'
import pointIcon from '../public/pointIcon.svg'
import chartIcon from '../public/chartIcon.svg'
import Upcoming from '../components/Upcoming'
import SessionPage from '../components/SessionPage';
const PageMain = () => {
    const [nav, setNav] = useState('happening');
    return(
        <div className='flex flex-col relative items-center h-screen custom-img'>
            <h1 className='absolute top-10 left-72 text-5xl'>Sessions</h1>
            <div className='absolute top-24'>
                <SessionPage
                    header={['upcoming', 'happening', 'happened']}
                    handleNav={setNav}
                    activeNav={nav}/>
            </div>
            <div className='flex flex-cpl flex-wrap justify-center absolute top-36'>
                <Upcoming course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
                <Upcoming course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
                <Upcoming course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
                <Upcoming course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
                <Upcoming course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
                <Upcoming course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
            </div>
                
                         
                   
                  
                           
                
            
            
        </div>
    )}
        // <div className="flex flex-row w-96 h-32 m-1 shadow-2x1 bg-zinc-50">
        //     <div className='p-3'>
        //         <h1>{course}</h1>    
        //         <div>
        //             Tutor Name: {name}
        //         </div>
        //         <div>
        //             Chapter: {chapter}
        //         </div>
        //         <div className="text-xs gap-1 flex items-center">
        //             <span>
        //                 <Image src={pointIcon} width={20} height={20} />
        //             </span>
        //             Time: {time}
        //             <span>
        //                 <Image src={dateIcon} width={20} height={20} />
        //             </span>
        //             {date}
        //         </div>
        //     </div>
        //     <div className='flex items-center w-1/3'>
        //         <button className='rounded-lg bg-teal-600 '>Feedback</button>
        //     </div>
        // </div>

    
{/*
    
*/}
export default PageMain;