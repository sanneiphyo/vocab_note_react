import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
    question_category: '',
    question_difficulty: '',
    question_type: '',
    amount_of_question: 10,
   score : 0,
   incorrect_quiz : [],
   revised_quiz: []
}



export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
       handleScoreChange: (state, action) =>{
            state.score = action.payload
       },
       handleIncorrectQuiz : (state, action) => {
            console.log(action.payload);
            state.incorrect_quiz.push(action.payload)
       },
       clearIncorrects: (state, action) =>{
          state.incorrect_quiz.splice(0,state.incorrect_quiz.length)
          console.log(state.incorrect_quiz.length);
          
     },

     addToRevisedQuiz: (state, action) =>{
          console.log(action.payload);
          
          state.revised_quiz = action.payload
     }
    }
})

export const {handleScoreChange, handleIncorrectQuiz, clearIncorrects, addToRevisedQuiz} = quizSlice.actions


export default quizSlice.reducer