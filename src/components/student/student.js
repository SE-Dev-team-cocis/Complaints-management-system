// const prevBtn = document.querySelector(".btn-prev")
// // const prevBtns = document.querySelectorAll(".btn-prev")
// // const next = document.querySelector('.btn-next')
// const nextBtns = document.querySelectorAll('.btn-next')
// const progress = document.getElementById("progress")
// const formSteps = document.querySelectorAll(".form-step")

// const progressSteps = document.querySelectorAll(".progress-step")

// let formStepsNums = 0;

// nextBtns.forEach(btn=>{
//     btn.addEventListener("click", ()=>{
//         console.log("clicked")
//         formStepsNums++;  
//         updateFormSteps()
//         updateProgressBar()
//     })
// });

    // prevBtn.addEventListener('click', ()=>{
    //     formStepsNums--;
    //     updateFormSteps()
    //     // console.log('reduced')
    //     updateProgressBar()
    // })



// function updateFormSteps(){
//     console.log(formStepsNums)
//     formSteps.forEach((formStep)=>{
//         formStep.classList.contains('active') && formStep.classList.remove('active')
//     })
    
//     formSteps[formStepsNums].classList.add("active");
// }


// function updateProgressBar(){
//     progressSteps.forEach((progressStep, index)=>{
//         if(index < formStepsNums + 1){
//             progressStep.classList.add('active')
//         }else{
//             progressStep.classList.remove('active') 
//         }
//     })

//     // For the progress line
//     const progressActive = document.querySelectorAll('.progress-step.active')
//     progress.style.width = (progressActive.length -1)/(progressSteps.length-1) * 100 + '%'
// }



// Continue button on disclainer
// const preview = document.querySelector(".preview");
// const continueBtn = document.getElementById("continue");
// continueBtn.addEventListener("click",()=>{
//     if(!(preview.classList.contains("active"))){
//         preview.classList.add("active")
//     }else{
//         preview.classList.add("active")
//     }

// })


// Student dashboard

// const links = document.querySelectorAll(".dash_link")

// links.forEach((link)=>{
//     link.addEventListener("click", ()=>{
//         // link.classList.contains("active")
//         console.log("hello")
//     })
// })



// Disclaimer popup
// const continueDisclaimer = document.getElementById("continue");


