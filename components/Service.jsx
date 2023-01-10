import Image from 'next/image'
import React from 'react'
import {serviceData} from '../public/data/data'

const Service = () => {
  return (
    <>
      <div className='flex justify-center items-center pt-16'>
        <div className='flex flex-col items-center gap-2'>
            <span className='font-bold text-[#df2020] text-2xl'>What we serve</span>
            <h3 className='font-bold text-[#212245] text-4xl md:text-5xl'>Just sit back at home</h3>
            <h4 className='text-3xl font-bold text-[#212245] md:text-4xl'>we will <span className='text-[#df2020] font-bold text-3xl md:text-4xl'>take care</span></h4>
        </div>
      </div>
      <div>
        <div className='flex flex-col px-[2rem] pt-8 md:flex-row'>
            {
                serviceData.map((item)=>(
                    <div className='flex flex-col items-center justify-center pb-6' key={item.id}>
                    <div>
                        <Image src={item.imageUrl} alt='image' width={80}/>
                    </div>
                    <h6 className='font-bold text-[#212245] text-xl py-2'>{item.display}</h6>
                    <p className='px-[3rem] text-center'>{item.desc}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Service
