import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux'
import Image from 'next/image'
import {AiFillDelete} from 'react-icons/ai'

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
        
        <div className='w-full pl-[8.5rem] pr-1 md:pl-0 bg-white overflow-x-scroll py-10 md:overflow-hidden flex justify-center items-center'>
          {
            cartItems.length === 0 ? <h1 className='text-4xl bg-white font-bold flex justify-center items-center py-10 text-[#df2020]' >No Items Yet</h1>:
            <table className='text-center table-auto bg-red-100 w-screen'>
           <thead>
            <tr >
              <th className='px-1 md:px-0'>Image</th>
              <th className='px-1 md:px-0'>Product</th>
              <th className='px-1 md:px-0'>Increament</th>
              <th className='px-1 md:px-0'>Quantity</th>
              <th className='px-1 md:px-0'>Decrement</th>
              <th className='px-1 md:px-0'>Delete</th>
            </tr>
            </thead>
            {/* <Tr/> */}
          <tbody>
          {
            cartItems.map((i)=>(
              <Tr imgSrc={i.imgSrc} qty={i.quantity} title={i.title} id={i.id} key={i.id} price={i.price} decrement={decrement} increment={increment} deleteHandler={deleteHandler}/>
            ))
          }
            </tbody>
          </table>
          }
          </div>



        {/* {
          cartItems.length > 0 ? (
            cartItems.map((i)=>(
              <CartItem imgSrc={i.imgSrc} qty={i.quantity} title={i.title} id={i.id} key={i.id} price={i.price} decrement={decrement} increment={increment} deleteHandler={deleteHandler}/> 
            ))
          ):
          <h1 className='text-4xl bg-white font-bold flex justify-center items-center py-10 text-[#df2020]'>No Items Yet</h1>
        } */}


        <div className='bg-white px-[2rem]'>
        <div className='pb-2 tracking-wider'>
            <h3 className='font-bold text-2xl'>SubTotal:$<span className='text-[#df2020] font-bold text-2xl'>{subTotal}</span></h3>
        </div>
        <div className='pb-20 pt-6 flex gap-2'>
            <Link href='/food'>
            <button className='text-white font-bold bg-[#df2020] py-1 md:py-2 px-3 rounded'>Continue Shopping</button>
            </Link>
            <Link href='/checkout'>

            <button className='text-white font-bold bg-[#df2020] py-1 md:py-2 px-3 rounded'>Proceed to checkout</button>
            </Link>
        </div>
      </div>

        
    </>
  )
}

const Tr = ({imgSrc,qty,id,decrement,increment,deleteHandler,title}) =>{
  
  return<tr className='bg-yellow-50'>
    <td className='flex py-2 justify-center'><Image src={imgSrc}  alt='image' className='rounded w-12'/></td>
    <td>{title}</td>
    <td><button className='bg-[#fde4e4]  rounded py-1 px-2' onClick={()=>increment(id)}>+</button></td>
    <td>{qty}px</td>
    <td><button className='bg-[#fde4e4]  rounded py-1 px-2' onClick={()=>decrement(id)}>-</button></td>
    <td className='cursor-pointer py-6 flex justify-center'><AiFillDelete size={20} onClick={()=>deleteHandler(id)}/></td>
  </tr>
}

export default Cart
