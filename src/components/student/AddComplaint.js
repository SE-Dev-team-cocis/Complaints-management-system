import Dashboard from "./Dashboard";

import { useState, createContext } from "react";
import Header from "../Header";
import DisclaimerPopup from "./DisclaimerPopup";
import StudentDetails from "./StudentDetails";
import CourseDetails from "./CourseDetails";
import PreviewPopup from "./PreviewPopup";

import './steps.js';
// import { createContext, useState } from 'react';

// export const AddComplaintContext = createContext();




const AddComplaint = () => {
    const [stepCount, setStepCount] = useState(1);


    const [name, setName] = useState("Loor Jacobson")
    const [registrationNumber, setRegistrationNumber] = useState("20/U/7806/PS")
    const [studentNumber, setStudentNumber] = useState("2000707806")
    const [course, setCourse] = useState("BSSE")
    const [telephone, setTelephone] = useState("778399583")
    const [email, setEmail] = useState("loorinho@gmail.com")
    const [nature, setNature] = useState("missing coursework")
    const [coursecode, setCourseCode] = useState("BSSE 5422")
    const [courseunit, setCourseUnit] = useState("Operating Systems")
    const [year, setYear] = useState("2020/2021")
    const [semester, setSemester] = useState("2")
    const [lecturer, setLecturer] = useState("Micheal Mabikke")
    // const [signature, setSugnature] = useState("")


    const [previewTrigger, setPreviewTrigger] = useState(false)
    const [disclaimerTrigger, setDisclaimerTrigger] = useState(false)


    function nextStep(){
        setStepCount((prev)=>prev+1)
        console.log(stepCount)
    }
    function previousStep(){
        setStepCount((prev)=>prev-1)
    }
    

    function handleSubmit(e){
        e.preventDefault();
        console.log("submitted ")
    }
    

    return ( 
        <>
            <Header />
            <div className='content'>
                <Dashboard />

                <div data-multi-step>
                <form className="complaint_form" onSubmit={handleSubmit} data-multi-step>
                       {/* Progress bar */}
                    <div className="progressbar">
                        <div className="progress" id="progress">  </div>
                            <div className="progress-step active" data-title="Student details"></div>
                            <div className="progress-step" data-title="Complaint details"></div>
                            <div className="progress-step" data-title="Preview"></div>
                    </div>
             

                    {/* Student details */}

                          {/* <StudentDetails stepCount={stepCount} setStepCount={setStepCount} />  */}
                        <div className="card form-step active" data-step>

                            <h4 className="text-center text-grey h4">STUDENT DETAILS</h4> 

                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" value="Loor Jacobson" readOnly />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label">Registration Number</label>
                                    <input type="text" className="form-control" value="20/U/7806/PS" readOnly />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Student Number</label>
                                    <input type="text" className="form-control" value="2000707806" readOnly />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Course</label>
                                    <input type="text" className="form-control" value="BSSE" readOnly />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label">Telephone Number</label>
                                    <input type="text" className="form-control" value="084772664" readOnly />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" value="loorinho@gmail.com" readOnly />
                                </div>
                            </div>

                            <div className="row">
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button type="button" onClick={()=>{
                                    setStepCount((prev) =>prev+1)
                                    console.log(stepCount)
                                    }
                                } className="btn btn-m btn-outline-success btn-next pe-5 ps-5" id="btn" data-next>Next</button>
                                
                            </div>
                            </div>
                        </div>

                    {/* End student details */}

                    {/* Course details */}
                        {/* <CourseDetails stepCount={stepCount} setStepCount={setStepCount} />  */}
                    <div className="card" data-step>
                            <h4 className="text-center text-grey h4">COURSE DETAILS</h4>
                            
                            <label className="form-label">Nature of complaint</label>
                            <div className="row">
                                <div className="form-check col-6">
                                    <input type="radio" className="form-check-input" name="nature" value="" />Missing Coursework
                                    
                                </div>
                                <div className="form-check col-6">
                                    <input type="radio" className="form-check-input" name="nature" value=""/>Missing Exam
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check col-6">
                                    <input type="radio" className="form-check-input" name="nature" value="" />Missing All
                                    
                                </div>
                                <div className="form-check col-6">
                                    <input type="radio" className="form-check-input" name="nature" value=""/>Remarking
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-check col-4">
                                    <input type="radio" className="form-check-input" name="nature" value="" />Others(specify)
                                    
                                </div>
                                <div className="col-8">
                                    <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <label className="form-label">Course Code</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-8">
                                    <label className="form-label">Course Unit</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label">Year of sitting</label>
                                    <select className="form-select" name="semester">
                                        <option value="2019/2020">2019/2020</option>
                                        <option value="2020/2021">2020/2021</option>
                                        <option value="2021/2022">2021/2022</option>
                                        <option value="2022/2023">2022/2023</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Semester</label>
                                    <select className="form-select" name="semester">
                                        <option value="1">1</option>
                                        <option value="2">1</option>
                                    </select>
                        
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Course lecturer</label>
                                    <select className="form-select">
                                        <option value=""></option>
                                        <option value="1">Joab Agaba</option>
                                        <option value="2">Kamulegeya Hajji</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                        <button className="btn btn-m btn-outline-success btn-prev pe-5 ps-5" data-previous>Previous</button>
                                        <button className="btn btn-m btn-save btn-success pe-5 ps-5" >Save</button>
                                </div>
                            </div>
                        
                    </div>
                    
                    {/* End course details */}


                    <div className="form-step">
                        <div className="">
                            <DisclaimerPopup /> 
                        </div>
                    </div>
                    {/* <div className="form-step preview active">
                        <PreviewPopup name={name} email={email} telephone={telephone} registrationNumber={registrationNumber}
                            studentNumber={studentNumber} course={course}  nature={nature}  semester={semester} 
                            year={year}  lecturer={lecturer}  coursecode={coursecode} courseunit={courseunit}
                        />
                    </div> */}
               
                </form> 
                </div>      
        </div>
 </>
    );
}
 
export default AddComplaint;