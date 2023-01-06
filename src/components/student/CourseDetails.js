import React from 'react'

function CourseDetails() {
  return (
    // <div className="card form-step">
    <div className="card" data-step>
            <h4 className="text-center text-grey h4">COURSE DETAILS</h4>
            
            <label className="form-label">Nature of complaint</label>
            <div className="row">
                <div className="form-check col-6">
                    <input type="radio" className="form-check-input" name="nature" value="" />Missing Coursework
                    
                </div>
                <div className="form-check col-6">
                    <input type="radio" className="form-check-input" name="nature" value=""/>Missing Exam
                    
                </div>
            </div>
            <div className="row">
                <div className="form-check col-6">
                    <input type="radio" className="form-check-input" name="nature" value="" />Missing All
                    
                </div>
                <div className="form-check col-6">
                    <input type="radio" className="form-check-input" name="nature" value=""/>Remarking
                    
                </div>
            </div>
            <div className="row">
                <div className="form-check col-4">
                    <input type="radio" className="form-check-input" name="nature" value="" />Others(specify)
                    
                </div>
                <div className="col-8">
                    <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <label className="form-label">Course Code</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-8">
                    <label className="form-label">Course Unit</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className="form-label">Year of sitting</label>
                    <select className="form-select" name="semester">
                        <option value="2019/2020">2019/2020</option>
                        <option value="2020/2021">2020/2021</option>
                        <option value="2021/2022">2021/2022</option>
                        <option value="2022/2023">2022/2023</option>
                    </select>
                </div>
                <div className="col-6">
                    <label className="form-label">Semester</label>
                    <select className="form-select" name="semester">
                        <option value="1">1</option>
                        <option value="2">1</option>
                    </select>
        
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <label className="form-label">Course lecturer</label>
                    <select className="form-select">
                        <option value="1">Joab Agaba</option>
                        <option value="2">Kamulegeya Hajji</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="d-flex justify-content-between align-items-center mt-3">
                        <button className="btn btn-m btn-outline-success btn-prev pe-5 ps-5" data-previous>Previous</button>
                        <button className="btn btn-m btn-save btn-success pe-5 ps-5" >Save</button>
                </div>
            </div>
        
    </div>
  )
}

export default CourseDetails