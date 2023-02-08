import React, { useState } from 'react'
import "./student.css"
import { increment} from '../redux/counterSlice'
import { useDispatch } from 'react-redux'

function DisclaimerPopup(trigger) {
    const dispatch = useDispatch()

    const [agree, setAgree] = useState(false)
    const [disagree, setDisagree] = useState(false)
    // const [continue, setContinue] = useState(false)
    
    // const agree = document.getElementById("agree");
    // const disagree = document.getElementById("disagree");
    

    function isChecked(e){


        // const button = document.getElementById("continue");
       
        // const agree = document.getElementById("agree").isChecked;
        // const disagree = document.getElementById("disagree").isChecked;

        // // if(e.target.classList.contains('agree')){
        // if(agree){
        //     button.disabled = false
        //     disagree.disabled = true
        //     // console.log("agree checked")
        // }else{
        //     button.disabled = true;
        //     disagree.disabled = false
        //     // console.log("agree unchecked ")
        // }

        // if(e.target.classList.contains('agree')){
        //     button.disabled = true;
        //     agree.disabled = true;
        //     // console.log("disagree checked")
        // }else{
        //     agree.disabled = false;
        //     // button.disabled =
        // }

        // // if(agree.isChecked){
        // //     button.disabled = false;
        // // }else{
        // //     button.disabled = true;
        // // }
        // // if()

    }


  return (
    <div className="disclaimer_popup">
        <div className="disclaimer_popup_inner">
            <p>I Loor Jacobson</p>
            <input type="checkbox" name='agree' className='me-2 agree' id="agree" onChange={()=>{
                setAgree(agree=>!agree)}}/>agree to the terms and conditions stipulated
            in the Examination and Marking policy of Makerere University - Kampala.<br />By submitting
            this claim, i am very aware of the consequences this can cause to my academic progress.
            <br />{agree?(<input className='me-2 disagree' type="checkbox" id="disagree" onChange={()=>{
                setDisagree(disagree=>!disagree);
            }} disabled/>):(<input className='me-2 disagree' type="checkbox" d="disagree" onChange={()=>{
                setDisagree(disagree=>!disagree);
            }}/>)}Disagree
            {agree ?(<button onClick={()=>dispatch(increment())} type = "button" className='btn btn-outline-success' id="continue">CONTINUE</button>): (<button type = "button" className='btn btn-outline-success' id="continue" disabled>CONTINUE</button>)}
        </div>   

    </div>
  )
}

export default DisclaimerPopup