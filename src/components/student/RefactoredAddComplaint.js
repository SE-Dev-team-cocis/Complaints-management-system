import React from 'react'
import { Formik, Form } from 'formik'

import * as yup from 'yup'

import { useSelector } from "react-redux";

import DisclaimerPopup from "./complaintForm/DisclaimerPopup";
import PreviewPopup from "./complaintForm/PreviewPopup";

import StudentDetails from './complaintForm/StudentDetails';
import CourseDetails from './complaintForm/CourseDetails';


function RefactoredAddComplaint() {

    let initialValues = {
        name: 'Loor Jacobson',
        telephone: 780588336,
        email: 'romeojacobson@gmail.com',
        regNo: '20/U/7806/PS',
        studentNo: 2000707806,
        course: 'BSSE',
        courseUnit: '',
        courseCode: '',
        semester: '',
        courseLecturer: '',
        yearOfSitting: '',
        text: '',
        nature: ''

    }

    // Getting the counter value from the reducer store
    const { complaintStep } = useSelector((state) => state.counter);

    //disbling the scroll functionality when the disclaimer popup is triggered
    complaintStep === 3 || complaintStep === 4 ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";


    const validate = yup.object({
        name: yup.string().required(),
        regNo: yup.string().required(),
        studentNo: yup.number().required().positive(),
        course: yup.string().required(),
        telephone: yup.number().required(),
        email: yup.string().email().required(),
        nature: yup.string().required()



        // regNo: yup.string().required(),
        // year: yup.string().required("Your current yea of study is required"),
        // signature: yup.blob().oneOf([yup.ref("newPassword"), null], "Passwords don't match").required("onfirm password is required")
    })


    return (
        <Formik
            initialValues={initialValues}

            onSubmit={(values) => {
                console.log(values)
            }}

        >
            {
                ({ handleChange }) => (

                    <Form className='p-5'>
                        <p>{complaintStep}</p>
                        <input type="hidden" name="" id="stepcount" value={complaintStep} />
                        <div className="progressbar">
                            <div className="progress" id="progress">  </div>
                            <div className="progress-step active" data-title="Student details"></div>
                            <div className="progress-step" data-title="Complaint details"></div>
                            <div className="progress-step" data-title="Preview"></div>

                        </div>

                        {/* <StudentDetails /> */}

                        {/* <CourseDetails handleChange={handleChange} /> */}

                        {
                            complaintStep === 1 ? <StudentDetails /> : <CourseDetails />
                            // complaintStep === 1
                            //     ? <StudentDetails />
                            //     : complaintStep == 2
                            //         ? <CourseDetails />
                            //         : complaintStep == 3
                            //             ? (<CourseDetails /> && <DisclaimerPopup />)
                            //             : complaintStep == 4 ? (<PreviewPopup name={name} email={email} telephone={telephone} registrationNumber={registrationNumber}
                            //                 studentNumber={studentNumber} course={course} nature={nature} semester={semester}
                            //                 year={year} lecturer={lecturer} coursecode={coursecode} courseunit={courseunit}
                            //             />) : ""
                        }


                    </Form>
                )
                // {

                //     complaintStep == 1 ? <StudentDetails /> : <CourseDetails />
                // }


            }


        </Formik >
    )
}

export default RefactoredAddComplaint