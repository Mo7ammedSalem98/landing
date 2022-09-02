import dateIcon from '../public/dateIcon.svg'
import pointIcon from '../public/pointIcon.svg'
import Image from 'next/image'
const Upcoming = ({course, name, chapter, time, date}) => {
    return (
        <div className="flex rounded-lg bg-zinc-50 m-5">
            <div className='p-3'>
                <h1>{course}</h1>    
                <div>
                    Tutor Name: {name}
                </div>
                <div>
                    Chapter: {chapter}
                </div>
                <div className="text-xs gap-1 flex items-center">
                    <span>
                        <Image src={pointIcon} width={20} height={20} />
                    </span>
                    Time: {time}
                    <span>
                        <Image src={dateIcon} width={20} height={20} />
                    </span>
                    {date}
                </div>
            </div>
            <div className='flex items-center w-1/3'>
                <button className='rounded-lg bg-teal-600 '>Feedback</button>
            </div>
        </div>
    )
}

export default Upcoming;