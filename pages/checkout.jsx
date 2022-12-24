import React from 'react'
import CommonBanner from '../components/CommonBanner'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const {cartItems,subTotal,shipping,tax,total} =useSelector((state)=>state.cart)


  return (
    <>
      <CommonBanner title='Check Out'/>
      <div className='px-[2rem] py-[2rem] flex flex-col md:flex-row md:items-center justify-evenly gap-[8rem] md:px-[8rem]'>
        <div className='flex flex-col flex-1  gap-2'>
            <h2 className='font-bold text-2xl tracking-wider'>Shipping Address</h2>

            <input type="text" placeholder='Enter your name' className='outline-none border-b-2 py-2' />
            <input type="text" placeholder='Enter your email' className='outline-none border-b-2 py-2' />
            <input type="text" placeholder='Phone number' className='outline-none border-b-2 py-2' />
            <input type="text" placeholder='Country' className='outline-none border-b-2 py-2' />
            <input type="text" placeholder='City' className='outline-none border-b-2 py-2' />
            <input type="text" placeholder='Postal Code' className='outline-none border-b-2 py-2' />
            <div >
            <button className=' text-white font-bold bg-[#df2020] py-2 px-3 rounded'>Payment</button>
            </div>
        </div>
        <div className='bg-[#fde4e4] rounded flex flex-col justify-center mt-[-6rem] items-center gap-2  md:w-52 h-32 md:justify-center md:items-center'>
            <h6 className='font-bold'>Subtotal: <span>${subTotal}</span></h6>
            <h6 className='font-bold'>Shipping: <span>${shipping}</span></h6>
            <h4 className='font-bold'>Total: <span>${total}</span></h4>
        </div>
      </div>
    </>
  )
}

export default Checkout
