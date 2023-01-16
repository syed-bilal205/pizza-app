import React from 'react'
import logo from '../public/assets/res-logo.png'
import Image from 'next/image'
import {BsFacebook,BsInstagram,BsGithub,BsLinkedin} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className='px-4 flex flex-col flex-wrap  justify-between gap-4 bg-[#fde4e4] md:flex-row md:px-[8rem] md:items-center'>
        <div className='pt-4'>
            <Image src={logo} alt='image' width={60}/>
            <span className='font-medium text-base'>Tasty Treat</span>
            <p className='text-gray-500 w-[16rem]'>Lorem, ipsum dolor sit adipisicing elit. Ex dicta placeat unde eum possimus aliquam enim vitae fugiat hic? Sunt.</p>
        </div>
        <div>
            <h5 className='font-bold'>Delivery Time</h5>
            <h6 className='font-bold'>Sunday - Thursday</h6>
            <span className='text-gray-400'>10:00am - 11:00pm</span>
            <h6 className='font-bold pt-6'>Friday - Saturday</h6>
            <span className='text-gray-400'>Off Day</span>
        </div>
        <div>
            <h6 className='font-bold'>Contact</h6>
            <span className='text-gray-400'>Location:Shah Faisal Block:4</span>
            <h6 className='font-bold py-2'>Phone: 0900678601</h6>
            <h6 className='font-bold'>Email:example@gmail.com</h6>
        </div>
        <div className='flex flex-col justify-center'>
            <h6 className='font-bold'>Newsletter</h6>
            <span className='text-gray-400'>Subscribe our newsletter</span>
            <div className='py-4 flex items-center'>
            <input className='bg-transparent border rounded focus:none outline-none border-black px-6 py-2 relative' type="email" placeholder='Enter your email' />
            </div>
        </div>
      </div>
      <div className='bg-[#fde4e4] px-[2rem] flex flex-col items-center gap-2 pt-4 md:flex-row justify-between md:px-[8rem]'>
        <div >
            <p className='text-[#df2020] font-medium'>Copyright © 2023.All Right Reserved</p>
        </div>
        <div className='flex items-center gap-2'>
            <span>Follow:</span>
            <BsFacebook className='text-[#df2020] cursor-pointer'/>
            <BsGithub className='text-[#df2020] cursor-pointer'/>
            <BsInstagram className='text-[#df2020] cursor-pointer'/>
            <BsLinkedin className='text-[#df2020] cursor-pointer'/>
        </div>
      </div>
    </>
  )
}

export default Footer
