import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


import { Link } from "react-router-dom";
import Logo from '../muk.png';

import { Formik, Form } from "formik";
import { TextField } from "./TextField";

const StudentLogin = () => {

    // const [username, setUsername] = useState("")
    // const [oldPassword, setOldPassword] = useState("")
    // const [newPassword, setNewPassword] = useState("")
    // const [newPasswordConfrim, setNewPasswordConfirm] = useState("")
    // const [error, setError] = useState("")

 
    const validate = yup.object({
        username: yup.string("Username cannot contain /><;@^%&#").required("Username is required"),
        password: yup.string().required("Password is required"),
        newPassword: yup.string().required("New password is required").min(8, "Password must be at least 8 characters").max(23),
        confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], "Passwords don't match").required("onfirm password is required")
    })

    return ( 
        <div className="login">
        <header className=' w-100 p-3 login_header text-success fs-5 fw-bold' style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", left:"50%"}}>
            {/* <div className='site_logo d-flex flex-direction-column align-items-center'  > */}
            {/* <div className='site_logo ' style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", left:"50%"}} > */}
                <img src={Logo} alt="logo" style={{width:"100px", height:"100px"}}className='me-5 muk_logo'/>
                <p className="">MAKERERE UNIVERSITY</p>
                <p className='fs-5 fw-4 '>Complaints Portal</p>
            {/* </div> */}
            
        </header>

        <div className="d-flex justify-content-center align-items-center ">


        <Formik
        initialValues = {{ 
            username: '',
            password: '',
            newPassword: '',
            confirmPassword: ''
         }}
         validationSchema = {validate}
        >
        {
            formik => (
                <div>
                    <h4 className="h4 text-center">Login page</h4>
                    {console.log(formik)}
                    <Form>
                        <TextField label="Username" name="username" type="text"/>
                        <TextField label="Password" name="password" type="password"/>
                        <TextField label="New Password" name="newPassword" type="password"/>
                        <TextField label="Confirm Pasword" name="confirmPassword" type="password"/>

                        <div className="row mt-4">
                            <div className="col-12"> 
                                <div className="d-flex justify-content-around align-items-center">
                                    <button className="btn btn-outline-success" type="submit">Login</button>
                                    <button className="btn btn-danger" type="reset">Clear</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <p className="mt-3">Don't have an account? <Link to="/student/signup">Register</Link> here</p>
                </div>
            )
        }

        </Formik>
       </div>
   
     </div>
       
 );
}
 
export default StudentLogin;