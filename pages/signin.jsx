import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Link from 'next/link'

const signin = () => {
  return (
    <>
      <CommonBanner title='Sign Up'/>
      <div className='py-[3rem] flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-center items-center bg-[#fde4e4] rounded px-14 py-4'>
          <input type="text" placeholder='Full name' className='bg-transparent py-4 outline-none border-b pb-2 mb-4     border-[#4d4949]'/>
          <input type="email" placeholder='Email' className='bg-transparent  outline-none border-b pb-2 border-[#4d4949]'/>
          <input type="password" placeholder='Password' className='bg-transparent py-4 outline-none border-b pb-2 mb-4     border-[#4d4949]'/>
         <button className=' text-white font-bold bg-[#df2020] py-2 px-3 rounded'>Sign Up</button>
        </div>
        <div className='pt-4'>
        <Link href='/login'>
        <p>Already have an account? 
        <span> Login</span></p>
        </Link>
        </div>
      </div>
    </>
  )
}

export default signin
