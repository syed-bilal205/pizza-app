import React from 'react'
import HeroImg from '../public/assets/hero.png'
import Image from 'next/image'
import {MdLocalShipping} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <div className=' flex flex-col justify-between items-center px-[2rem]   md:px-[8rem] md:flex-row'>
        <div className='mt-16 flex flex-col justify-center items-flex-start'>
            <h4 className='text-[#212245] font-medium text-base tracking-wide pb-1'>Easy way to make an order</h4>
            <h1 className='text-[#df2020] font-bold text-5xl pb-2'>HUNGRY?<span className='text-[#212245] text-4xl'>Just wait</span></h1>
            <h1 className='text-[#212245] text-6xl font-bold'>food at <span className='text-[#df2020] font-bold text-6xl'>your door</span></h1>
            <p className='w-[90%] text-[#212245] py-2 leading-8'>Lorem ipsum dolor sit amet,repellat, ea recusandae atque odio tempora?</p>
            <div className='flex gap-8'>
            <Link href='/food'>

                <button className='mr-2 text-white font-bold bg-[#df2020] py-2 px-3 rounded hover:text-[#df2020] hover:bg-white hover:border-[#df2020] border-2 ease-in duration-500'>Order now</button>
                <button className=' font-bold text-[#df2020] py-2 px-2 rounded border-[#df2020]  border-2 hover:text-white hover:bg-[#df2020] ease-in duration-500'>See all food</button>
            </Link>
            </div>
            <div className='flex gap-4 py-8'>
            <div className='flex gap-2'>
            <MdLocalShipping size={20} className='text-[#df2020]'/>
            <p>No shipping charge</p>
            </div>
            <div className='flex gap-2'>
            <AiOutlineCheckCircle size={20} className='text-[#df2020]'/>
            <p>100% secure checkout</p>
            </div>
            </div>
        </div>
        <div>
        <Image src={HeroImg} alt='images' width={500}/>
        </div>
      </div>
    </>
  )
}

export default Hero
