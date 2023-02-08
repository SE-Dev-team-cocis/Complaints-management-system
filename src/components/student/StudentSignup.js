import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../muk.png';

import { ErrorMessage, useField } from 'formik'
import { TextField } from "./TextField";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import * as yup from 'yup'
import axios from "axios";

const StudentSignup = () => {

    const navigate = useNavigate();
    const [message, setMessage] = useState(false);

    const [program, setProgram] = useState("");
    const [signature, setSignature] = useState(null);
    const [year, setYear] = useState(null);

    function handleStudentRegisteration(values) {

        let student = {
            firstName:values.firstName,
            lastName:values.lastName,
            regNo:values.regNo,
            studentNo:values.studentNo,
            email:values.email,
            tel:values.telephone,
            program: program,
            year:year,
            signature:signature
        }

        //Make post request to the backend
        // console.log(student)
        //URL to student registration route
        let url = "http://localhost:8000/student/register"; //Change this to the URL you are going to use to register a student
        fetch(url, {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(()=>{
            setMessage(true)
            // values = initialValues
            navigate("/student/login")
        })


   
    }

    const validate = yup.object({
        firstName: yup.string().required("Your first name is required"),
        lastName: yup.string().required("Your last name is required"),
        email: yup.string().email("Enter a valid email address").required("Your email is required"),
        studentNo: yup.number().required("Student number is required").positive("Student number cannot be a negative"),
        regNo: yup.string().required("Registration number is required"),
        course: yup.string("Your program of study is required").required("Your program of study is required "),
        year: yup.string().required("Your current yea of study is required"),
        telephone: yup.number().required("Your telephone number is required").max(15),
        // signature: yup.blob().oneOf([yup.ref("newPassword"), null], "Passwords don't match").required("onfirm password is required")
    })


    return (

        <>
            <header className='bg-white w-100 h-10 p-3 d-flex justify-content-center align-items-center'>
                <div className='site_logo d-flex justify-content-around align-items-center' >
                    <img src={Logo} alt="logo" className='me-5 muk_logo' />
                    <span className='fs-4 text-success'>Complaints Portal</span>
                </div>
            </header>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    regNo:'',
                    studentNo: '',
                    year: '',
                    telephone: '',
                    signature: '',
                    course: ''
                }}
                validationSchema={validate}
            >

                {
                    formik => (
                        <div className="d-flex justify-content-center align-items-center signup bg-light">

                            <Form onSubmit={(e)=>{
                                e.preventDefault();
                                window.alert(JSON.stringify(formik.values))
                                handleStudentRegisteration(formik.values)}}>
                               
                            {message&&(<div className="reg_success text-center text-success fs-4 f4-3">Check your email for login credentials</div>)}
                            <h4 className="h4 text-center">Registration form</h4>
                                <div className="row">
                                    <div className="col-6">
                                        <TextField label="First name" name="firstName" type="text" />
                                    </div>

                                    <div className="col-6">
                                        <TextField label="Last name" name="lastName" type="text" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <TextField label="Registration number" name="regNo" type="text" />
                                    </div>
                                    <div className="col-6">
                                        <TextField label="Student number" name="studentNo" type="number" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <label className="form-label mt-2 mb-0 text-light">Program</label>
                                        <select name="program" className="form-select" onChange={e => setProgram(e.target.value)}>
                                            <option value=""></option>
                                            <option value="BSCS">Bachelor of Science in Computer Science</option>
                                            <option value="BSSE">Bachelor of Science in Software Engineering</option>
                                            <option value="BIST">Bachelor of Science in Information Systems and Technology</option>
                                            <option value="BLIS">Bachelor of Science in Library and Information Systems</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <TextField label="Email" name="email" type="email" placeholder="Enter your university email address" />

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        {/* <TextField label="Year" name="year" type="text"  />  */}
                                        <label className="form-label mt-2 mb-0 text-light ">Year</label>
                                        <select name="year" className="form-select" onChange={e => setYear(e.target.value)}>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <TextField label="Telephone" name="telephone" type="text" />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {/* <TextField label="Signature" name="signature" type="file" /> */}
                                        <label htmlFor="" className="form-label mt-2 mb-0 text-light"></label>
                                        <input type="file" name="signature" className="form-control" onChange={(e)=>setSignature(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className="btn btn-outline-success" type="submit" >Register</button>
                                    </div>
                                </div>

                                <p className="text-dark">Already have an account? <Link to="/student/login">Login</Link></p>
                            </Form>

                        </div>
                    )
                }

            </Formik>

        </>

    );
}

export default StudentSignup;