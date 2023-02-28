import React from 'react'
import { Formik, Form } from 'formik'

import * as yup from 'yup'

import { useSelector, useDispatch } from "react-redux";
// import { edit, resetCounter } from '../redux/counterSlice'

import Header from "../Header";
import Dashboard from './Dashboard';

import DisclaimerPopup from "./complaintForm/DisclaimerPopup";
import PreviewPopup from "./complaintForm/PreviewPopup";

import CourseDetails from './complaintForm/CourseDetails';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { resetCounter } from '../../redux/counterSlice';
import Step from './complaintForm/Step';


function AddComplaint1() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

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
    let { complaintStep } = useSelector((state) => state.counter);

    //disbling the scroll functionality when the disclaimer popup is triggered
    complaintStep === 3 || complaintStep === 4 ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";


    const validate = yup.object({
        name: yup.string().required(),
        regNo: yup.string().required(),
        studentNo: yup.number().required().positive(),
        course: yup.string().required(),
        telephone: yup.number().required(),
        email: yup.string().email().required(),
        nature: yup.string().required().label("Nature"),
        courseUnit: yup.string().required().label("Course unit"),
        courseCode: yup.string().required().label("Course code"),
        semester: yup.string().required().label("Semester"),
        courseLecturer: yup.string().required().label("Course lecturer"),
        yearOfSitting: yup.string().required().label("Year of sitting"),
        text: yup.string(),

        // regNo: yup.string().required(),
        // year: yup.string().required("Your current yea of study is required"),
        // signature: yup.blob().oneOf([yup.ref("newPassword"), null], "Passwords don't match").required("onfirm password is required")
    })

    // complaintStep = 3
    return (
        <>
            <Header />
            <div className='content'>
                <Dashboard />

                <Formik
                    initialValues={initialValues}

                    onSubmit={(values) => {
                        dispatch(resetCounter())
                        // notify();
                        navigate("/student/complaints")
                    }}

                >
                    {
                        ({ handleChange, values, touched, errors }) => (
                            <Form className='p-5'>
                                <Step handleChange={handleChange} name={values.name} email={values.email} telephone={values.telephone} registrationNumber={values.regNo}
                                    studentNumber={values.studentNo} course={values.course} nature={values.nature} semester={values.semester}
                                    yearOfSitting={values.yearOfSitting} lecturer={values.courseLecturer} coursecode={values.courseCode} courseunit={values.courseUnit} />
                                {
                                    // complaintStep === 3 ? (<CourseDetails handleChange={handleChange} /> && <DisclaimerPopup />) : ""
                                    complaintStep === 3 ? (<DisclaimerPopup />) : ""
                                }
                                {
                                    complaintStep === 4 ? (<CourseDetails handleChange={handleChange} /> && <PreviewPopup
                                        name={values.name} email={values.email} telephone={values.telephone} registrationNumber={values.regNo}
                                        studentNumber={values.studentNo} course={values.course} nature={values.nature} semester={values.semester}
                                        yearOfSitting={values.yearOfSitting} lecturer={values.courseLecturer} coursecode={values.courseCode} courseunit={values.courseUnit}
                                    />) : ""

                                }
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