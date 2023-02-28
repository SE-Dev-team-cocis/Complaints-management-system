import React, { useRef } from 'react'

function ProgressBar({ complaintStep }) {

    return (
        <>
            <div className="progressbar">
                {
                    // Conditionally render the progress horizontal bar
                    complaintStep === 1 ? (<div className="progress" id="progress"> </div>) :
                        complaintStep === 2 ? (<div className="progress1" id="progress" > </div>) :
                            complaintStep === 3 ? (<div className="progress2" id="progress"> </div>) :
                                complaintStep === 4 ? (<div className="progress2" id="progress"> </div>) : ""
                }

                {
                    complaintStep === 1 ? (<><div className="progress-step active" data-title="Student details"></div>
                        <div className="progress-step" data-title="Complaint details"></div>
                        <div className="progress-step" data-title="Preview"></div> </>) :
                        complaintStep === 2 ? (<><div className="progress-step active " data-title="Student details"></div>
                            <div className="progress-step active" data-title="Complaint details"></div>
                            <div className="progress-step" data-title="Preview"></div></>) :
                            complaintStep === 3 ? (<> <div className="progress-step active" data-title="Student details"></div>
                                <div className="progress-step active" data-title="Complaint details"></div>
                                <div className="progress-step active" data-title="Preview"></div></>) :
                                complaintStep === 4 ? (<> <div className="progress-step active" data-title="Student details"></div>
                                    <div className="progress-step active" data-title="Complaint details"></div>
                                    <div className="progress-step active" data-title="Preview"></div></>) : ""

                }
            </div>
        </>
    )
}

export default ProgressBar