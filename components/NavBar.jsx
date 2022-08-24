
import React from 'react'
import Image from 'next/Image'
import logo from '../public/Frame.png'
const NavBar = () => {
    
    return (
        <div className=' w-full '>
            <div className='  flex justify-between items-center p-4 text-white'>
                <Image src={logo} width={ 150} height={ 150 } alt='logo' />
         
                <button className="px-4 rounded-full bg-yellow-400 text-black">Sign Up</button>
            </div>
        </div>
    )

}

export default NavBar