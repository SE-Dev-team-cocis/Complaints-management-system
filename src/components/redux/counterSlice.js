import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    complaintStep: 1,
    studentData:localStorage.getItem("student")?JSON.parse(localStorage.getItem("student")):{},
    loginStatus:null,
    complaints:localStorage.getItem("complaint")?JSON.parse(localStorage.getItem("complaint")):[],
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):"",
    draft:localStorage.getItem("draft")?JSON.parse(localStorage.getItem("draft")):{},
  },
  reducers: {
    setComplaint(state,action){
      //  state.studentData=action.payload;
      return{
        ...state,studentData:action.payload
      }
      // localStorage.setItem("student",JSON.stringify(action.payload))
    },
    setTokenAndLogin(state,action){
      localStorage.setItem("token",JSON.stringify(action.payload))
    },
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
export const { increment, decrement, edit,setComplaint } = counterSlice.actions

export default counterSlice.reducer