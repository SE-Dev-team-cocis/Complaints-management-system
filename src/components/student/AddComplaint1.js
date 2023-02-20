import React from 'react'
import { Formik, Form } from 'formik'

import * as yup from 'yup'

import { useSelector } from "react-redux";

import Header from "../Header";
import Dashboard from './Dashboard';

import DisclaimerPopup from "./complaintForm/DisclaimerPopup";
import PreviewPopup from "./complaintForm/PreviewPopup";

import StudentDetails from './complaintForm/StudentDetails';
import CourseDetails from './complaintForm/CourseDetails';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function AddComplaint1() {

    const navigate = useNavigate()

    const notify = () => {
        toast.success('Complaint sucessfully submitted', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }

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
        <>
            <Header />
            <div className='content'>
                <Dashboard />

                <Formik
                    initialValues={initialValues}

                    onSubmit={(values) => {
                        notify();
                        complaintStep = 1
                        navigate("/student/complaints")
                    }}

                >
                    {
                        ({ handleChange, values }) => (

                            <Form className='p-5'>
                                <p>{complaintStep}</p>
                                <input type="hidden" name="" id="stepcount" value={complaintStep} />
                                <div className="progressbar">
                                    <div className="progress" id="progress">  </div>
                                    <div className="progress-step active" data-title="Student details"></div>
                                    <div className="progress-step" data-title="Complaint details"></div>
                                    <div className="progress-step" data-title="Preview"></div>

                                </div>

                                {complaintStep === 1
                                    ? <StudentDetails /> :
                                    complaintStep === 2
                                        ? <CourseDetails handleChange={handleChange} /> :
                                        complaintStep === 3
                                            ? (<CourseDetails handleChange={handleChange} /> && <DisclaimerPopup />) :
                                            complaintStep === 4 ? <PreviewPopup
                                                name={values.name} email={values.email} telephone={values.telephone} registrationNumber={values.regNo}
                                                studentNumber={values.studentNo} course={values.course} nature={values.nature} semester={values.semester}
                                                yearOfSitting={values.yearOfSitting} lecturer={values.courseLecturer} coursecode={values.courseCode} courseunit={values.courseUnit}
                                            /> : ""}
                            </Form>
                        )
                    }


                </Formik >
            </div>
            <ToastContainer />
        </>
    )
}

export default AddComplaint1