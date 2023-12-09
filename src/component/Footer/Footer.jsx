// import React from 'react'
import {FaFacebook , FaInstagram,FaLinkedin ,FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="flex items-center justify-center gap-4">
            <p>All Rights Reserved ©️</p>
            <p className='font-bold text-gray-500'>Developed With MERN By @AMRESH</p>
        </div>
        <div className="flex gap-5 m-4 p-4">
            <FaFacebook className='hover:text-blue-500 cursor-pointer rounded-md text-xl'/>
            <FaInstagram className='hover:text-blue-500 cursor-pointer rounded-md text-xl'/>
            <FaLinkedin className='hover:text-blue-500 cursor-pointer rounded-md text-xl'/>
            <FaTwitter className='hover:text-blue-500 cursor-pointer rounded-md text-xl'/>
        </div>
    </div>
  )
}

export default Footer