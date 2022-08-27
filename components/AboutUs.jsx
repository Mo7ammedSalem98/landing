import Image from 'next/image'
import Group from '../public/Web designer girl making landing page with video, color palette and site blocks.png'
const AboutUs = () => {
    return(
        <div className='flex justify-center items-center h-screen flex-col custom-img'>
            <div className='flex flex-col items-center w-1/2'>
                <h1 >About us</h1>
                <p className='m-2'>The Peer Tutoring Initiative is a student led club at King Faisal University,
                College of Computer Science and Information Technology. Founded in 
                the year 2020 with an aim to provide a platform to ensure that students 
                fully comprehend the material they are being taught in the classroom 
                and cultivate enriching scientific discussions; while also providing 
                an opportunity to gain volunteer hours.</p>
            </div>
            <div className='ml-60'>
                <Image src={Group} width={450} height={250} alt="logo"/>    
            </div>
        </div>
    )
}
{/*
<div className='flex justify-center items-center h-screen bg-fixed bg-center bg-cover custom-img'>
            <div className=''>
                <h1 className='text-5xl font-bold font-serif'>About us</h1>
                <p className='py-5 whitespace-pre-line font-normal font-mono'>The Peer Tutoring Initiative is a student led club at King Faisal University,
                College of Computer Science and Information Technology. Founded in 
                the year 2020 with an aim to provide a platform to ensure that students 
                fully comprehend the material they are being taught in the classroom 
                and cultivate enriching scientific discussions; while also providing 
                an opportunity to gain volunteer hours.</p>
            </div>
            <div className='w-30 h-20'>
                <img width='534px' height="400px" className='relative top-2' src='../Web designer girl making landing page with video, color palette and site blocks.png'/>
            </div>
        </div> 
*/}
export default AboutUs;