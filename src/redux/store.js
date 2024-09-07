import { configureStore } from '@reduxjs/toolkit'
import authReducer from './services/AuthSlice'
import quizReducer from './services/QuizSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quiz: quizReducer
  },
})