import { Button, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import QuestionLayout from '../../components/QuestionLayout'
import SearchInput from '../../components/SearchInput'
import useQuizApi from '../../hooks/useQuizApi'
import { useDispatch, useSelector } from 'react-redux'
import { addToRevisedQuiz } from '../../redux/services/QuizSlice'
import noData from '../../assets/noData.jpg'
import Flashcard from '../NewWord/FlashCard'
import RevisedCard from './RevisedCard'

const RevisedWord = () => {

  const {
  revised_quiz
} = useSelector((state) => {
  
  return state.quiz
  
})

  let apiUrl = `/vocabularies?is_revised=true`

const {response, loading} = useQuizApi({url: apiUrl})

const [revisedList, setRevisedList] = useState([])

const url = window.location.pathname;

console.log(url);


const dispatch = useDispatch()

console.log(response);


    

useEffect(()=>{
  if (response?.data && JSON.stringify(response.data) !== JSON.stringify(revisedList)) {
    console.log(response.data)
      // dispatch(addToRevisedQuiz(response.data))
   setRevisedList(response.data)
}

}, [response, revisedList])


if (loading) {
  return (

      <div className="flex items-center justify-center h-[500px]">
          <Spin size="large" />
      </div>
  )
}



console.log(revisedList)

  return (
    <div className=''>
      {/* <SearchInput /> */}

      {
        revisedList.length > 0
        ? <div>
          <RevisedCard  url={url}/>
          
        </div>:
         <div className=' flex justify-center flex-col items-center mt-[76px]'>
          <div className=" w-[310px] h-[258px] mx-auto">
            <img src={noData} alt="" />
          </div>
          

          <p className='text-center w-[502px]'>
          You don’t have any words added yet. Start building your vocabulary by adding your first word! <br />
          <br />
          
          </p>
         </div>
        
      }

      {
        revisedList.length < 10 ?
        <p className='font-semibold text-center text-blue-700'> Need At least 10  words to answer quiz !! </p> 
        : ''
      
      }
       
      <div className="flex justify-center mt-5">
       <NavLink className="" to='/vocab/revise/quiz'> 
       <Button 
       disabled={revisedList.length >= 10? false: true}>Start Quiz</Button></NavLink>
      </div>

       {/* <QuestionLayout /> */}
    </div>
  )
}

export default RevisedWord