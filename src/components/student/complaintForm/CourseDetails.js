import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement } from '../../../redux/counterSlice'

import { Field } from 'formik'

import { TextField } from '../TextField'
import LecturerList from './LecturerList'
import ProgressBar from './ProgressBar'

import { decrement, increment } from '../../../redux/counterSlice'

function CourseDetails({ handleChange }) {

    const { complaintStep } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <>

            <div className="card active" data-step>
                <ProgressBar complaintStep={complaintStep} />
                <h4 className="text-center text-grey h4">COURSE DETAILS</h4>

                <label className="form-label">Nature of complaint</label>
                <div className="row">
                    <div className="form-check col-6">
                        <label><Field type="radio" className="form-check-input" onChange={handleChange} name="nature" value="Missing Coursework" />Missing Coursework</label>
                    </div>
                    <div className="form-check col-6">
                        <label><Field type="radio" className="form-check-input" onChange={handleChange} name="nature" value="Missing Exam" />Missing Exam</label>
                    </div>
                </div>
                <div className="row">
                    <div className="form-check col-6">
                        <label><Field type="radio" className="form-check-input" onChange={handleChange} name="nature" value="Missing All" />Missing All</label>

                    </div>
                    <div className="form-check col-6">
                        <label><Field type="radio" className="form-check-input" onChange={handleChange} name="nature" value="Remarking" />Remarking</label>
                    </div>
                </div>
                <div className="row">
                    <div className="form-check col-12">
                        <label><Field type="radio" className="form-check-input" onChange={handleChange} name="nature" value="Other" />Others(specify)</label>

                    </div>
                    <div className="col-12">
                        <textarea className="form-control" rows="5" onChange={handleChange} id="comment" name="text" placeholder='Briefly explain your issue here in not more than 200 words.....'></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <TextField label="Course code" type="text" name="courseCode" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-8">
                        <TextField label="Course unit" type="text" name="courseUnit" onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label className="form-label">Year of sitting</label>
                        <Field as="select" name="yearOfSitting" onChange={handleChange} className="form-select">
                            <option value="2019/2020">2019/2020</option>
                            <option value="2020/2021">2020/2021</option>
                            <option value="2021/2022">2021/2022</option>
                            <option value="2022/2023">2022/2023</option>
                        </Field>

                    </div>
                    <div className="col-6">
                        <label className="form-label">Semester</label>
                        <Field as="select" name="semester" onChange={handleChange} className="form-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Field>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <label className="form-label">Course lecturer</label>
                        <LecturerList handleChange={handleChange} />

                    </div>
                </div>

                <div className="row">
                    <div className="d-flex justify-content-center align-items-center mt-3">
                        {/* <button type="submit">Next</button> */}
                        <button onClick={() => dispatch(decrement())} className="btn btn-m me-5 btn-outline-success btn-prev pe-5 ps-5">Previous</button>
                        {/* <button onClick={() => dispatch(increment())} className="btn btn-m btn-save btn-success pe-5 ps-5" >Save</button> */}
                        <button onClick={() => dispatch(increment())} className='btn btn-m btn-save btn-success pe-5 ps-5'> Save</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CourseDetails