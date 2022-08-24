import Group from '../public/Group 45.svg'
import Image from 'next/Image'


const Hero = () => {
    return (
        <div className=' flex  justify-around '>
            {/* <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' /> */}
            {/*  bg-black/70 */}
            <div className='text-black w-1/2 z-10'>
                <h2 className='text-2xl font-bold'>Lorem ipsum dolor sit amet, <span className='text-heading'>consectetur</span></h2>
                
                <p className='py-5 text-sm text-gray-300'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <button className="p-2 rounded-lg bg-landing_btn">Request a session</button>
                {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
            <div className="hidden sm:block">
            <Image src={Group} width={ 600} height={ 600 } alt='logo' />
                {/* <img src='../Group 45.svg' width="50%" height="200px"></img> */}
            </div>
        
        </div>
        
        
    )
}

export default Hero;