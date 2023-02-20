import Dashboard from "./Dashboard";
// import './student';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./steps"

import Header from "../Header";
import DisclaimerPopup from "./DisclaimerPopup";
import StudentDetails from "./StudentDetails";
import CourseDetails from "./CourseDetails";
import PreviewPopup from "./PreviewPopup";


import RefactoredAddComplaint from './RefactoredAddComplaint'

import './steps.js';

const AddComplaint = () => {
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




    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted ")
    }

    // Getting the counter value from the reducer store
    const { complaintStep } = useSelector((state) => state.counter);

    //disbling the scroll functionality when the disclaimer popup is triggered
    complaintStep === 3 || complaintStep === 4 ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";


    return (
        <>
            <Header />
            <div className='content'>
                <Dashboard />

                <RefactoredAddComplaint />


                {/* <form data-multi-step className="complaint_form" onSubmit={handleSubmit} >

                    <p>{complaintStep}</p>
                    <input type="hidden" name="" id="stepcount" value={complaintStep} />
                    <div className="progressbar">
                        <div className="progress" id="progress">  </div>
                        <div className="progress-step active" data-title="Student details"></div>
                        <div className="progress-step" data-title="Complaint details"></div>
                        <div className="progress-step" data-title="Preview"></div>

                    </div>

                    {
                        complaintStep == 1
                            ? <StudentDetails />
                            : complaintStep == 2
                                ? <CourseDetails />
                                : complaintStep == 3
                                    ? (<CourseDetails /> && <DisclaimerPopup />)
                                    : complaintStep == 4 ? (<PreviewPopup name={name} email={email} telephone={telephone} registrationNumber={registrationNumber}
                                        studentNumber={studentNumber} course={course} nature={nature} semester={semester}
                                        year={year} lecturer={lecturer} coursecode={coursecode} courseunit={courseunit}
                                    />) : ""
                    } */}




                {/* <div className="form-step"> */}
                {/* <div className="">
                        {disclaimerTrigger && <DisclaimerPopup />}
                    </div> */}
                {/* </div> */}
                {/* <div className="form-step preview">
                        <PreviewPopup name={name} email={email} telephone={telephone} registrationNumber={registrationNumber}
                            studentNumber={studentNumber} course={course} nature={nature} semester={semester}
                            year={year} lecturer={lecturer} coursecode={coursecode} courseunit={courseunit}
                        />
                    </div> */}
                {/* </form> */}

            </div>

        </>



    );
}

export default AddComplaint;