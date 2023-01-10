import Image from 'next/image'
import React from 'react'
import {categoryData} from '../public/data/data'

const Category = () => {
  return (
    <>
        <div className='flex gap-6 flex-wrap px-[2rem] justify-center pt-4 md:gap-20 pb-2 md:pt-8'>
      {
        categoryData.map((item)=>(
            <>
                <div key={item.id} className='flex items-center justify-center gap-3 bg-[#fde4e4] w-40 h-16 rounded ease-in duration-500 hover:-translate-y-3 cursor-pointer'>
                    <div>
                        <Image src={item.imageUrl} alt='image' width={50}/>
                    </div>
                    <h6 className='font-medium text-[#212245]'>{item.display}</h6>
                </div>
            </>
        ))
      }
      </div>
    </>
  )
}

export default Category
