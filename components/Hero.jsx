const Hero = ({message, heading}) => {
    return (
        <div className='flex items-center justify-around h-screen bg-fixed bg-center bg-cover custom-img'>
            {/* <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' /> */}
            {/*  bg-black/70 */}
            <div className='p-5 text-black z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>{heading}</h2>
                
                <p className='py-5 text-xl'>{message}</p>
                <button className="absolute left-24 top-95 p-2 rounded-lg bg-emerald-300">Request a session</button>
                {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
            <div>
                <img src='../Group 45.svg' width="50%" height="200px"></img>
            </div>
        </div>
        
        
    )
}

export default Hero;