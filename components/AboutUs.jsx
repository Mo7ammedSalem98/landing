import Image from 'next/image'
import Group from '../public/about.svg'
const AboutUs = () => {
    return(
        <div className='flex relative h-screen justify-center items-center custom-img'>
            <div>
                <h1 className="font-semibold mb-10 text-6xl">About us</h1>
                <p className="text-2xl leading-10 mb-40">The Peer Tutoring Initiative is a student led club at King Faisal <br/>University,
                College of Computer Science and Information <br/>Technology. Founded in 
                the year 2020 with an aim to provide a <br/>platform to ensure that students 
                fully comprehend the material <br/>they are being taught in the classroom 
                and cultivate enriching <br/>scientific discussions; while also providing 
                an opportunity to gain <br/>volunteer hours.</p>
            </div>
            <div className='absolute right-64 bottom-0'>
                <Image src={Group} width={450} height={260} alt="logo"/>    
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