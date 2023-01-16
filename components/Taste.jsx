import Image from 'next/image'
import React from 'react'
import LocationImg from '../public/assets/location.png'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Taste = () => {
  return (
    <>
      <div className='bg-white px-[2rem] flex flex-col justify-center  items-center  md:flex-row md:justify-between md:px-[6rem]'>
        <div>
            <Image alt='image' src={LocationImg}/>
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className='text-[#212245] font-bold text-3xl'>Why <span className='text-[#df2020]'>Tasty Treat?</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nemo velit alias ratione nobis, magnam quisquam quod blanditiis, quo esse, temporibus et repellendus quam laborum. Illo est maiores inventore et.</p>
        <div className='flex items-center gap-2'>
            <AiOutlineCheckCircle className='text-[#df2020]'/> <h4 className='font-bold text-[#212245]'>Fresh and tasty foods</h4>
        </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,</p>
            <div className='flex items-center gap-2'>
            <AiOutlineCheckCircle className='text-[#df2020]'/> <h4 className='font-bold text-[#212245]'>Fresh and tasty foods</h4>
        </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,</p>
            <div className='flex items-center gap-2'>
            <AiOutlineCheckCircle className='text-[#df2020]'/> <h4 className='font-bold text-[#212245]'>Fresh and tasty foods</h4>
        </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,</p>
        </div>
      </div>
    </>
  )
}

export default Taste
