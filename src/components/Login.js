
import * as yup from 'yup'

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from "react-router-dom";
import Logo from './muk.png';

import { Formik, Form } from "formik";
import { TextField } from "./student/TextField";

const Login = () => {
  const navigate = useNavigate();
  //For the toast notification
  const notify = () => {
    toast.success('Logged in successfully', {
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
    username: yup.number().required("Username is required"),
    password: yup.string().required("Password is required"),

  })
  return (
    <>
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
            }}
            onSubmit={(values) => {
              const username = values.username
              const password = values.password

              const user = {
                username: username,
                password: password
              }

              //Submit data into the database
              notify();
              navigate("/student")

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
                        <TextField label="Username" name="username" type="number" placeholder="Your student number is your username" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <TextField label="Password" name="password" type="password" placeholder="Enter your old password" />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <div className="d-flex justify-content-around align-items-center">

                          <button className="btn btn-outline-success" type="submit">Login</button>
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
      <ToastContainer />
    </>

  );
}

export default Login;