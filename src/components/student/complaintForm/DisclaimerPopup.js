import React, { useState } from 'react'
import "../student.css"
import { increment, decrement } from '../../../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'


function DisclaimerPopup(trigger) {
    const dispatch = useDispatch()
    const { complaintStep } = useSelector((state) => state.counter)

    const [agree, setAgree] = useState(false)
    const [disagree, setDisagree] = useState(false)

    return (

        <div className="disclaimer_popup">
            {console.log(complaintStep)}
            <div className="disclaimer_popup_inner">
                <p>I Loor Jacobson</p>
                <input type="checkbox" name='agree' className='me-2 agree' id="agree" onChange={() => {
                    setAgree(agree => !agree)
                }} />agree to the terms and conditions stipulated
                in the Examination and Marking policy of Makerere University - Kampala.<br />By submitting
                this claim, i am very aware of the consequences this can cause to my academic progress.
                <br />{agree ? (<input className='me-2 disagree' type="checkbox" id="disagree" onChange={() => {
                    setDisagree(disagree => !disagree);
                }} disabled />) : (<input className='me-2 disagree' type="checkbox" d="disagree" onChange={() => {
                    setDisagree(disagree => !disagree);
                }} />)}Disagree
                {agree ? (<button onClick={() => dispatch(increment())} type="button" className='btn btn-outline-success' id="continue">CONTINUE</button>) : (<button type="button" className='btn btn-outline-success' id="continue" disabled>CONTINUE</button>)}
            </div>

        </div>
    )
}

export default DisclaimerPopup