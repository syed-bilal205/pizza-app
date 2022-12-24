import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiFillDelete} from 'react-icons/ai'

const CartItem = ({imgSrc,qty,id,decrement,price,increment,deleteHandler,title}) => {
  return (
    <>
      <div className='pt-6 pb-2 flex justify-center items-center w-full px-[4rem] md:px-[6rem]'>
      <table className='border w-full p-8'>
      <thead>
    <tr>
      <th className='px-1'>Image</th>
      <th className='px-1'>Product</th>
      <th className='px-1'>Increment</th>
      <th className='px-1'>Quantity</th>
      <th className='px-1'>Decrement</th>
      <th className='px-1'>Price</th>
      <th className='px-1'>Delete</th>
    </tr>
  </thead>
  <tbody className='text-center'>
  
    <tr>
      <td className='flex justify-center items-center'><Image src={imgSrc} alt='images' className='rounded w-12 flex items-center'/></td>
      <td className='p-2'>{title}</td>
      <td><button className='bg-[#fde4e4] py-1 px-2 rounded' onClick={()=>increment(id)}>+</button></td>
      <td>{qty}px</td>
      <td><button className='bg-[#fde4e4] py-1 px-2 rounded' onClick={()=>decrement(id)}>-</button></td>
      <td>${price}</td>
      <td className='flex items-center justify-center'><AiFillDelete size={20} onClick={()=>deleteHandler(id)}/></td>
    </tr>
    </tbody>
      
      </table>

  </div>

    </>
  )
}

export default CartItem
