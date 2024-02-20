import { createSlice } from "@reduxjs/toolkit"

export const completedSlice = createSlice({
  name: 'completedQuiz',
  initialState: false,
  reducers: {
    handleCompleted: (state) => {
      return !state
    }
  }
})

export const { handleCompleted } = completedSlice.actions

export default completedSlice.reducer