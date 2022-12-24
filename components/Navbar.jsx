import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../public/assets/res-logo.png'
import Link from 'next/link'
import {BsBasketFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosContact} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'
import {useSelector} from 'react-redux'


const Navbar = () => {

  const {cartItems}= useSelector((state)=>state.cart)

    const [nav, setNav] = useState(false)

    const handleChange = () =>{
        setNav(!nav)
    }

  return (
    <>
    <div className='flex justify-between items-center sticky top-0  w-full px-[2rem] py-1 box-Shadow z-8 z-[10] bg-white md:px-[8rem]'>
      <div className='flex flex-col items-center '>
        <Image src={logo} alt="" width={60}/>
        <h5 className='font-medium text-base'>Tasty Treat</h5>
      </div>
        <div>
            <ul className='sm:flex hidden gap-10 justify-center items-center text-[#212245] font-medium text-base pt-4'>
                <li className='hover:text-[#df2020] duration-100'><Link href='/'>Home</Link></li>
                <li className='hover:text-[#df2020] duration-100'><Link href='/food'>Foods</Link></li>
                <li className='hover:text-[#df2020] duration-100'><Link href='/cart'>Cart</Link></li>
                <li className='hover:text-[#df2020] duration-100'><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className='flex justify-center items-center pt-4 gap-6 text-[#212245] cursor-pointer relative'>
          <Link href='/cart'>
          <BsBasketFill size={20}/>
          </Link>
            <p className='bg-[#df2020] absolute bottom-2 left-4 text-white rounded-full  px-[4px]'>{cartItems.length}</p>
            <Link href='/login'>

            <IoIosContact size={22}/>
            </Link>
        </div>
        <div onClick={handleChange} className='block sm:hidden z-10 pt-4 cursor-pointer'>
        {
            nav ? <AiOutlineClose size={20}/> :  <GiHamburgerMenu size={20}/>
        }
            
        </div>
        <div className= {nav ? 
        'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-[#ffffff] text-center ease-in duration-300 text-black text-4xl' :
         'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-[50%] h-screen bg-[#ffffff] text-center ease-in duration-300 text-black text-4xl'
        }>
            <ul>
            <li className='hover:text-[#df2020] duration-100 py-5 font-bold'><Link href='/'>Home</Link></li>
                <li className='hover:text-[#df2020] duration-100 py-5 font-bold'><Link href='/food'>Foods</Link></li>
                <li className='hover:text-[#df2020] duration-100 py-5 font-bold'><Link href='/cart'>Cart</Link></li>
                <li className='hover:text-[#df2020] duration-100 py-5 font-bold'><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
