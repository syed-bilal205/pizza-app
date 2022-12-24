import React from 'react'
import Image from 'next/image'



const Product = ({handler,title,price,id,imgSrc}) => {
  return (
    <>
    <div className='flex justify-center flex-col items-center'>
        {/* {
          allProduct.map((item,index)=>( */}          
        <div className='border py-4 px-6 mb-4 rounded cursor-pointer'>
        <div className='pb-2  flex items-center justify-center'>
             {/* <Image src={item.image01} width={120} className='ease-in duration-200'/> hover:scale-125 */}
              <Image alt='image' src={imgSrc} width={120} className='ease-in duration-200'/> {/* hover:scale-125 */}
        </div>
        <div>
        <h6 className='font-bold text-[#212245] text-center pb-2'>{title}</h6>
        <div className='flex justify-between gap-8 md:gap-10'>
            <h6 className='text-[#df2020] font-bold '>$ {price}</h6>
            <button  className='bg-[#df2020] text-white rounded py-1 px-3' onClick={()=>handler({id,imgSrc,title,price,title,quantity:1})}>Add to Cart</button>
            </div>
        </div>
      </div>
      </div>
            {/* ))
        } */}
    </>
  )
}

export default Product
