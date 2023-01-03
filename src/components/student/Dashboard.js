import React from 'react'
import { NavLink } from 'react-router-dom'


import studentImage from './student.jpg'

export default function Dashboard() {
    let studentName = "Loor Jacobson"
    let studentNumber = 2000707806
    let imageurl = `https://myportal.mak.ac.ug/photos/student-photos/${studentNumber}.jpeg`
    
  return (

        <div className='side-menu bg-white'>
            <div className='profile text-center mt-2'>
                {/* <img src={studentImage} alt='student_image' className='student_image' /> */}
                <img src={imageurl} alt='student_image' className='student_image' />
                <p className='student_name'>{studentName}</p>
                <p className='student_number mt-1'>{studentNumber}</p>
            </div>
            <div className='menu'>
                {/* <Link to ="/student" onClick={activeListener}>Home</Link> */}
                {/* className='dash_link' */}
                <NavLink to ="/student/complaints/add" >File a complaint</NavLink>
                <NavLink to ="/student/complaints">All complaints history</NavLink>
            </div>
        </div>
 
  )
}
