import React, { useEffect, useState } from 'react'
import SelectAnswers from './SelectAnswers'
import useQuizApi from '../hooks/useQuizApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from '../redux/services/QuizSlice'
import { Button, Spin } from 'antd'


const getrandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const QuestionLayout = () => {

  const {
    incorrect_quiz,
    amount_of_question,
    score
} = useSelector((state) => {
  
  return state.quiz
  
})

// useEffect(()=>{
//   console.log(incorrect_quiz)
// },[incorrect_quiz])


const navigate = useNavigate()
const dispatch = useDispatch()

console.log(score);

console.log(incorrect_quiz)


// let apiUrl = `/api.php?amount=10`
let apiUrl = `/quiz`

const {response, loading} = useQuizApi({url: apiUrl})

const [questionIndex, setQuestionIndex] = useState(0)
const [options, setOptions] = useState([])
const [correct, setCorrect] = useState(0)
const [correctanswer, setCorrectanswer] = useState('')

console.log(response);


useEffect(()=>{
  // console.log(response)
    if (response?.data?.length) {
        const question = response.data[questionIndex]
        let answers = [...question.incorrect_answers]

        console.log(getrandomInt(3));

        answers.splice(getrandomInt(question.incorrect_answers.length), 0 , question.correct_answer);

        setOptions(answers)
 
    }else{
      console.log(response);
      
    }
}, [response, questionIndex])


// const handleClickAnswer = (e) => {
//   const question = response.data[questionIndex]
//   if (e.target.textContent == question.correct_answer) {
//       dispatch(handleScoreChange(score+1))
//   }
//   if (questionIndex + 1 < response.data.length) {
//       setQuestionIndex(questionIndex + 1)
      
//   }else {
//       navigate('/revise/quiz/score')
//   }
// }

const handleClickAnswer = (value) => {
  const question = response.data[questionIndex]
  if (value == question.correct_answer) {
      setCorrectanswer(question.correct_answer)
      setCorrect(true)
      dispatch(handleScoreChange(score+1))
  }else{
    setCorrect(false)
  }
  // if (questionIndex + 1 < response.data.length) {

    
  //     // setQuestionIndex(questionIndex + 1)
      
  // }else {
  //     navigate('/revise/quiz/score')
  // }
}

const next = () => {
    if (questionIndex + 1 < response.data.length) {

      
      setQuestionIndex(questionIndex + 1)
      
  }else {
      navigate('/vocab/revise/quiz/score')
  }
}

if (loading) {
  return (

      <div className="flex justify-center align-middle">
          <Spin size="large" />
      </div>
  )
}



  return (
    <>
     
      <div className=" w-[842px]  h-[100px] my-0 mx-auto ">
          <h3 className='text-right text-[20px] mb-2'> Question {questionIndex+1}/10</h3>

          <div className="border shadow-md py-[23px] px-[60px] gap-[10px] rounded-lg">

            <p className=' text-[32px] mb-1 font-semibold leading-[37.5px] text-[#2780D8]'>Question {questionIndex+1}</p>
            <small className='italic text-[14px] font-medium text-[#6A6A6A] ' >Select the option that best matches the given definition.</small>
            <p className='font-medium leading-[28.13px] text-[24px] text-[#333333] mt-5 mb-8'>{response?.data[questionIndex]?.question}</p>

            <SelectAnswers 
            handleClickAnswer={handleClickAnswer} 
            next = {next}
            quiz = {response.data[questionIndex]}
           
            options={options} correct={correct} correct_answer={response.data[questionIndex].correct_answer}/>
            <br></br>
         
          </div>
      </div>
    
    </>
  )
}

export default QuestionLayout
