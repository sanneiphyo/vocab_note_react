import React from 'react'

const Services = () => {
  return (
    <div className=' px-[100px] py-[70px]'>
        <h2 className=' text-[#2780D8] text-[32px] font-bold text-center mb-[40px]'>Our Services</h2>
        <div className="grid grid-cols-3">
            <div className="text-center ">
                <h1 className=' text-[#2780D8] text-[70px] font-extrabold'>01</h1>
                <h2 className=' font-bold text-[28px] mt-[20px]'>Flashcards & Quizzes</h2>
                <p className=' mt-[16px] leading-[28px]'>
                Reinforce your memory with interactive flashcards and engaging quizzes. Test your knowledge and track your progress to ensure you’re retaining what you’ve learned.
                </p>
            </div>

            <div className="text-center ">
                <h1 className=' text-[#2780D8] text-[70px] font-extrabold'>02</h1>
                <h2 className=' font-bold text-[28px] mt-[20px]'>Interactive Note-Taking</h2>
                <p className=' mt-[16px] leading-[28px]'>
                Quickly capture new words as you read or study, and organize them into customizable folders. Our intuitive note-taking system ensures that your vocabulary grows effortlessly and stays well-organized.
                </p>
            </div>

            <div className="text-center ">
                <h1 className=' text-[#2780D8] text-[70px] font-extrabold'>03</h1>
                <h2 className=' font-bold text-[28px] mt-[20px]'>Progress Tracking</h2>
                <p className=' mt-[16px] leading-[28px]'>
                Stay motivated by monitoring your learning journey. Our progress tracking feature allows you to see your achievements and stay on top of your goals.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services