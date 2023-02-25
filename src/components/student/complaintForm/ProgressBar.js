import React, { useRef } from 'react'

function ProgressBar({ complaintStep }) {
    // const progressSteps = document.querySelectorAll(".progress-step")
    // const progress = document.querySelector(".progress")
    // console.log(progress)

    // if (complaintStep === 1) {
    //     progress.style.width = `${(complaintStep - 1) / (progressSteps.length - 1) * 100}%`
    //     // const progressWidth = (complaintStep - 1) / (progressSteps.length - 1) * 100
    // }
    // else if (complaintStep === 2) {
    //     progress.style.width = `${(complaintStep - 1) / (progressSteps.length - 1) * 100}%`
    // } else {
    //     progress.style.width = "100%"
    // }
    // // console.log(progressSteps.length)

    return (
        <>
            <div className="progressbar">
                <div className="progress" id="progress"> </div>
                {
                    complaintStep === 1 ? (<><div className="progress-step active" data-title="Student details"></div>
                        <div className="progress-step" data-title="Complaint details"></div>
                        <div className="progress-step" data-title="Preview"></div> </>) :
                        complaintStep === 2 ? (<><div className="progress-step active " data-title="Student details"></div>
                            <div className="progress-step active" data-title="Complaint details"></div>
                            <div className="progress-step" data-title="Preview"></div></>) :
                            complaintStep === 3 ? (<> <div className="progress-step active" data-title="Student details"></div>
                                <div className="progress-step active" data-title="Complaint details"></div>
                                <div className="progress-step active" data-title="Preview"></div></>) : ""

                }

            </div>
        </>
    )
}

export default ProgressBar