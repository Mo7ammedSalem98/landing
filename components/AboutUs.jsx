const AboutUs = () => {
    return(
        <div className='flex h-screen bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute w-198 h-23 left-39 top-285'>
                <h1>About us</h1>
            </div>
            <div className='absolute w-292 h-111 left-43 top-309'>
                <p>The Peer Tutoring Initiative is a student led club at King Faisal University,
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