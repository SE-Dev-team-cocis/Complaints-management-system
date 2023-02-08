import React from 'react'
import { useDispatch } from 'react-redux'
import { edit } from '../redux/counterSlice'

function PreviewPopup({name, course, studentNumber, registrationNumber, email, semester, year, lecturer, courseunit, coursecode, nature, telephone}) {
    const dispatch = useDispatch()
    return (
    <div className='preview_popup'>
        <div className="preview_popup_inner">
            <div className="student_details">
                <p className='section'>STUDENT DETAILS</p>
                <div className="row">
                    <div className="col-6">
                        Name: {name}
                    </div>
                    <div className="col-6">
                        Program: {course}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Student number: {studentNumber}
                    </div>
                    <div className="col-6">
                        Registration number: {registrationNumber}
                    </div>
                </div>
            </div>

            <div className="contact_details ">
                <p className='section'>CONTACT DETAILS</p>
                <div className="row">
                    <div className="col-12">
                        Email: {email}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        Telephone: {telephone}
                    </div>
                </div>
            </div>

            <div className="complaint_details">
                <p className='section'>COMPLAINT DETAILS</p>
                <div className="row">
                    <div className="col-4">
                        Course code: {coursecode}
                    </div>
                    <div className="col-4">
                        Course unit: {courseunit}
                    </div>
                    <div className="col-4">
                        Lecturer: {lecturer}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Year of sitting: {year}
                    </div>
                    
                    <div className="col-6">
                        Selester: {semester}
                    </div>
                    <div className="col-6">
                        Nature: {nature}
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-around align-items-center">

                <button onClick={()=>dispatch(edit())} className='btn btn-outline-success edit'>Edit</button>
                <button className='btn btn-success submit'>Submit</button>
            </div>

        </div>
    </div>
  
  )
}

export default PreviewPopup