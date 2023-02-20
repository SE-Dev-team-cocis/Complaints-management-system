import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../../redux/counterSlice'

import { TextField } from '../TextField'

function StudentDetails() {

    const { complaintStep } = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    return (
        <div className="card active" data-step>

            <h4 className="text-center text-grey h4">STUDENT DETAILS</h4>

            <div className="row">
                <div className="col-12">
                    <TextField label="Name" name="name" type="text" readOnly />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <TextField label="Registration Number" name="regNo" type="text" readOnly />
                </div>
                <div className="col-6">
                    <TextField label="Student Number" name="studentNo" type="number" readOnly />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <TextField label="Course" name="course" type="text" readOnly />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <TextField label="Telephone Number" name="telephone" type="number" readOnly />
                </div>
                <div className="col-6">
                    <TextField label="Email" name="email" type="email" readOnly />
                </div>
            </div>

            <div className="row">
                <div className="d-flex justify-content-center align-items-center mt-3">
                    {/* <button type="submit">Next</button> */}
                    <button type="button" onClick={() => {
                        dispatch(increment())
                        // moveStep(complaintStep)
                    }
                    } className="btn btn-m btn-outline-success btn-next pe-5 ps-5" id="btn">Next</button>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails