import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-img.png'

const Home = () => {
  return (
    <>
<div className="flex justify-between py-[20px] px-[100px]">
    <div className="">
        <h2 className=' text-[32px] text-[#1777CE] font-serif font-extrabold'>Voca Note</h2>
    </div>
    <div className="flex items-center justify-center">
       <Button className='border-0 shadow-0 py-[20px] px-[24px] text-[16px] font-semibold'><Link to="/login">Login</Link></Button>
       <Button type='primary' className='border-0 py-[20px] px-[24px] text-[16px] font-semibold'><Link to="/register">Sign Up</Link></Button>
    </div>
    
</div>
<section className="bg-gray-50 ">
    {/* <img src={heroImg} alt="" className='' /> */}
  <div className="max-w-screen-xl px-4 pb-32 mx-auto lg:flex lg:h-screen lg:items-center">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      "Unlock the Power of Words: 
        <strong className="mt-5 font-extrabold text-blue-700 sm:block"> Master Vocabulary with Ease and Confidence" </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Capture, organize, and reinforce new words effortlessly with our interactive tools. Turn your learning into lasting knowledge through quizzes, flashcards, and personalized revision.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link 
          className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          to="/login"
        >
          Get Started
        </Link>

       
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Home