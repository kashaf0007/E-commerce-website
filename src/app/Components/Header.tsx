import React from 'react'
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  return (
    <header className='bg-white shadow-sm border-b mx-auto flex flex-col w-1440px'>
      <div className='bg-black text-white py-2  text-sm flex justify-between items-center px-8 w-full'>
        <div className='text-center flex-1 '>
          Sign up and get 20% off to your first order.
          <a href='#' className='underline hover-text-slate-300' > Sign Up Now </a>
        </div>
        <div className='text-white text-xl '>
          <RxCross2 />
        </div>

      </div>
    </header>
  )
}

export default Header