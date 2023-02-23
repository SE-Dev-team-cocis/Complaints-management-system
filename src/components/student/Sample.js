import React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate, useParams } from "react-router-dom";
const Sample = () => {
    const navigate=useNavigate()
    const {token}=useParams()
    axios.post('http://localhost:4000/student/firstlogin',{
        token
    }).then((res)=>{
        toast.success(res.data.login)
        navigate("/student/")
    }).catch((err)=>{
        toast.error(err)
    })
  return (
    <div>Redirecting.........</div>
  )
}

export default Sample