import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    let studentName = "Loor Jacobson"
    let studentNumber = 2000703505
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
                <Link to="/student/complaints/add">File a complaint</Link>
                <Link to="/student/complaints">All complaints history</Link>
            </div>
        </div>

    )
}
