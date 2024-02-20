import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../reducers/themeSlice'
import subjectReducer from '../reducers/subjectSlice'
import completedSlice from '../reducers/completedSlice'
import answersSlice from '../reducers/answersSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    subject: subjectReducer,
    completed: completedSlice,
    answers: answersSlice,
  },
})