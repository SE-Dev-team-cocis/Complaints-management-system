import React, {useContext, useState} from 'react'

import { AddComplaintContext } from './AddComplaint'

function StudentDetails() {
    // const {setStepCount} = useContext(AddComplaintContext)
    // const {stepCount} = useContext(AddComplaintContext)

    // const [newStepCount, setNewStepCount] = useState(1);

  return (
    // <div className="form-step active">
    <div className="card form-step active" data-step>

    <h4 className="text-center text-grey h4">STUDENT DETAILS</h4> 
    
    <div className="row">
        <div className="col-12">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value="Loor Jacobson" readOnly />
        </div>
    </div>
    <div className="row">
        <div className="col-6">
            <label className="form-label">Registration Number</label>
            <input type="text" className="form-control" value="20/U/7806/PS" readOnly />
        </div>
        <div className="col-6">
            <label className="form-label">Student Number</label>
            <input type="text" className="form-control" value="2000707806" readOnly />
        </div>
    </div>

    <div className="row">
        <div className="col-12">
            <label className="form-label">Course</label>
            <input type="text" className="form-control" value="BSSE" readOnly />
        </div>
    </div>
    <div className="row">
        <div className="col-6">
            <label className="form-label">Telephone Number</label>
            <input type="text" className="form-control" value="084772664" readOnly />
        </div>
        <div className="col-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value="loorinho@gmail.com" readOnly />
        </div>
    </div>

    <div className="row">
    <div className="d-flex justify-content-center align-items-center mt-3">
         <button type="button" onClick={()=>{
            // setStepCount((prev) =>prev+1)
            console.log("next clicked")
            }
        } className="btn btn-m btn-outline-success btn-next pe-5 ps-5" id="btn" data-next>Next</button>
        
    </div>
</div>
</div>

  )
}

export default StudentDetails