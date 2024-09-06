import React from 'react'
import { useSelector } from 'react-redux'

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
    <div>
      {
        incorrect_quiz.map((quiz, index) =>(
          <div className="">
            <h2>Question {index + 1}</h2>
            <p>Question - {quiz.question}</p>
            <p>Correct answer - {quiz.correct_answer}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Score
