import React from 'react'
import StudentDetails from './StudentDetails'
import CourseDetails from './CourseDetails'
import PreviewPopup from './PreviewPopup';
import DisclaimerPopup from './DisclaimerPopup';

import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';


function Step({ handleChange, name, email, telephone, registrationNumber, studentNumber, course, nature, semester, yearOfSitting, lecturer, coursecode, courseunit }) {
    // Getting the counter value from the reducer store
    let { complaintStep } = useSelector((state) => state.counter);

    switch (complaintStep) {
        case 1:
            return <StudentDetails handleChange={handleChange} />

        case 2:
            return <CourseDetails handleChange={handleChange} />

        case 3:
            return (<CourseDetails handleChange={handleChange} /> && <DisclaimerPopup />)

        case 4:
            return (<CourseDetails /> && <PreviewPopup
                name={name} email={email} telephone={telephone} registrationNumber={registrationNumber}
                studentNumber={studentNumber} course={course} nature={nature} semester={semester}
                yearOfSitting={yearOfSitting} lecturer={lecturer} coursecode={coursecode} courseunit={courseunit}
            />)
        default:
            return <StudentDetails />
    }

}

export default Step