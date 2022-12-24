import Image from 'next/image'
import React from 'react'

const CommonBanner = ({title}) => {
  return (
    <>
      <div className='relative h-60 bannerImg bg-center bg-fixed flex items-center -z[2]'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 h-60 z-[2]'/>
        <div className='z-[2] text-white p-4'>
          <h3 className=' font-bold text-4xl'>{title}</h3>
        </div>
      </div>
    </>
  )
}

export default CommonBanner
