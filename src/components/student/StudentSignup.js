import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../muk.png';

import { ErrorMessage, useField } from 'formik'
import { TextField } from "./TextField";
import { Formik, Form } from "formik";

import * as yup from 'yup'

const StudentSignup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [studentNumber, setStudentNumber] = useState(0);
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState(0);
    const [program, setProgram] = useState("");
    const [signature, setSignature] = useState(null);
    const [year, setYear] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        let student = {
            firstName: firstName,
            lastName: lastName,
            regNo: registrationNumber,
            studentNo: studentNumber,
            email: email,
            tel: telephone,
            program: program,
            year: year,
            signature: signature
        }

    }

    const validate = yup.object({
        firstName: yup.string().required("Your first name is required"),
        lastName: yup.string().required("Your last name is required"),
        email: yup.string().email("Enter a valid email address").required("Your email is required"),
        studentNo: yup.number().required("Student number is required").positive("Student number cannot be a negative"),
        regNo: yup.string().required("Registration number is required"),
        course: yup.string("Your program of study is required").required("Your program of study is required "),
        year: yup.string().required("Your current yea of study is required"),
        telephone: yup.string().required("Your telephone number is required").max(15),
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
                        <div className="d-flex justify-content-center align-items-center signup">

                            <Form>
                            <h4 className="h4 text-center">Registration form</h4>
                           {/* { console.log(formik.values.firstName)} */}
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
                                        <TextField label="Signature" name="signature" type="file" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className="btn btn-outline-success" type="submit">Register</button>
                                    </div>
                                </div>

                                <p className="text-light">Already have an account? <Link to="/student/login">Login</Link></p>
                            </Form>

                        </div>
                    )
                }




            </Formik>








            {/* <form className="form rounded signup_form" onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">First name</label>
                        <input className="form-control" type="text" name="fname" onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Last name</label>
                        <input className="form-control" type="text" name="lname" onChange={e => setLastName(e.target.value)} />
                    </div>


                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Registration number</label>
                        <input className="form-control" type="text" name="regno" onChange={e => setRegistrationNumber(e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Student number</label>
                        <input className="form-control" type="number" name="stdno" onChange={e => setStudentNumber(e.target.value)} />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <label className="form-label mt-2 mb-0 ">Program</label>
                        <select name="program" className="form-select" onChange={e => setProgram(e.target.value)}>
                            <option value="BSCS">Bachelor of Science in Computer Science</option>
                            <option value="BSSE">Bachelor of Science in Software Engineering</option>
                            <option value="BIST">Bachelor of Science in Information Systems and Technology</option>
                            <option value="BLIS">Bachelor of Science in Library and Information Systems</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <label className="form-label mt-2 mb-0 ">Email</label>
                        <input type="email" className="form-control" name="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Year</label>
                        <select name="year" className="form-select" onChange={e => setYear(e.target.value)}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Telephone</label>
                        <input type="tel" className="form-control" name="telephone" onChange={e => setTelephone(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <label className="form-label mt-2 mb-0 ">Signature</label>
                        <input type="file" className="form-control" name="signature" onChange={e => setSignature(e.target.files[0])} />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-success" type="submit">Register</button>
                    </div>
                </div>

                <p>Already have an account? <Link to="/student/login">Login</Link></p>

            </form> */}
            {/* </div> */}
        </>

    );
}

export default StudentSignup;