import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from "react-router-dom";
import Logo from '../muk.png';

import { Formik, Form } from "formik";
import { TextField } from "./TextField";


const StudentLogin = () => {
    //For the toast notification
    const notify = () => toast("Login successful!");

    
    // const params = useParams();
    // // const std_password = useParams();
    // console.log(JSON.stringify(params))

    // if(params.username && params.password){
    //     console.log(params.username, params.password)
    // }else{
    //     console.log("No params")
    // }

    const navigate = useNavigate();

    const validate = yup.object({
        username: yup.number().required("Username is required"),
        password: yup.string().required("Password is required"),
        newPassword: yup.string().required("New password is required").min(8, "Password must be at least 8 characters").max(23),
        confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], "Passwords don't match").required("Confirm password is required")
    })

    function handleLogin(values){
        if(values.newPassword !== values.confirmPassword){
            return
        }else{
            let loginDetails = {
                studentNo: values.username,
                password: values.password,
                newPassword: values.newPassword
                //jjjj
            }
            // console.log(loginDetails)
            // navigate("/student/");

            //Make a post request to the backend
            let url = "http://localhost:4000/student/login"; //Change this to the URL you are going to use to login
            // fetch(url, {
            //     method: "POST",
            //     body: JSON.stringify(loginDetails),
            //     headers: {
            //         "Content-Type": "application/json"
            //         }
            //     }
            // ).then((response)=>{
            //     window.alert(JSON.stringify(response))
            //     navigate("/student/")
            // }).catch(error=>{
            //     window.alert(error)
            //     return
            // })
          
            axios.post(url,loginDetails,{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+ 123
                }
            }).then((response)=>{
                    const {user,token,complaints,login}=response.data;
                    if(login===true){
                    localStorage.setItem("student",JSON.stringify(user));
                    localStorage.setItem("token",JSON.stringify(token));
                    localStorage.setItem("complaint",JSON.stringify(complaints));
                    navigate("/student/")
                    }else{
                         toast.error(response.data.message,{
                            position: toast.POSITION.TOP_CENTER
                         });
                       
                        return
                    }
                }).catch(error=>{
                    window.alert(error)
                    console.log(error)
                    return
                })

            // console.log(loginDetails)
        }
     
    }

    return (
        <div className="login">
            <header className='p-3 login_header text-success fs-5 fw-bold' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", left: "50%" }}>
                <img src={Logo} alt="logo" style={{ width: "80px", height: "80px" }} className='me-5 muk_logo' />
                <p className="">MAKERERE UNIVERSITY</p>
                <p className='fs-5 fw-4 '>Complaints Portal</p>
            </header>


            {/* <div className="d-flex justify-content-center align-items-center "> */}
            <div className="login_form bg-light rounded">
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        newPassword: '',
                        confirmPassword: ''
                    }}
                    validationSchema={validate}
                    >
                    {
                        formik => (
                            <div>
                                {/* {console.log(formik.values)}     */}
                                <h4 className="h4 text-center">Login page</h4>
                                <Form>
                                    <div className="row">
                                        <div className="col-12">
                                         <TextField label="Username" name="username" type="number" placeholder="Your student number is your username"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                        <TextField label="Password" name="password" type="password" placeholder="Enter your old password" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                        <TextField label="New Password" name="newPassword" type="password" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                        <TextField label="Confirm Pasword" name="confirmPassword" type="password" />
                                        </div>
                                    </div>
                          

                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-around align-items-center">
                                    
                                                <button className="btn btn-outline-success" type="submit" onClick={()=>handleLogin(formik.values)}>Login</button>
                                                {/* <button className="btn btn-outline-success" type="submit" onSubmit={(values)=>console.log(values)}>Login</button> */}
                                                <button className="btn btn-danger" type="reset">Clear</button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                                <p className="mt-3 text-dark">Don't have an account? <Link to="/student/signup">Register</Link> here</p>
                            </div>
                        )
                    }

                       
                </Formik>
            </div>

        </div>

    );
}

export default StudentLogin;