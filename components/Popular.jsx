import React, { useEffect, useState } from 'react'
import BreadImg from '../public/assets/bread.png'
import PizzaImg from '../public/assets/pizza.png'
import HamburgerImg from '../public/assets/hamburger.png'
import Image from 'next/image'
import Product from './Product'
import {products} from '../public/data/data'
import { useDispatch } from 'react-redux'

const Popular = () => {

  const dispatch = useDispatch()

  const addToCardhandler =(options)=>{
      dispatch({type:"addToCart",payload:options})
  }

  const [category,setCategory] = useState('All')
  const [allProduct,setAllProduct] = useState(products)

  useEffect(()=>{

    if(category === 'ALL'){
      setAllProduct(products)
    }

    if(category === 'BURGER'){
      const filteredProducts = products.filter(item => item.category === 'Burger')

      setAllProduct(filteredProducts)
    }

    if(category === 'PIZZA'){
      const filteredProducts = products.filter(item => item.category === 'Pizza')

      setAllProduct(filteredProducts)
    }

    if(category === 'BREAD'){
      const filteredProducts = products.filter(item => item.category === 'Bread')

      setAllProduct(filteredProducts)
    }

  },[category])

  return (
    <>
      <div className='bg-white flex flex-col justify-center items-center gap-5 pt-8 px-[2rem] md:px-[10rem]'>
        <h3 className='font-bold text-3xl text-[#212245] md:text-4xl pb-4'>Popular Food</h3>
        <div className='flex flex-wrap justify-center items-center gap-12 bg-[#df2020] w-full py-4 text-white rounded text-xl mb-6 md:px-12'>
            <button className={category === 'ALL' ? ' activeBtn' : ''} onClick={()=>setCategory('ALL')}>All</button>
            <button className={category === 'BURGER' ? ' activeBtn' : 'flex items-center gap-2'} onClick={()=>setCategory('BURGER')} ><Image alt='image' src={HamburgerImg} width={20}/>Burger</button>
            <button className={category === 'PIZZA' ? ' activeBtn' : 'flex items-center gap-2'} onClick={()=>setCategory('PIZZA')}><Image alt='image' src={PizzaImg} width={20}/>Pizza</button>
            <button className={category === 'BREAD' ? '  activeBtn' : 'flex items-center gap-2'} onClick={()=>setCategory('BREAD')}><Image alt='image' src={BreadImg} width={20}/>Bread</button>
        </div>
      </div>
      <div className='bg-white flex flex-col justify-center items-center md:flex-row md:flex-wrap md:gap-2 md:px-[10rem]'>
    {
      allProduct.map((item)=>(
        <Product key={item.id} imgSrc={item.image01} title={item.title} price={item.price} handler={addToCardhandler} id={item.id}/>
      ))
    }
  </div>
    </>
  )
}

export default Popular
