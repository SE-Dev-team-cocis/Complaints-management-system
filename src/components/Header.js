import React from 'react'


function Header() {
  let username = 'Loorinho';
  return (
    // <div>This is our navigation bar</div>
    <header className='bg-light w-100 h-15 p-3 d-flex justify-content-between align-items-center'>
      <div className='site_logo d-flex justify-content-around align-items-center' >
        <img src="muklogo.jpg" alt="logo" className='me-5 muk_logo'/>
        <p className=''>CMS</p>
      </div>

      <div className=''>
        Hi, <span className='me-4'> {username}</span>
        <button className='btn btn-outline-success'>Logout</button>
      </div>
    </header>
   
  )
}

export default Header