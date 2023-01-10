import React, { useState } from 'react'
import {products} from '../public/data/data'
import {BsSearch} from 'react-icons/bs'
import Product from './Product'
import { useDispatch } from 'react-redux'

const FoodMenu = () => {

  const dispatch = useDispatch()

  const addToCardhandler =(options)=>{
      dispatch({type:"addToCart",payload:options})
  }

    const [search,setSearch] = useState('')
    const [productData,setProductData] = useState(products)

  return (
    <>
      <div className='p-[2rem] flex flex-col items-center gap-4 md:items-start'>
        <div className='flex items-center justify-end px-10'>
            <input type="text" placeholder="I'm Looking For" value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='border w-50 py-1 outline-none px-4'/>
            <BsSearch size={20}  className='absolute mx-1'/>
        </div>
        <div  className='flex justify-center flex-col items-center  md:flex-row flex-wrap gap-2'>
            {
                productData.filter((item)=>{
                    if(search.value === '') return item;
                    if(item.title.toLowerCase().includes(search.toLowerCase()))
                    return item
                }).map((item)=>(
                  <Product key={item.id} imgSrc={item.image01} title={item.title} price={item.price} handler={addToCardhandler} id={item.id}/>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default FoodMenu
