import React from 'react'
import * as yup from 'yup'
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import axios from 'axios';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure()

function PasswordResetPopup() {
  //For the toast notification
  const notify = () => {
    toast.success('Password successfully changed', {
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


  const validate = yup.object({
    newPassword: yup.string().required("New password is required").min(8, "Password must be at least 8 characters").max(23),
    confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], "Passwords don't match").required("Confirm password is required")
  })

  function removePopup(values){

      const popup = document.getElementById("reset")
       popup.classList.add("pass_reset")


    // if(newPassword !== confirmNewPassword){
    //   return
    // }else{
    //   // console.log("Passwords match")
    
    //   const popup = document.getElementById("reset")
    //   // if(popup.classList.contains("visible")){
    //     // popup.classList.remove("visible")
    //     popup.classList.add("pass_reset")
    //   // }
    //   //Handle password reset
    //   // axios.post("http://localhost:8000/student/reset-password", {
        
    //   // })
    // }

  }

  return (
    <>
    <div className="passwordReset_popup" id='reset'>
      {/* <div className="passwordReset_popup_inner"> */}

            <div className="passwordReset_popup_inner visible login_form reset_password bg-light rounded">
                <Formik
                    initialValues={{
                        newPassword: '',
                        confirmPassword: ''
                    }}
                    onSubmit={(values) => {
                      // console.log(values)
                      const newPassword = values.newPassword
                      const confirmPassword = values.confirmPassword

                      if(newPassword === confirmPassword){
                        //Take data into the database

                        notify() //Toast notification
                        removePopup(); //remove the popup
                      }else{
                        return
                      }

                    }}
                    validationSchema={validate}
                    >
                    {
                        formik => (
                            <div className='reset_password'>
                                {/* {console.log(formik.values)}     */}
                                <h4 className="h4 text-center">Reset Your password to continue</h4>
                                <Form >
                                  
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

                                <div className="row d-flex justify-content-between align-items-center mt-3">
                                  {/* <div className="col"> */}
                                    <button type="submit" className="btn btn-success btn-sm">Reset Password</button>
                                    {/* <button type="submit" className="btn btn-success btn-sm" onClick={()=>handlePasswordReset(formik.values)}>Reset Password</button> */}
                                  {/* </div> */}
                                </div>
                          
                                </Form>
     
                            </div>
                        )
                    }

                       
                </Formik>
            </div>


      {/* </div> */}

    </div>
      <ToastContainer />
    </>

  )
}

export default PasswordResetPopup