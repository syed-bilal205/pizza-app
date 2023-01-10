import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'

const Cart = () => {

  const {cartItems,subTotal} =useSelector((state)=>state.cart)

  const dispatch = useDispatch()

  const increment = (id)=>{
    dispatch({
      type:'addToCart',
      payload:{id},
    })
    dispatch({type:'calculatePrice'})
  }
  const decrement = (id)=>{
    dispatch({
      type:'decrement',
      payload:id,
    })
    dispatch({type:'calculatePrice'})
  }
  const deleteHandler = (id)=>{
    dispatch({
      type:'deleteFromCart',
      payload:id,
    })
    dispatch({type:'calculatePrice'})
  }

  return (
    <>
      <CommonBanner title='Your Cart'/>
        {/* <div className='p-[2rem] w-full flex items-center justify-center'> */}




        {
          cartItems.length > 0 ? (
            cartItems.map((i)=>(
              <CartItem imgSrc={i.imgSrc} qty={i.quantity} title={i.title} id={i.id} key={i.id} price={i.price} decrement={decrement} increment={increment} deleteHandler={deleteHandler}/> 
            ))
          ):
          <h1 className='text-4xl font-bold flex justify-center items-center py-10 text-[#df2020]'>No Items Yet</h1>
        }


        <div className='px-[2rem]'>
        <div className='pb-2 tracking-wider'>
            <h3 className='font-bold text-2xl'>SubTotal:$<span className='text-[#df2020] font-bold text-2xl'>{subTotal}</span></h3>
        </div>
        <div className='pb-20 pt-6 flex gap-2'>
            <Link href='/food'>
            <button className='text-white font-bold bg-[#df2020] py-2 px-3 rounded'>Continue Shopping</button>
            </Link>
            <Link href='/checkout'>

            <button className='text-white font-bold bg-[#df2020] py-2 px-3 rounded'>Proceed to checkout</button>
            </Link>
        </div>
      </div>


    {/* </div> */}
        
    </>
  )
}

export default Cart
