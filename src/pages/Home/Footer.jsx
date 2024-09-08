import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Images/Logo.png'

const Footer = () => {
  return (
    <div className="flex justify-between py-[20px] px-[100px]">
    <div className=" w-[40%]">
         <img src={logo} alt="" className='w-[45px]'/>
        {/* <h2 className=' text-[32px] text-[#1777CE] font-serif font-extrabold'>Voca Note</h2> */}
    </div>
    <div className="flex items-center justify-between w-[30%]">
    <a href='#home' >Home</a>
       <a  href='#about'>About</a>
       <a  href='#services'>Services</a>
       <a href='#contact'>Contact</a>
    </div>
    
</div>
  )
}

export default Footer