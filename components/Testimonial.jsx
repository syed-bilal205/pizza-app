import React from 'react'
import Image from 'next/image';
import avaImg1 from '../public/assets/ava-1.jpg'
import networkImg from '../public/assets/network.png'


const Testimonial = () => {
  return (
    <>
        <div className='bg-white flex flex-col items-center justify-center px-[2rem] pt-8 md:flex-row md:px-[8rem]'>
            <div className='flex flex-col'>
                <span className='text-[#df2020] font-bold text-xl'>
                    Testimonial
                </span>
                <h3 className='text-2xl font-bold'>What our <span className='text-[#df2020]'>customers</span> are saying</h3>
                <p className='text-gray-400 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia doloremque dolores laudantium odio. Placeat praesentium enim vel nostrum voluptate.</p>
                <div className='flex flex-col item-flex-start gap-2 pt-4'>
                <Image src={avaImg1} alt='image' width={80}/>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sapiente.</p>
                <span className='font-bold'>Jhon Doe</span>
                </div>
            </div>
            <div className='pt-2'>
                <Image src={networkImg} alt='image' width={400}/>
            </div>
        </div>
            
    </>
  )
}

export default Testimonial
