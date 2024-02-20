import { createSlice } from "@reduxjs/toolkit";

export const answerSlice = createSlice({
  name: 'answers',
  initialState: 0,
  reducers: {
    correctAnswer: (state) => {
      return state = state + 1
    },
    erase: (state) => {
      return state = 0
    }
  }
})

export const { correctAnswer, erase } = answerSlice.actions

export default answerSlice.reducer