import { createSlice } from "@reduxjs/toolkit";

export const subjectSlice = createSlice({
  name: 'subject',
  initialState: null,
  reducers: {
    selectSubject: (state, action) => {
      return state = action.payload
    }
  } 
})

export const { selectSubject } = subjectSlice.actions

export default subjectSlice.reducer