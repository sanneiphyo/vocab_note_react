import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
    question_category: '',
    question_difficulty: '',
    question_type: '',
    amount_of_question: 10,
   score : 0,
   incorrect_quiz : []
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
       }
    }
})

export const {handleScoreChange, handleIncorrectQuiz} = quizSlice.actions


export default quizSlice.reducer