import React from 'react'
import Header from '../Header'
import './student.css'
import Dashboard from './Dashboard'
import homeImage from './student_home_img.jpg'

function StudentHome() {
  return (
    <>
    <Header />
    <div className='content'>
      <Dashboard />

      <div>
        <p className='text-center fs-4 p-3' style={{ borderBottom:"1px solid black" }}>Welcome to the Students' Missing marks portal</p>
        <div className="student_home_area">
          <p className='text'>
            This portal is used by a student to claim for missing marks or make any other appeals on 
            your marks in all course units.
            This previllege is governed by the examination and marking policy<br />
            You will be able to:
            <ul>
              <li>Track all your submitted complaints in one place</li>
              <li>Receive an email notifying you about status changes of your complaint</li>
              <li>The changes will reflect on your ACMIS student' portal</li>
            </ul>
          </p>
          <div>
            <img src={homeImage} alt="landingImage" srcset="" style={{ height:"100%", width:"100%" }} />
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default StudentHome