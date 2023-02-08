import React from 'react'
import { Link } from 'react-router-dom';
import logo from './muk.png'
import {useSelector} from 'react-redux'

function Header() {

  const {studentData}=useSelector((state) => state.counter)

  
  // let username = 'Loorinho';
  let {studentNo}= studentData
  let imageurl = `https://myportal.mak.ac.ug/photos/student-photos/${studentNo}.jpeg`
  return (
    // <div>This is our navigation bar</div>
    <header className='header shadow-sm bg-white w-100 p-3 d-flex justify-content-between align-items-center'>
      <div className='site_logo ' >
        <img src={logo} alt="logo" className='me-2 muk_logo'/>
        <Link to ="/student" className='link me-5'><span className='text-success fs-4'>Complaints Portal</span></Link>
      </div>

      <div className='d-flex justify-content-around align-items-center'>
        {/* Hi, <span className='me-4'> {studentData.name}</span> */}
        <Link to ="/student" className='link me-5'>Home</Link>
        <Link to ="/student/settings" className='settings me-5'>Settings</Link>
        <div>
          <span className='me-3'>Hi,{studentData.firstName} <img src={imageurl} alt="" srcset="" style={{width:"25px",height:"25px",borderRadius:"50%"}}/></span>
          <button className='btn btn-outline-success'>Logout</button>
        </div>
        
      </div>
    </header>
   
  )
}

export default Header