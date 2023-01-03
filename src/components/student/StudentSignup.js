import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../muk.png';

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

    function handleSubmit(e){
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

        console.log(student)
    }


    return ( 

        <>
            <header className='bg-white w-100 h-10 p-3 d-flex justify-content-center align-items-center'>
                <div className='site_logo d-flex justify-content-around align-items-center' >
                    <img src={Logo} alt="logo" className='me-5 muk_logo'/>
                    <span className='fs-4 text-success'>Complaints Portal</span>
                </div>
            </header>


            <div className="d-flex justify-content-center align-items-center signup">
            <form className="form rounded signup_form" onSubmit={handleSubmit}>
                <h4 className="h4 text-center">Registration form</h4>
                <div className="row">
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">First name</label>
                        <input className="form-control" type="text" name="fname" onChange={e=>setFirstName(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Last name</label>
                        <input className="form-control" type="text" name="lname" onChange={e=>setLastName(e.target.value)} />
                    </div>
               
                
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Registration number</label>
                        <input className="form-control" type="text" name="regno" onChange={e=>setRegistrationNumber(e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Student number</label>
                        <input className="form-control" type="number" name="stdno" onChange={e=>setStudentNumber(e.target.value)} />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <label className="form-label mt-2 mb-0 ">Program</label>
                        <select name="program" className="form-select" onChange={e=>setProgram(e.target.value)}>
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
                         <input type="email" className="form-control" name="email" onChange={e=>setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <label className="form-label mt-2 mb-0 ">Year</label>
                        <select name="year" className="form-select" onChange={e=>setYear(e.target.value)}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                        </select>
                    </div>
                    <div className="col-6">
                         <label className="form-label mt-2 mb-0 ">Telephone</label>  
                         <input type="tel" className="form-control" name="telephone" onChange={e=>setTelephone(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                         <label className="form-label mt-2 mb-0 ">Signature</label>  
                         <input type="file" className="form-control" name="signature" onChange={e=>setSignature(e.target.files[0])} />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-success" type="submit">Register</button>
                    </div>
                </div>

                <p>Already have an account? <Link to="/student/login">Login</Link></p>
                
            </form>
        </div>
        </>
       
     );
}
 
export default StudentSignup;