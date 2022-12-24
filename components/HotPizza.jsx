import React from 'react'
import {products} from '../public/data/data'
import Image from 'next/image'
import Link from 'next/link'

const HotPizza = () => {

  return (
    <>
        <h2 className='pt-10 text-4xl font-bold text-[#212245] text-center md:pt-2'>Hot Pizza</h2>
      <div className='px-[2rem] pt-6 flex flex-col justify-center items-center md:flex-row gap-8'>
        <Link href='/food'>

        <div className='flex flex-col justify-center items-center md:flex-row gap-8'>

       
        {
            
            products.slice(1,5).map((item,index)=>(
        <div className=' border py-4 px-6  rounded cursor-pointer md:mt-4' key={index}>
        <div className='pb-2 flex items-center justify-center'>
            <Image src={item.image01} alt='image' width={120} className='ease-in duration-300'/>
        </div>
        <div>
        <h6 className='font-bold text-[#212245] text-center pb-2'>{item.title}</h6>
        <div className='flex justify-between items-center gap-8 md:gap-10'>
            {/* <h6 className='text-[#df2020] font-bold flex'>$ {item.price}</h6> */}
            {/* <button className='bg-[#df2020] text-white rounded py-1 px-3' onClick={()=>addToCardhandler({quantity:1})}>Add to Cart</button> */}
            </div>
        </div>
      </div>
            ))
        }
        </div>
        </Link>
      </div>
    </>
  )
}

export default HotPizza
