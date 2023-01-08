import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    complaintStep: 1
  },
  reducers: {
    increment: (state) => {
      state.complaintStep += 1
    },
    decrement: (state) => {
      state.complaintStep -= 1
    },
    edit: (state) => {
      state.complaintStep = 2
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, edit } = counterSlice.actions

export default counterSlice.reducer