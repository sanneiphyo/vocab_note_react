import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Score = () => {


  const {
    incorrect_quiz,
    amount_of_question,
    score
} = useSelector((state) => {
  
  return state.quiz
  
})

console.log(incorrect_quiz);


  return (
    <div className=' w-[760px] border border-[#A6A6A6] m-auto bg-white shadow-md rounded-2xl p-[24px]'>
        <div className="text-center ">
          <h4 className='text-[20px] font-bold '>Total Score</h4>
          <h1 className=' text-[#1777CE] stroke-[3px] text-[60px]  stroke-[#1777CE]'>8/10</h1>
        </div>

        <div className="mt-[40px] flex flex-col gap-[24px]  ">
            <h3 className=' text-[#E30000] text-[20px] font-bold'>Incorrect Answers (2)</h3>

            {
              incorrect_quiz.map((quiz,index) =>  <div key={index} className="">
              <h2 className=' text-[20px] font-bold text-[#333333] mb-[8px] '>Question: {quiz.question}</h2>
              <div className="flex gap-[104px] items-center border-b border-b-[#C5C5C5] pb-[12px] ">
                <p className='text-[#E30000] text-[16px] leading-[24px]'>Your Answer: Happy</p>
                <p className='text-[#00A606] text-[16px] leading-[24px]'>Correct Answer: {quiz.correct_answer}</p>
               
              </div>          
              
            </div> )
            }
            
            
        </div>

        <div className=" mt-[48px] flex justify-center">
          <Link to='' className="w-[250px] py-[16px] px-[20px] font-bold text-[20px]">Retake Quiz</Link>
          <Link to='' className=" py-[16px] px-[20px] font-bold text-[20px] bg-[#1777CE] rounded-[4px] text-white hover:text-white ">Review Incorrect Words</Link>
        </div>
        <div className="flex justify-center">
            <p className='mt-[24px] w-[300px] text-center text-[16px] text-[#333]'>Keep going! Every mistake is a step closer to mastering your vocabulary!</p>
        </div>
    </div>
  )
}

export default Score
