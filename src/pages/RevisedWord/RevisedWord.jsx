import { Button } from 'antd'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import QuestionLayout from '../../components/QuestionLayout'
import SearchInput from '../../components/SearchInput'

const RevisedWord = () => {
  return (
    <div className=' lg:px-[177px]'>
      <SearchInput />
       
      <div className="flex justify-center mt-5">
       <NavLink className="" to='/revise/quiz'> <Button>Start Quiz</Button></NavLink>
      </div>

       {/* <QuestionLayout /> */}
    </div>
  )
}

export default RevisedWord