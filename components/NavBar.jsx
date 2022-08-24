
import React from 'react'

const NavBar = () => {
    
    return (
        <div className='absolute w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                
                <img src='../Frame.png'/> {/* This is logo */}
                <button className="px-4 rounded-full bg-yellow-400 text-black">Sign Up</button>
            </div>
        </div>
    )

}

export default NavBar