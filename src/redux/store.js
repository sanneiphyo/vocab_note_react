import { configureStore } from '@reduxjs/toolkit'
import authReducer from './services/AuthSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
})